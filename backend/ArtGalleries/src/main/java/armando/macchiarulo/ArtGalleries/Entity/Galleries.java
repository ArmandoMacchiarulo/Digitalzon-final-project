package armando.macchiarulo.ArtGalleries.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.List;
@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"username", "password"})
})
public class Galleries {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank
    private String name;
    @NotBlank
    @Email(message = "Email should be valid")
    @Column(name = "email", unique = true)
    private String email;
    @NotBlank
    @Size(min = 3, max = 75, message
            = "About Me must be between 3 and 75 characters")
    @Column(name = "username")
    private String username;
    @NotBlank
    @Size(min = 7, max = 15, message
            = "About Me must be between 7 and 15 characters")
    @Column(name ="password")
    private String password;
    @NotNull
    @Size(min = 11, max = 11, message
            = "About Me must be between 11 characters")
    private String pIva;
    @NotBlank
    private String address;
    @NotNull
    private String telephone;
    private String firstImgUrl;
    private String secondImgUrl;
    private String thirdImgUrl;
    @OneToMany(mappedBy = "gallery")
    private List<Artworks> artworksList;
    @OneToMany(mappedBy = "gallery")
    private List<Exhibitions> exhibitionsList;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getpIva() {
        return pIva;
    }

    public void setpIva(String pIva) {
        this.pIva = pIva;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
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

    public List<Artworks> getArtworksList() {
        return artworksList;
    }

    public void setArtworksList(List<Artworks> artworksList) {
        this.artworksList = artworksList;
    }

    public List<Exhibitions> getExhibitionsList() {
        return exhibitionsList;
    }

    public void setExhibitionsList(List<Exhibitions> exhibitionsList) {
        this.exhibitionsList = exhibitionsList;
    }
}
