import { Card, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Gallery = ({ gallery, url }) => {
  return (
    <Card className="mx-5 card-dimension text-center my-2 ">
      <Carousel fade indicators={false} controls={false} interval={2000}>
        <Carousel.Item>
          <img
            className="card-img d-block w-100"
            src={gallery.firstImgUrl}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card-img d-block w-100"
            src={gallery.secondImgUrl}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card-img d-block w-100"
            src={gallery.thirdImgUrl}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>

      <Card.Body>
        <Card.Title>{gallery.name}</Card.Title>
        <Card.Subtitle className="mb-2 ">{gallery.address}</Card.Subtitle>
        <Card.Subtitle className="mb-2 ">{gallery.email}</Card.Subtitle>
        <Card.Subtitle className="mb-2 ">{gallery.telephone}</Card.Subtitle>

        <Link
          className="text-white text-decoration-none"
          to={url + "/gallery/" + gallery.id}
        >
          <Button variant="dark">Visita la galleria</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default Gallery;
