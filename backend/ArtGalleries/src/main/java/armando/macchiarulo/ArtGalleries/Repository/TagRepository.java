package armando.macchiarulo.ArtGalleries.Repository;


import armando.macchiarulo.ArtGalleries.Entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository  extends JpaRepository<Tag, Integer> {
}
