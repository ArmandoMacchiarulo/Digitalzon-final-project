import GalleryList from "../components/GalleryList";
import ArtworksList from "../components/ArtworksList";
import ExhibitionList from "../components/ExhibitionList";
import { useParams } from "react-router-dom";
const HomeGalleriesAndArtworks = ({ galleries, artworks, exhibitions }) => {
  let toDisplay = (
    <>
      <ExhibitionList exhibitions={exhibitions} />
      <GalleryList galleries={galleries} />
      <ArtworksList artworks={artworks} />
    </>
  );

  const { search } = useParams();
  const tempGallery = [];
  const tempArtwork = [];
  const tempExhibition = [];
  const handleSearch = () => {
    const searchName = search.toLowerCase();

    galleries.forEach((gallery) => {
      const name = gallery.name.toLowerCase();

      if (name.includes(searchName)) {
        tempGallery.push(gallery);
      }
    });
    artworks.forEach((artwork) => {
      const title = artwork.artwork.title.toLowerCase();
      const artist = artwork.artwork.artist.toLowerCase();
      const year = new Date(artwork.artwork.year).getFullYear();
      const material = artwork.artwork.material.toLowerCase();
      let tagsControl = false;
      artwork.artwork.tagList.forEach((tag) => {
        if (tag.name.toLowerCase().includes(searchName)) {
          tagsControl = true;
        }
      });

      if (
        year.toString().includes(searchName) ||
        title.includes(searchName) ||
        artist.includes(searchName) ||
        material.includes(searchName) ||
        tagsControl
      ) {
        tempArtwork.push(artwork);
      }
    });
    exhibitions.forEach((exhibition) => {
      const name = exhibition.exhibitions.name.toLowerCase();
      if (name.includes(searchName)) {
        tempExhibition.push(exhibition);
      }
    });
  };
  if (search) {
    handleSearch();

    if (
      tempGallery.length !== 0 ||
      tempArtwork.length !== 0 ||
      tempExhibition.length !== 0
    ) {
      toDisplay = (
        <>
          {tempExhibition.length !== 0 && (
            <ExhibitionList exhibitions={tempExhibition} />
          )}
          {tempGallery.length !== 0 && <GalleryList galleries={tempGallery} />}
          {tempArtwork.length !== 0 && <ArtworksList artworks={tempArtwork} />}
        </>
      );
    } else {
      toDisplay = <h1 className="text-center">No item found!</h1>;
    }
  }

  return toDisplay;
};
export default HomeGalleriesAndArtworks;
