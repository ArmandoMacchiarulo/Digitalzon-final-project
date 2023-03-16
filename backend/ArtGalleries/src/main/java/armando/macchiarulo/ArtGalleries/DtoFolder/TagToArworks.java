package armando.macchiarulo.ArtGalleries.DtoFolder;

import armando.macchiarulo.ArtGalleries.Entity.Artworks;
import armando.macchiarulo.ArtGalleries.Entity.Galleries;
import armando.macchiarulo.ArtGalleries.Entity.Tag;
import armando.macchiarulo.ArtGalleries.Repository.ArtworksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

public class TagToArworks {

    private Tag tag;
    private List<ArtworkToGallery> artworkPlusGallery;

    public Tag getTag() {
        return tag;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
    }

    public List<ArtworkToGallery> getArtworkPlusGallery() {
        return artworkPlusGallery;
    }

    public void setArtworkPlusGallery(List<ArtworkToGallery> artworkPlusGallery) {
        this.artworkPlusGallery = artworkPlusGallery;
    }
}
