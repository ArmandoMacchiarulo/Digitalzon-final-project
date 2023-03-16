import { useCallback, useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Button,
  Row,
  Popover,
  Image,
  OverlayTrigger,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getGalleryById } from "../api";
import GalleryForm from "../components/GalleryForm";
import TableArtwork from "../components/TableArtwork";
import TableExhibitions from "../components/TableExhibitions";
const GalleryProfile = ({ tags, artworks, exhibitions }) => {
  const { galleryId } = useParams();
  const [show, setShow] = useState("d-none");
  const [modify, setModify] = useState("Modify");

  const [gallery, setGallery] = useState({
    id: "",
    name: "",
    username: "",
    password: "",
    email: "",
    address: "",
    telephone: "",
    pIva: "",
    firstImgUrl: "",
    secondImgUrl: "",
    thirdImgUrl: "",
    artworksList: [],
  });

  const getGallery = useCallback(async () => {
    const result = await getGalleryById(galleryId);
    if (result.ok) {
      setGallery(result.data);
    } else {
      console.log(result);
      console.log(result.ok);
    }
  }, [galleryId]);

  const handleShowForm = () => {
    if (modify === "Modify" && show === "d-none") {
      setShow("d-block");
      setModify("Close");
    } else {
      setShow("d-none");
      setModify("Modify");
    }
  };

  useEffect(() => {
    getGallery();
  }, []);
  const selectedArtworks = artworks.filter(
    (item) => item.gallery && item.gallery.id === parseInt(galleryId)
  );
  const selectedExhibitions = exhibitions.filter(
    (item) => item.galleries && item.galleries.id === parseInt(galleryId)
  );

  const popoverGalleryImgF = (
    <Popover id={"popover-" + 1}>
      <Popover.Header>{gallery.firstImgUrl}</Popover.Header>
      <Popover.Body>
        <Image className=" d-block w-100" src={gallery.firstImgUrl}></Image>
      </Popover.Body>
    </Popover>
  );
  const popoverGalleryImgS = (
    <Popover id={"popover-" + 2}>
      <Popover.Header>{gallery.secondImgUrl}</Popover.Header>
      <Popover.Body>
        <Image className=" d-block w-100" src={gallery.secondImgUrl}></Image>
      </Popover.Body>
    </Popover>
  );
  const popoverGalleryImgT = (
    <Popover id={"popover-" + 3}>
      <Popover.Header>{gallery.thirdImgUrl}</Popover.Header>
      <Popover.Body>
        <Image className=" d-block w-100" src={gallery.thirdImgUrl}></Image>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <Navbar bg="dark" expand="lg" className="">
        <Container fluid>
          <Navbar.Brand
            href={"/" + galleryId + "/gallery"}
            className="text-white"
          >
            Home
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <div style={{ height: "800px" }}>
          <Row>
            <div className="col-6 bg-white opacity-75 h-100">
              <h1>Gallery Profile</h1>
              <p>Name: {gallery.name}</p>
              <p>Username: {gallery.username}</p>
              <p>Password: {gallery.password}</p>
              <p>Email: {gallery.email}</p>
              <p>Address: {gallery.address}</p>
              <p>Telephone: {gallery.telephone}</p>
              <p>P.Iva: {gallery.pIva}</p>
              <p>
                1st img url:
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="right"
                  overlay={popoverGalleryImgF}
                >
                  <Button variant="secondary" size="sm" className="ms-1">
                    Gallery Image 1
                  </Button>
                </OverlayTrigger>
              </p>

              <p>
                2nd img url:
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="right"
                  overlay={popoverGalleryImgS}
                >
                  <Button variant="secondary" size="sm" className="ms-1">
                    Gallery Image 2
                  </Button>
                </OverlayTrigger>
              </p>
              <p>
                3rd img url:
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="right"
                  overlay={popoverGalleryImgT}
                >
                  <Button variant="secondary" size="sm" className="ms-1">
                    Gallery Image 3
                  </Button>
                </OverlayTrigger>
              </p>
              <Button
                variant="warning"
                className="m-1"
                onClick={handleShowForm}
              >
                {modify}
              </Button>
              <Link to={"/" + galleryId + "/gallery"}>
                <Button
                  variant="dark"
                  className="bg-dark btn-outline-warning ms-5"
                >
                  Home
                </Button>
              </Link>
            </div>
            <div
              className={
                "border-bottom border-start border-end border-dark col-6 bg-white opacity-75  " +
                show
              }
            >
              <GalleryForm
                galleria={gallery}
                handleShowModal={handleShowForm}
              />
            </div>
          </Row>
        </div>
        <div className="bg-secondary">
          <TableArtwork artworks={selectedArtworks} tags={tags}></TableArtwork>
        </div>
        <div className="bg-secondary">
          <TableExhibitions
            exhibitions={selectedExhibitions}
          ></TableExhibitions>
        </div>
      </Container>
    </>
  );
};
export default GalleryProfile;
