package armando.macchiarulo.ArtGalleries.Repository;


import armando.macchiarulo.ArtGalleries.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User, Integer> {
}
