package armando.macchiarulo.ArtGalleries.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank
    private String name;
    @NotBlank
    private String color;
    @ManyToMany
    @JsonIgnore
    @JoinTable(name = "tag_artwork", joinColumns =
            {@JoinColumn(name = "tag_id")}, inverseJoinColumns =
            {@JoinColumn(name = "artwork_id")})// il primo dove ci troviamo il secondo dove andiamo
    private List<Artworks> artwork;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public List<Artworks> getArtwork() {
        return artwork;
    }

    public void setArtwork(List<Artworks> artwork) {
        this.artwork = artwork;
    }
}
