package armando.macchiarulo.ArtGalleries.Repository;

import armando.macchiarulo.ArtGalleries.Entity.Artworks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ArtworksRepository extends JpaRepository<Artworks, Integer> {
    
}
