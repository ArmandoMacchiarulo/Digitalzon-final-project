import { useState, useEffect } from "react";
import { Carousel, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getExhibitionByIdWithGallery } from "../api";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const ExhibitPage = () => {
  const { exhibitId } = useParams();
  const [exhibit, setExhibit] = useState([]);
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
  const callExhibit = async () => {
    const result = await getExhibitionByIdWithGallery(exhibitId);
    if (result.ok) {
      setExhibit(result.data.exhibitions);
      setGallery(result.data.galleries);
    } else {
      console.log(result);
      console.log(result.ok);
    }
  };
  useEffect(() => {
    callExhibit();
  }, []);

  return (
    <>
      <h1 className="text-center my-3">{exhibit.name}</h1>
      <Row className="m-5 flex-lg-row-reverse">
        <Carousel
          fade
          className="col-lg-8"
          nextIcon={
            <span className="text-warning fs-3 ">
              <FaChevronCircleRight />
            </span>
          }
          prevIcon={
            <span className="text-warning fs-3 ">
              <FaChevronCircleLeft />
            </span>
          }
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="card-img d-block w-100"
              src={exhibit.firstImgUrl}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="card-img d-block w-100"
              src={exhibit.secondImgUrl}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="card-img d-block w-100"
              src={exhibit.thirdImgUrl}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="col-lg-4  bg-white bg-opacity-75">
          <h3 className="text-center mb-5">{exhibit.name}</h3>
          <p>Start date: {exhibit.start}</p>
          <p>End date: {exhibit.end}</p>
          <h4>Gallery: {gallery.name}</h4>
          <p>Address: {gallery.address}</p>
          <p>N. Tel.: {gallery.telephone}</p>
          <p>Email: {gallery.email}</p>
          <p>Gallery: {gallery.name}</p>
          <Link
            className="text-dark text-decoration-none"
            to={url + "/gallery/" + gallery.id}
          >
            <Button className="ms-2" variant="dark">
              dettagli galleria
            </Button>
          </Link>
        </div>
      </Row>
    </>
  );
};
export default ExhibitPage;
