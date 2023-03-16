package armando.macchiarulo.ArtGalleries.Controller;

import armando.macchiarulo.ArtGalleries.DtoFolder.ArtworkToGallery;
import armando.macchiarulo.ArtGalleries.DtoFolder.TagToArworks;
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
@RequestMapping("/api/tags")
public class TagController {

    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private ArtworksRepository artworksRepository;
    @Autowired
    private GalleriesRepository galleriesRepository;

    @GetMapping
    public List<Tag> getAllTag() {
        return tagRepository.findAll();
    }

    @GetMapping("/{id}")
    public Tag getTagById(@PathVariable Integer id) {
        Optional<Tag> tag = tagRepository.findById(id);
        if (tag.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            return tag.get();
        }
    }
    @PostMapping
    public Tag createTag(@Valid @RequestBody Tag tag){
        if (tag.getId() == 0) {
            return tagRepository.save(tag);
        }else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
        }
    }
    @PutMapping("/{id}")
    public Tag updateTag(@Valid @RequestBody Tag tag, @PathVariable("id") Integer id){
        Optional<Tag> result = tagRepository.findById(id);
        if(result.isPresent()){
            tag.setId(id);
            tag.setArtwork(result.get().getArtwork());
//            if(result.get().getArtwork() != null){
//                tag.setArtwork(result.get().getArtwork());
//            }
            return tagRepository.save(tag);

        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public void deleteTag(@PathVariable("id") Integer id){
        Optional<Tag> result = tagRepository.findById(id);
        if(result.isPresent()){
            /*if(result.get().getArtwork()!= null){*/
                tagRepository.deleteById(id);
            /*}else{
                List<Artworks> artworksList = result.get().getArtwork();
                for (Artworks artwork : artworksList) {
                    List<Tag> tagList = artwork.getTagList();
                    tagList.remove(result.get());
                    artworksRepository.save(artwork);
                }
                tagRepository.deleteById(id);
            }*/

        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }



    @GetMapping("/{id}/artworks")
    public TagToArworks getTagToArworks(@PathVariable("id") Integer id){
        Optional<Tag> result = tagRepository.findById(id);
        TagToArworks tagToArworks = new TagToArworks();
        if(result.isPresent()){
                List<ArtworkToGallery> artworkToGalleryList = new ArrayList<>();
                for (Artworks artwork : result.get().getArtwork()) {
                    ArtworkToGallery artworkToGallery = new ArtworkToGallery();
                    if(artwork.getGallery()!= null){
                        Optional<Galleries> galleries = galleriesRepository.findById(artwork.getGallery().getId());
                        artworkToGallery.setGallery(galleries.get());
                    }else{
                        artworkToGallery.setGallery(null);
                    }


                    Optional<Artworks> artworks = artworksRepository.findById(artwork.getId());
                    artworkToGallery.setArtwork(artworks.get());
                    artworkToGalleryList.add(artworkToGallery);

                }
                tagToArworks.setArtworkPlusGallery(artworkToGalleryList);
                tagToArworks.setTag(result.get());

            return tagToArworks;
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
