package armando.macchiarulo.ArtGalleries.Controller;

import armando.macchiarulo.ArtGalleries.DtoFolder.ExhibitionToGallery;
import armando.macchiarulo.ArtGalleries.Entity.Exhibitions;
import armando.macchiarulo.ArtGalleries.Entity.Galleries;
import armando.macchiarulo.ArtGalleries.Repository.ExhibitionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/exhibition")
public class ExhibitionsController {
    @Autowired
    private ExhibitionsRepository exhibitionsRepository;

    @GetMapping
    public List<ExhibitionToGallery> getAllExhibitions(){
        List<ExhibitionToGallery> exhibitionToGalleryList = new ArrayList<>();
        List<Exhibitions> exhibitionsList = exhibitionsRepository.findAll();
        for (Exhibitions exhibitions : exhibitionsList) {
            ExhibitionToGallery temp = new ExhibitionToGallery();
            temp.setExhibitions(exhibitions);
            temp.setGalleries(exhibitions.getGallery());
            exhibitionToGalleryList.add(temp);
        }
        return exhibitionToGalleryList;
    }

    @GetMapping("/{id}")
    public Exhibitions getExhibitionById(@PathVariable Integer id) {
        Optional<Exhibitions> exhibitions = exhibitionsRepository.findById(id);
        if (exhibitions.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            return exhibitions.get();
        }
    }
    @GetMapping("/{id}/galleries")
    public ExhibitionToGallery getExhibitionByIdWithGallery(@PathVariable("id") Integer id) {
        Optional<Exhibitions> exhibition = exhibitionsRepository.findById(id);
        ExhibitionToGallery exhibitionToGallery = new ExhibitionToGallery();
        if (exhibition.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            exhibitionToGallery.setGalleries(exhibition.get().getGallery());
            exhibitionToGallery.setExhibitions(exhibition.get());
            return exhibitionToGallery;
        }
    }
    @PutMapping("/{id}")
    public Exhibitions updateExhibitionById(@PathVariable Integer id, @RequestBody Exhibitions exhibition){
        Optional<Exhibitions> exhibitionsResult = exhibitionsRepository.findById(id);
        if (exhibitionsResult.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        } else {
            exhibition.setGallery(exhibitionsResult.get().getGallery());
            exhibition.setId(id);
            return exhibitionsRepository.save(exhibition);
        }
    }
    @DeleteMapping("/{id}")
    public void deleteExhibitionById(@PathVariable Integer id) {
        Optional<Exhibitions> exhibitions = exhibitionsRepository.findById(id);
        if (exhibitions.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            exhibitionsRepository.deleteById(id);
        }
    }
}
