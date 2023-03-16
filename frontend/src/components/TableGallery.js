import { useState } from "react";
import {
  Table,
  Button,
  OverlayTrigger,
  Popover,
  Image,
  Modal,
} from "react-bootstrap";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { putGallery, deleteGalleryById } from "../api";
import GalleryForm from "./GalleryForm";
const TableGallery = ({ galleries }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [gallery, setGallery] = useState({
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
  });
  const handleShowModal = () => {
    setShow(!show);
  };

  const handleDelete = async (gallery) => {
    const result = await deleteGalleryById(gallery.id);
    if (result.ok) {
      navigate(0);
    } else {
      console.log(result);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleShowModal} gallery={gallery}>
        <Modal.Header closeButton>
          <Modal.Title>edit Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GalleryForm galleria={gallery} handleShowModal={handleShowModal} />
        </Modal.Body>
      </Modal>
      <Table size="sm" hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>P.iva</th>
            <th>1st img url</th>
            <th>2nd img url</th>
            <th>3rd img url</th>
            <th>Modify</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {galleries.map((gallery, index) => {
            const popoverGalleryImgF = (
              <Popover id={"popover-" + index}>
                <Popover.Header>{gallery.firstImgUrl}</Popover.Header>
                <Popover.Body>
                  <Image
                    className=" d-block w-100"
                    src={gallery.firstImgUrl}
                  ></Image>
                </Popover.Body>
              </Popover>
            );
            const popoverGalleryImgS = (
              <Popover id={"popover-" + index}>
                <Popover.Header>{gallery.secondImgUrl}</Popover.Header>
                <Popover.Body>
                  <Image
                    className=" d-block w-100"
                    src={gallery.secondImgUrl}
                  ></Image>
                </Popover.Body>
              </Popover>
            );
            const popoverGalleryImgT = (
              <Popover id={"popover-" + index}>
                <Popover.Header>{gallery.thirdImgUrl}</Popover.Header>
                <Popover.Body>
                  <Image
                    className=" d-block w-100"
                    src={gallery.thirdImgUrl}
                  ></Image>
                </Popover.Body>
              </Popover>
            );

            return (
              <tr key={index}>
                <td>{gallery.id}</td>
                <td>{gallery.name}</td>
                <td>{gallery.username}</td>
                <td>{gallery.password}</td>
                <td>{gallery.email}</td>
                <td>{gallery.address}</td>
                <td>{gallery.telephone}</td>
                <td>{gallery.pIva}</td>
                <td>
                  <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom-start"
                    overlay={popoverGalleryImgF}
                  >
                    <Button variant="secondary" size="sm">
                      Gallery Image
                    </Button>
                  </OverlayTrigger>
                </td>
                <td>
                  <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom-start"
                    overlay={popoverGalleryImgS}
                  >
                    <Button variant="secondary" size="sm">
                      Gallery Image
                    </Button>
                  </OverlayTrigger>
                </td>
                <td>
                  <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom-start"
                    overlay={popoverGalleryImgT}
                  >
                    <Button variant="secondary" size="sm">
                      Gallery Image
                    </Button>
                  </OverlayTrigger>
                </td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => {
                      setGallery(gallery);

                      handleShowModal();
                    }}
                  >
                    <BsPencilSquare />
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleDelete(gallery);
                    }}
                  >
                    <BsFillTrash3Fill />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default TableGallery;
