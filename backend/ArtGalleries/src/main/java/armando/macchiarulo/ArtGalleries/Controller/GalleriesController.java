package armando.macchiarulo.ArtGalleries.Controller;

import armando.macchiarulo.ArtGalleries.DtoFolder.ExhibitionToGallery;
import armando.macchiarulo.ArtGalleries.Entity.Artworks;
import armando.macchiarulo.ArtGalleries.Entity.Exhibitions;
import armando.macchiarulo.ArtGalleries.Entity.Galleries;
import armando.macchiarulo.ArtGalleries.Entity.Tag;
import armando.macchiarulo.ArtGalleries.Repository.ArtworksRepository;
import armando.macchiarulo.ArtGalleries.Repository.ExhibitionsRepository;
import armando.macchiarulo.ArtGalleries.Repository.GalleriesRepository;
import armando.macchiarulo.ArtGalleries.Repository.TagRepository;
import jakarta.validation.Valid;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/galleries")
public class GalleriesController {
    @Autowired
    private GalleriesRepository galleriesRepository;
    @Autowired
    private ArtworksRepository artworksRepository;
    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private ExhibitionsRepository exhibitionsRepository;

    @GetMapping
    public List<Galleries> getAllGalleries() {

        return galleriesRepository.findAll();


    }

    @GetMapping("/{id}")
    public Galleries getGalleriesById(@PathVariable Integer id) {
        Optional<Galleries> galleries = galleriesRepository.findById(id);
        if (galleries.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            return galleries.get();
        }
    }

    @GetMapping("/{id}/artworks")
    public List<Artworks> getArtworksByGalleryId(@PathVariable Integer id) {
        Optional<Galleries> galleries = galleriesRepository.findById(id);
        if (galleries.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            return galleries.get().getArtworksList();
        }
    }

    @GetMapping("/{id}/artworks/{artworkId}")
    public Artworks getArtworksByGalleryId(@PathVariable("id") Integer id, @PathVariable("artworkId") Integer artworkId) {
        Optional<Galleries> galleries = galleriesRepository.findById(id);
        Optional<Artworks> artworks = artworksRepository.findById(artworkId);
        if (galleries.isEmpty() || artworks.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            return artworks.get();
        }
    }

    @PostMapping
    public Galleries createGalleries(@Valid @RequestBody Galleries galleries) {
        if (galleries.getId() == 0) {
            return galleriesRepository.save(galleries);
        } else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    @PostMapping("/{id}")
    public Artworks createArtworksByGalleryId(@Valid @RequestBody Artworks artworks, @PathVariable("id") Integer id) {
        Optional<Galleries> galleries = galleriesRepository.findById(id);
        if (galleries.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            if (artworks.getId() == 0) {
                artworks.setGallery(galleries.get());
                artworksRepository.save(artworks);
                if (!artworks.getTagList().isEmpty() || artworks.getTagList() == null) {
                    List<Tag> tagList = artworks.getTagList();
                    for (Tag tag : tagList) {
                        Optional<Tag> tempTag = tagRepository.findById(tag.getId());
                        List<Artworks> artworksList = tempTag.get().getArtwork();
                        if (artworksList == null || artworksList.isEmpty()) {
                            List<Artworks> tempArtwork = new ArrayList<>();
                            tempArtwork.add(artworks);
                            artworksList = tempArtwork;
                        }
                        if (!artworksList.contains(artworks)) {

                            artworksList.add(artworks);
                        }
                        tag.setArtwork(artworksList);
                        tagRepository.save(tag);

                    }
                }
                return artworksRepository.save(artworks);
            } else {
                throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
            }
        }

    }

    @PutMapping("/{id}")
    public Galleries updateGalleries(@Valid @RequestBody Galleries galleries, @PathVariable("id") Integer id) {
        Optional<Galleries> result = galleriesRepository.findById(id);
        if (result.isPresent()) {
            galleries.setId(id);
            galleries.setArtworksList(result.get().getArtworksList());
//            if(result.get().getArtworksList() != null){
//                galleries.setArtworksList(result.get().getArtworksList());
//            }
            return galleriesRepository.save(galleries);

        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}/artworks/{artworkId}")
    public Artworks updateArtworksByGalleryIdByArtworkId(@Valid @RequestBody Artworks artworks, @PathVariable("id") Integer id, @PathVariable("artworkId") Integer artworkId) {
        Optional<Galleries> galleries = galleriesRepository.findById(id);
        Optional<Artworks> resultArtworks = artworksRepository.findById(artworkId);
        if (galleries.isEmpty() || resultArtworks.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            artworks.setId(artworkId);
            if (artworks.getPrice() > 0) {
                artworks.setGallery(null);
            } else {
                artworks.setGallery(resultArtworks.get().getGallery());
            }
            if (!artworks.getTagList().equals(resultArtworks.get().getTagList())) {
                //eliminare tag non presenti
                Artworks oldArtworks = resultArtworks.get();
                for (Tag tag : oldArtworks.getTagList()) {
                    List<Artworks> temp = tagRepository.findById(tag.getId()).get().getArtwork();
                    if (temp.contains(oldArtworks) && !temp.contains(artworks)) {
                        temp.remove(oldArtworks);
                        tag.setArtwork(temp);
                        tagRepository.save(tag);
                    }

                }

                //aggiungere tag presenti
                for (Tag tag : artworks.getTagList()) {
                    if (tag.getArtwork() == null) {
                        tag.setArtwork(new ArrayList<>());
                    }
                    List<Artworks> temp = tagRepository.findById(tag.getId()).get().getArtwork();
                    if (!temp.contains(artworks)) {
                        tag.setArtwork(temp);
                        tag.getArtwork().add(artworks);
                        tagRepository.save(tag);
                    }


                }
            }
            return artworksRepository.save(artworks);

        }

    }

    @DeleteMapping("/{id}")
    public void deleteGalleries(@PathVariable("id") Integer id) {
        Optional<Galleries> result = galleriesRepository.findById(id);
        if (result.isPresent()) {
            if (result.get().getArtworksList().isEmpty() && result.get().getExhibitionsList().isEmpty()) {
                galleriesRepository.deleteById(id);
            } else if (!result.get().getArtworksList().isEmpty() && result.get().getExhibitionsList().isEmpty()) {
                List<Artworks> artworksList = result.get().getArtworksList();
                for (Artworks artwork : artworksList) {
                    artwork.setGallery(null);
                }
                galleriesRepository.deleteById(id);
            } else if (result.get().getArtworksList().isEmpty() && !result.get().getExhibitionsList().isEmpty()) {
                List<Exhibitions> exhibitionsList = result.get().getExhibitionsList();
                for (Exhibitions exhibitions : exhibitionsList) {
                    exhibitions.setGallery(null);
                    exhibitionsRepository.deleteById(exhibitions.getId());
                }
                galleriesRepository.deleteById(id);
            } else if (!result.get().getArtworksList().isEmpty() && !result.get().getExhibitionsList().isEmpty()) {
                List<Exhibitions> exhibitionsList = result.get().getExhibitionsList();
                for (Exhibitions exhibitions : exhibitionsList) {
                    exhibitions.setGallery(null);
                    exhibitionsRepository.deleteById(exhibitions.getId());
                }
                List<Artworks> artworksList = result.get().getArtworksList();
                for (Artworks artwork : artworksList) {
                    artwork.setGallery(null);
                }
                galleriesRepository.deleteById(id);
            }

        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("/{id}/exhibition")
    public List<Exhibitions> getExhibitionByGalleryId(@PathVariable Integer id) {
        Optional<Galleries> galleries = galleriesRepository.findById(id);
        if (galleries.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            return galleries.get().getExhibitionsList();
        }
    }

    @PostMapping("/{id}/exhibition")
    public Exhibitions createExibitionByGalleryId(@Valid @RequestBody Exhibitions exhibitions, @PathVariable("id") Integer id) {
        Optional<Galleries> galleries = galleriesRepository.findById(id);
        if (galleries.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            if (exhibitions.getId() == 0) {
                exhibitions.setGallery(galleries.get());


                return exhibitionsRepository.save(exhibitions);
            } else {
                throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
            }
        }

    }
    @PutMapping("/{id}/exhibition/{exhibitionId}")
    public Exhibitions updateExibitionByGalleryIdByExhibitionId(@Valid @RequestBody Exhibitions exhibitions, @PathVariable("id") Integer id, @PathVariable("exhibitionId") Integer exhibitionId) {
        Optional<Galleries> galleries = galleriesRepository.findById(id);
        Optional<Exhibitions> exhibitionsResult = exhibitionsRepository.findById(exhibitionId);
        if (galleries.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            if (exhibitionsResult.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);

            } else {
                exhibitions.setGallery(galleries.get());
                exhibitions.setId(exhibitionId);
                return exhibitionsRepository.save(exhibitions);
            }
        }

    }
}
