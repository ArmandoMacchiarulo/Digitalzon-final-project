import { useState, useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getArtworksByIdWithGallery } from "../api";
import Magnifier from "react-magnifier";

const ArtworkPage = () => {
  const { artworkId } = useParams();
  const [artwork, setArtwork] = useState([]);
  const [gallery, setGallery] = useState([]);
  const { userId, galleryId, adminId } = useParams();
  let url = "";

  if (adminId) {
    url = `/${adminId}/admin`;
  }
  if (userId) {
    url = `/${userId}/user`;
  }
  if (galleryId) {
    url = `/${galleryId}/gallery`;
  }
  const callArtwork = async () => {
    const result = await getArtworksByIdWithGallery(artworkId);
    if (result.ok) {
      setArtwork(result.data.artwork);
      setGallery(result.data.gallery);
    } else {
      console.log(result);
      console.log(result.ok);
    }
  };
  const date = new Date(Date.parse(artwork.year));
  useEffect(() => {
    callArtwork();
  }, []);
  const sold = () => {
    if (artwork.price > 0) {
      return (
        <>
          <p>Prezzo: &euro;{artwork.price}</p>
          <p>Gallery: Non presente</p>
        </>
      );
    } else {
      return (
        <Link
          className="text-dark text-decoration-none"
          to={url + "/gallery/" + gallery.id}
        >
          <p>Gallery: {gallery.name}</p>
          <Button className="ms-2" variant="dark">
            dettagli galleria
          </Button>
        </Link>
      );
    }
  };

  return (
    <>
      <h1 className="text-center my-3">{artwork.title}</h1>
      <Row className="m-5">
        <div className="col-lg-3  bg-white bg-opacity-75">
          <h3 className="text-center mb-5">{artwork.title}</h3>
          <p>Artista: {artwork.artist}</p>
          <p>Anno: {date.getFullYear()}</p>
          <p>Misure: {artwork.size}</p>
          <p>Tecnica: {artwork.material}</p>
          {sold()}
        </div>

        <Magnifier
          className="col-8"
          width="75% "
          mgHeight={300}
          mgWidth={300}
          zoomFactor={0.7}
          src={artwork.imgUrl}
          alt="First slide"
        />
      </Row>
    </>
  );
};

export default ArtworkPage;
