import { Carousel, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Gallery from "./Gallery";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
const GalleryList = ({ galleries }) => {
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
    <>
      <h1 className="text-center d-lg-none">Gallery</h1>
      <Row className="my-5 mx-lg-5 justify-content-end flex-row flex-nowrap align-items-stretch gallery-back">
        <div className="col-7 position-relative w-lg-75 w-sm-100 relative-dimension">
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "145px",
              width: "120px",
              height: "80px",
              opacity: "0.5",
              background: "rgba(170, 172, 152, 1)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "100px",
              left: "480px",
              width: "80px",
              height: "140px",
              opacity: "0.5",
              background: "rgba(123, 148, 154, 1)",
            }}
            className="display-1"
          ></div>
          <div
            style={{
              position: "absolute",
              top: "240px",
              left: "230px",
              width: "150px",
              height: "50px",
              opacity: "0.5",
              background: "rgba(36, 36, 36, 1)",
            }}
            className="display-1 fw-bold"
          ></div>
          <div
            style={{
              position: "absolute",
              top: "320px",
              left: "500px",
              width: "70px",
              height: "160px",
              opacity: "0.5",
              background: "rgba(8, 4, 4, 1)",
            }}
            className="display-1 fw-bold"
          ></div>
          <div
            style={{
              position: "absolute",
              top: "360px",
              left: "100px",
              width: "180px",
              height: "35px",
              opacity: "0.5",
              background: "rgba(170, 172, 152, 1)",
            }}
            className="display-1 "
          ></div>
          <div
            style={{
              position: "absolute",
              top: "440px",
              left: "340px",
              width: "40px",
              height: "230px",
              opacity: "0.5",
              background: "rgba(123, 148, 154, 1)",
            }}
            className="display-1 fw-bold"
          ></div>
          <div
            style={{
              position: "absolute",
              top: "545px",
              left: "515px",
              width: "180px",
              height: "50px",
              opacity: "0.5",
              background: "rgba(136, 118, 7, 1)",
            }}
            className="display-1 fw-bold"
          ></div>
          <h1
            className="display-1 fw-bold "
            style={{ position: "absolute", top: "50px", left: "130px" }}
          >
            G
          </h1>
          <h1
            style={{ position: "absolute", top: "120px", left: "530px" }}
            className="display-1"
          >
            A
          </h1>
          <h1
            style={{ position: "absolute", top: "200px", left: "330px" }}
            className="display-1 fw-bold"
          >
            <small>L</small>
          </h1>
          <h1
            style={{ position: "absolute", top: "280px", left: "480px" }}
            className="display-1 fw-bold"
          >
            L
          </h1>
          <h1
            style={{ position: "absolute", top: "340px", left: "100px" }}
            className="display-1 "
          >
            E
          </h1>
          <h1
            style={{ position: "absolute", top: "440px", left: "300px" }}
            className="display-1 fw-bold"
          >
            R
          </h1>
          <h1
            style={{ position: "absolute", top: "530px", left: "520px" }}
            className="display-1 fw-bold"
          >
            Y
          </h1>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <Carousel
            fade
            interval={6000}
            nextIcon={
              <span className="text-dark fs-3 ">
                <FaChevronCircleRight />
              </span>
            }
            prevIcon={
              <span className="text-dark fs-3 ">
                <FaChevronCircleLeft />
              </span>
            }
            indicators={false}
          >
            {galleries.map((item) => {
              return (
                <Carousel.Item key={item.id}>
                  <Gallery gallery={item} url={url} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </Row>
    </>
  );
};
export default GalleryList;
// ("my-5 mx-lg-5 overflow-auto flex-row flex-nowrap align-items-stretch");
