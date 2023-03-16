package armando.macchiarulo.ArtGalleries.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;


import java.time.LocalDate;
import java.time.Year;
import java.util.List;
import java.util.Objects;

@Entity
public class Artworks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank
    private String artist;
    @NotBlank
    private String title;
    @NotNull
    @PastOrPresent
    private LocalDate year;
    @NotBlank
    private String size;
    @NotBlank
    private String material;
    private String description;
    private int price;
    @NotBlank
    private String imgUrl;
    @ManyToOne
    @JoinColumn(name = "galleries_id")
    @JsonIgnore
    private Galleries gallery;

    @ManyToMany(mappedBy = "artwork")
    private List<Tag> tagList;



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getYear() {
        return year;
    }

    public void setYear(LocalDate year) {
        this.year = year;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Galleries getGallery() {
        return gallery;
    }

    public void setGallery(Galleries gallery) {
        this.gallery = gallery;
    }

    public List<Tag> getTagList() {
        return tagList;
    }

    public void setTagList(List<Tag> tagList) {
        this.tagList = tagList;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Artworks artworks = (Artworks) o;
        return id == artworks.id && Objects.equals(tagList, artworks.tagList);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, tagList);
    }
}
