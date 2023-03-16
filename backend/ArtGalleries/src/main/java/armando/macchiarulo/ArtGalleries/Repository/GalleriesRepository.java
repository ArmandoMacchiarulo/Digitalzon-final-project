package armando.macchiarulo.ArtGalleries.Repository;

import armando.macchiarulo.ArtGalleries.Entity.Galleries;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GalleriesRepository extends JpaRepository<Galleries, Integer> {



}
