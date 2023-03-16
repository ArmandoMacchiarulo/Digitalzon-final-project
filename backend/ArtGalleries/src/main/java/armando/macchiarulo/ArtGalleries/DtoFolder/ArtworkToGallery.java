package armando.macchiarulo.ArtGalleries.DtoFolder;

import armando.macchiarulo.ArtGalleries.Entity.Artworks;
import armando.macchiarulo.ArtGalleries.Entity.Galleries;

public class ArtworkToGallery {
    private Artworks artwork;
    private Galleries gallery;

    public Artworks getArtwork() {
        return artwork;
    }

    public void setArtwork(Artworks artwork) {
        this.artwork = artwork;
    }

    public Galleries getGallery() {
        return gallery;
    }

    public void setGallery(Galleries gallery) {
        this.gallery = gallery;
    }
}
