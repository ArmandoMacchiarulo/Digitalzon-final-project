package armando.macchiarulo.ArtGalleries.DtoFolder;

import armando.macchiarulo.ArtGalleries.Entity.Exhibitions;
import armando.macchiarulo.ArtGalleries.Entity.Galleries;

public class ExhibitionToGallery {
    private Exhibitions exhibitions;
    private Galleries galleries;

    public Exhibitions getExhibitions() {
        return exhibitions;
    }

    public void setExhibitions(Exhibitions exhibitions) {
        this.exhibitions = exhibitions;
    }

    public Galleries getGalleries() {
        return galleries;
    }

    public void setGalleries(Galleries galleries) {
        this.galleries = galleries;
    }
}
