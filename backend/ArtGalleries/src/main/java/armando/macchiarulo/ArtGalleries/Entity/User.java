package armando.macchiarulo.ArtGalleries.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.time.LocalDate;
@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"username", "password"})
})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank

    private String name;
    @NotBlank
    private String surname;
    @NotNull
    @Past
    private LocalDate dob;
    @NotBlank
    @Email(message = "Email should be valid")
    @Column(name = "email", unique = true)
    private String email;
    @NotBlank
    @Size(min = 3, max = 50, message
            = "About Me must be between 3 and 50 characters")
    private String username;
    @NotBlank
    @Size(min = 7, max = 15, message
            = "About Me must be between 7 and 15 characters")
    private String password;
    private String address;
    private String telephone;
    private String gender;

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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
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

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
