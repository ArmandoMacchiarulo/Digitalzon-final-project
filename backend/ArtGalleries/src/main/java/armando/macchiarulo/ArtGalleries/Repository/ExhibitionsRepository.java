package armando.macchiarulo.ArtGalleries.Repository;

import armando.macchiarulo.ArtGalleries.Entity.Exhibitions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExhibitionsRepository extends JpaRepository<Exhibitions, Integer> {
}
