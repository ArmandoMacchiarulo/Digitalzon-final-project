import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
const Artwork = ({ artwork, gallery, url }) => {
  const date = new Date(Date.parse(artwork.year));
  const galleryName = () => {
    if (gallery !== null) {
      return (
        <Link
          className="text-dark text-decoration-none"
          to={url + "/gallery/" + gallery.id}
        >
          {gallery.name}
        </Link>
      );
    } else {
      return <>sold: &euro; {artwork.price}</>;
    }
  };

  return (
    <Card className="mx-5 card-dimension text-center my-2">
      <Card.Img
        className="card-img d-block w-100"
        variant="top"
        src={artwork.imgUrl}
      />
      <Card.Body>
        <Card.Title>{artwork.title}</Card.Title>
        <Card.Subtitle className="mb-2">{artwork.artist}</Card.Subtitle>
        <Card.Subtitle className="mb-2 ">{date.getFullYear()}</Card.Subtitle>
        <Card.Subtitle className="mb-2 ">
          {artwork.material} / {artwork.size}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2">{galleryName()}</Card.Subtitle>
        {artwork.tagList.map((tag) => {
          return (
            <Link
              className="text-white text-decoration-none"
              to={url + "/search/" + tag.name.toLowerCase()}
              key={tag.id}
            >
              <Badge pill bg="" style={{ backgroundColor: tag.color }}>
                {tag.name}
              </Badge>
            </Link>
          );
        })}
        <br />

        <Link
          className="text-white text-decoration-none"
          to={url + "/artwork/" + artwork.id}
        >
          <Button variant="dark">vedi dettagli</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default Artwork;
