import { Card, Carousel, Button, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Exhibition = ({ exhibition }) => {
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
  let galleryInfo = (
    <div className="col-lg-4">
      <Card.Title>No Gallery</Card.Title>
    </div>
  );
  if (exhibition.galleries !== null) {
    galleryInfo = (
      <div className="col-lg-4">
        <Card.Title>{exhibition.galleries.name}</Card.Title>
        <Card.Subtitle className="mb-2 ">
          {exhibition.galleries.address}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 ">
          {exhibition.galleries.telephone}
        </Card.Subtitle>
      </div>
    );
  }
  return (
    <Card className="mx-5 card-exhibition text-center my-2 ">
      <Carousel fade indicators={false} controls={false} interval={2000}>
        <Carousel.Item>
          <img
            className="card-img d-block w-100"
            src={exhibition.exhibitions.firstImgUrl}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card-img d-block w-100"
            src={exhibition.exhibitions.secondImgUrl}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card-img d-block w-100"
            src={exhibition.exhibitions.thirdImgUrl}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>

      <Card.Body>
        <Row>
          <div className="col-lg-8">
            <Card.Title>{exhibition.exhibitions.name}</Card.Title>
            <Card.Subtitle className="mb-2 ">
              Start: {exhibition.exhibitions.start}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 ">
              End: {exhibition.exhibitions.end}
            </Card.Subtitle>
          </div>
          {galleryInfo}
        </Row>

        <Link
          className="text-white text-decoration-none"
          to={url + "/exhibit/" + exhibition.exhibitions.id}
        >
          <Button variant="dark">Exhibit info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default Exhibition;
