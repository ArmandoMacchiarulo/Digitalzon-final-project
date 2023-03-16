package armando.macchiarulo.ArtGalleries.Controller;

import armando.macchiarulo.ArtGalleries.DtoFolder.ArtworkToGallery;
import armando.macchiarulo.ArtGalleries.Entity.Artworks;

import armando.macchiarulo.ArtGalleries.Entity.Galleries;
import armando.macchiarulo.ArtGalleries.Entity.Tag;
import armando.macchiarulo.ArtGalleries.Repository.ArtworksRepository;

import armando.macchiarulo.ArtGalleries.Repository.GalleriesRepository;
import armando.macchiarulo.ArtGalleries.Repository.TagRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/artworks")
public class ArtworksController {
    @Autowired
    private ArtworksRepository artworkRepository;
    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private GalleriesRepository galleriesRepository;

    @GetMapping
    public List<Artworks> getAllArtworks() {
        return artworkRepository.findAll();
    }
    @GetMapping("/galleries")
    public List<ArtworkToGallery> getAllArtworkWithGallery(){
        List<ArtworkToGallery> gallery = new ArrayList<ArtworkToGallery>();
        List<Artworks> artworks = artworkRepository.findAll();
        for (Artworks artwork : artworks) {
            ArtworkToGallery temp = new ArtworkToGallery();
            temp.setArtwork(artwork);
            temp.setGallery(artwork.getGallery());
            gallery.add(temp);
        }
        return gallery;
    }

    @GetMapping("/{id}")
    public Artworks getArtworksById(@PathVariable Integer id) {
        Optional<Artworks> artworks = artworkRepository.findById(id);
        if (artworks.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            return artworks.get();
        }
    }
    @GetMapping("/{id}/galleries")
    public ArtworkToGallery getArtworkWithGalleryById(@PathVariable Integer id) {
        ArtworkToGallery DtoArtwork = new ArtworkToGallery();
        Optional<Artworks> artworks = artworkRepository.findById(id);
        if (artworks.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            DtoArtwork.setArtwork(artworks.get());
            DtoArtwork.setGallery(artworks.get().getGallery());
            return DtoArtwork;
        }

    }

    @PostMapping
    public Artworks createArtworks(@Valid @RequestBody Artworks artworks){
        if (artworks.getId() == 0) {
            artworkRepository.save(artworks);
            if (!artworks.getTagList().isEmpty() || artworks.getTagList()==null) {
                List<Tag> tagList = artworks.getTagList();
                for (Tag tag : tagList) {
                    Optional<Tag> tempTag = tagRepository.findById(tag.getId());
                    List<Artworks> artworksList = tempTag.get().getArtwork();
                    if(artworksList == null || artworksList.isEmpty()){
                        List<Artworks> tempArtwork = new ArrayList<>();
                        tempArtwork.add(artworks);
                        artworksList = tempArtwork;
                    }
                    if( !artworksList.contains(artworks)){

                        artworksList.add(artworks);
                    }
                    tag.setArtwork(artworksList);
                    tagRepository.save(tag);

                }
            }
            return artworkRepository.save(artworks);
        }else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
        }
    }
    @PutMapping("/{id}")
    public Artworks updateArtworks(@Valid @RequestBody Artworks artworks, @PathVariable("id") Integer id){
        Optional<Artworks> result = artworkRepository.findById(id);
        if(result.isPresent()){
            artworks.setId(id);
            if(artworks.getPrice() > 0){
                artworks.setGallery(null);
            }else{
                artworks.setGallery(result.get().getGallery());
            }
            if(!artworks.getTagList().equals(result.get().getTagList())){
                //eliminare tag non presenti
                Artworks oldArtworks = result.get();
                for (Tag tag : oldArtworks.getTagList()) {
                    List<Artworks> temp= tagRepository.findById(tag.getId()).get().getArtwork();
                    if(temp.contains(oldArtworks) &&!temp.contains(artworks)){
                        temp.remove(oldArtworks);
                        tag.setArtwork(temp);
                        tagRepository.save(tag);
                    }

                }

                //aggiungere tag presenti
                for (Tag tag : artworks.getTagList()) {
                    if(tag.getArtwork() == null){
                        tag.setArtwork(new ArrayList<>());
                    }
                    List<Artworks> temp= tagRepository.findById(tag.getId()).get().getArtwork();
                    if(!temp.contains(artworks)){
                        tag.setArtwork(temp);
                        tag.getArtwork().add(artworks);
                        tagRepository.save(tag);
                    }


                }
            }


            return artworkRepository.save(artworks);

        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteArtworks(@PathVariable("id") Integer id){
        Optional<Artworks> result = artworkRepository.findById(id);
        if(result.isPresent()){
            if(result.get().getTagList()!= null){
                List<Tag> taglist = result.get().getTagList();
                for (Tag tag : taglist) {
                    List<Artworks> artowrksList = tag.getArtwork();
                    artowrksList.remove(result.get());
                    tagRepository.save(tag);
                }
            }if(result.get().getGallery()!= null){
                Galleries gallery = result.get().getGallery();
                List<Artworks> artworksList = gallery.getArtworksList();
                artworksList.remove(result.get());
            }
            artworkRepository.deleteById(id);
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
