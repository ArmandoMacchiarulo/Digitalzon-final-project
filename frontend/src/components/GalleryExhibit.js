import { Carousel, Card, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const GalleryExhibit = ({ exhibition }) => {
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

  return (
    <Card className="mx-5 card-exhibition text-center my-2 ">
      <Carousel fade indicators={false} controls={false} interval={2000}>
        <Carousel.Item>
          <img
            className="card-img d-block w-100"
            src={exhibition.firstImgUrl}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card-img d-block w-100"
            src={exhibition.secondImgUrl}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card-img d-block w-100"
            src={exhibition.thirdImgUrl}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>

      <Card.Body>
        <Row>
          <div className="col-lg-12">
            <Card.Title>{exhibition.name}</Card.Title>
            <Card.Subtitle className="mb-2 ">
              Start: {exhibition.start}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 ">
              End: {exhibition.end}
            </Card.Subtitle>
          </div>
        </Row>

        <Link
          className="text-white text-decoration-none"
          to={url + "/exhibit/" + exhibition.id}
        >
          <Button variant="dark">Exibith info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default GalleryExhibit;
