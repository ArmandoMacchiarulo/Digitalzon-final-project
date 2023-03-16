package armando.macchiarulo.ArtGalleries.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

@Entity
public class Exhibitions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank
    private String name;
    @NotNull
    private LocalDate start;
    @NotNull
    private LocalDate end;
    @ManyToOne
    @JoinColumn(name = "galleries_id")
    @JsonIgnore
    private Galleries gallery;
    private String firstImgUrl;
    private String secondImgUrl;
    private String thirdImgUrl;


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

    public LocalDate getStart() {
        return start;
    }

    public void setStart(LocalDate start) {
        this.start = start;
    }

    public LocalDate getEnd() {
        return end;
    }

    public void setEnd(LocalDate end) {
        this.end = end;
    }

    public Galleries getGallery() {
        return gallery;
    }

    public void setGallery(Galleries gallery) {
        this.gallery = gallery;
    }

    public String getFirstImgUrl() {
        return firstImgUrl;
    }

    public void setFirstImgUrl(String firstImgUrl) {
        this.firstImgUrl = firstImgUrl;
    }

    public String getSecondImgUrl() {
        return secondImgUrl;
    }

    public void setSecondImgUrl(String secondImgUrl) {
        this.secondImgUrl = secondImgUrl;
    }

    public String getThirdImgUrl() {
        return thirdImgUrl;
    }

    public void setThirdImgUrl(String thirdImgUrl) {
        this.thirdImgUrl = thirdImgUrl;
    }
}
