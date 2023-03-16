import { useCallback, useEffect, useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  getGalleryById,
  getArtworkByGalleryById,
  getExhibitionByGalleryId,
} from "../api";
import Artwork from "../components/Artwork";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import GalleryExhibit from "../components/GalleryExhibit";

const GalleryPage = () => {
  const { idGallery } = useParams();
  const [gallery, setGallery] = useState([]);
  const [artwork, setArtwork] = useState([]);
  const [exhibition, setExhibition] = useState([]);
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

  const callGallery = useCallback(async () => {
    const result = await getGalleryById(idGallery);
    if (result.ok) {
      setGallery(result.data);
    } else {
      console.log(result);
      console.log(result.ok);
    }
  }, [galleryId]);
  const callArtwork = async () => {
    const result = await getArtworkByGalleryById(idGallery);
    if (result.ok) {
      setArtwork(result.data);
    } else {
      console.log(result);
      console.log(result.ok);
    }
  };
  const callExhibitions = async () => {
    const result = await getExhibitionByGalleryId(idGallery);
    if (result.ok) {
      setExhibition(result.data);
    } else {
      console.log(result);
      console.log(result.ok);
    }
  };
  useEffect(() => {
    callGallery();
    callArtwork();
    callExhibitions();
  }, []);

  return (
    <>
      <h1 className="text-center my-3">{gallery.name}</h1>
      <Row className="m-5 flex-lg-row-reverse">
        <Carousel fade className="col-lg-8">
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
        <div className="col-lg-4  bg-white bg-opacity-75">
          <h3 className="text-center mb-5">{gallery.name}</h3>

          <p>Indirizzo: {gallery.address}</p>
          <p>N. Tel.: {gallery.telephone}</p>
          <p>Email: {gallery.email}</p>
        </div>

        <Row className="my-5 mx-lg-5 justify-content-between ">
          <div className="col-lg-5">
            <div className=" col-4 d-flex justify-content-start">
              <Carousel
                fade
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
                {artwork.map((item, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <Artwork artwork={item} gallery={gallery} url={url} />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </div>
          <div className="col-lg-7">
            <div className=" col-lg-7 d-flex justify-content-start">
              <Carousel
                fade
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
                {exhibition.map((item, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <GalleryExhibit exhibition={item} />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </Row>
      </Row>
    </>
  );
};
export default GalleryPage;
