import { useState, useEffect } from "react";
import {
  Table,
  Button,
  OverlayTrigger,
  Popover,
  Image,
  Modal,
  Form,
  Badge,
} from "react-bootstrap";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import {
  putArtworks,
  postArtwork,
  postArtworkByGalleryId,
  deleteArtworkById,
} from "../api";
import { validationArtworkForm } from "../utils/validation";
const TableArtwork = ({ artworks, tags }) => {
  const { galleryId } = useParams();
  const [inputArtworkErrors, setInputArtworkErrors] = useState({});
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [galleryControl, setGalleryControl] = useState(true);
  const [artwork, setArtwork] = useState({
    artist: "",
    title: "",
    year: "",
    size: "",
    material: "",
    description: "",
    imgUrl: "",
    price: "",
    galleryId: "",
    tagList: [],
  });
  const handleShowModal = () => {
    setShow(true);
    const tempArtwork = validationArtworkForm(artwork);
    setInputArtworkErrors(tempArtwork);
  };
  const handleCloseModal = () => {
    setShow(false);
    setArtwork({
      artist: "",
      title: "",
      year: "",
      size: "",
      material: "",
      description: "",
      imgUrl: "",
      price: "",
      galleryId: "",
      tagList: [],
    });
    setGalleryControl(true);
  };
  const handleInputChange = (input, value) => {
    setArtwork({ ...artwork, [input]: value });
  };
  const handleFormSubmit = async (e) => {
    let result = { ok: false, data: [] };
    e.preventDefault();
    let priceControl = true;
    if (artwork.price > 0 && galleryId) {
      priceControl = window.confirm(
        "settando il prezzo diverso da zero l'oggetto sarà considerato venduto e non sarà più collegato alla galleria, pertanto non potrà più essere modificato. Sei sicuro?"
      );
    }
    if (priceControl) {
      if (artwork.id !== undefined) {
        result = await putArtworks(artwork, artwork.id);
        if (result.ok) {
          handleCloseModal();
          navigate(0);
        } else {
          console.log(result.data);
        }
      } else {
        if (galleryId) {
          result = await postArtworkByGalleryId(artwork, galleryId);
          if (result.ok) {
            handleCloseModal();
            navigate(0);
          } else {
            console.log(result.data);
          }
        } else {
          result = await postArtwork(artwork);
          if (result.ok) {
            handleCloseModal();
            navigate(0);
          } else {
            console.log(result.data);
          }
        }
      }
    }
  };
  const handleDelete = async (artwork) => {
    const result = await deleteArtworkById(artwork.id);
    if (result.ok) {
      navigate(0);
    } else {
      console.log(result);
    }
  };
  useEffect(() => {
    const tempArtwork = validationArtworkForm(artwork);
    setInputArtworkErrors(tempArtwork);
  }, [artwork]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseModal}
        galleryControl={galleryControl}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Artwork</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="artist">
              <Form.Label>Artist</Form.Label>
              <Form.Control
                type="text"
                value={artwork.artist}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputArtworkErrors.artist ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputArtworkErrors.artist}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={artwork.title}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputArtworkErrors.title ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputArtworkErrors.title}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="date"
                value={artwork.year}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputArtworkErrors.year ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputArtworkErrors.year}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="size">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                value={artwork.size}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputArtworkErrors.size ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputArtworkErrors.size}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="material">
              <Form.Label>Material</Form.Label>
              <Form.Control
                type="text"
                value={artwork.material}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputArtworkErrors.material ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputArtworkErrors.material}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                value={artwork.description}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="imgUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={artwork.imgUrl}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputArtworkErrors.imgUrl ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputArtworkErrors.imgUrl}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={artwork.price}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                disabled={galleryControl}
              />
            </Form.Group>
            <Form.Group controlId="tagList">
              <Form.Label>TagList</Form.Label>
              {tags.map((tag) => {
                return (
                  <div key={`default-${tag.id}`}>
                    <Form.Check
                      type={"checkbox"}
                      id={tag.id}
                      label={tag.name}
                      checked={artwork.tagList.some((t) => t.id === tag.id)}
                      onChange={(e) => {
                        const temp = [...artwork.tagList];
                        if (e.target.checked) {
                          temp.push(tag);
                        } else {
                          temp.splice(
                            temp.findIndex((t) => t.id === tag.id),
                            1
                          );
                        }

                        handleInputChange("tagList", temp);
                      }}
                    />
                  </div>
                );
              })}
            </Form.Group>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Button
        variant="success"
        onClick={() => {
          handleShowModal();
          setGalleryControl(false);
        }}
      >
        Add New Artwork
      </Button>
      <Table size="sm" hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Artist</th>
            <th>Title</th>
            <th>Year</th>
            <th>Size</th>
            <th>Material</th>
            <th>Description</th>
            <th>Img url</th>
            <th>GalleryId</th>
            <th>Sold/Price</th>
            <th>Modify</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {artworks.map((artwork, index) => {
            let galleryControl = "no owner";

            if (artwork.gallery !== null) {
              galleryControl = artwork.gallery.id;
            }
            const popoverArtworkImg = (
              <Popover id={"popover-" + index}>
                <Popover.Header>{artwork.artwork.imgUrl}</Popover.Header>
                <Popover.Body>
                  <Image
                    className=" d-block w-100"
                    src={artwork.artwork.imgUrl}
                  ></Image>
                </Popover.Body>
              </Popover>
            );

            return (
              <tr key={index}>
                <td>{artwork.artwork.id}</td>
                <td>{artwork.artwork.artist}</td>
                <td>{artwork.artwork.title}</td>
                <td>{artwork.artwork.year}</td>
                <td>{artwork.artwork.size}</td>
                <td>{artwork.artwork.material}</td>
                <td>{artwork.artwork.description}</td>
                <td>
                  <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="right"
                    overlay={popoverArtworkImg}
                  >
                    <Button variant="secondary" size="sm">
                      Artwork Image
                    </Button>
                  </OverlayTrigger>
                </td>
                <td>{galleryControl}</td>
                <td>{artwork.artwork.price}</td>
                <td>
                  {artwork.artwork.tagList.map((tag) => {
                    return (
                      <Badge key={tag.id} bg="secondary">
                        {tag.name}
                      </Badge>
                    );
                  })}
                </td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => {
                      setArtwork(artwork.artwork);
                      if (artwork.gallery === null || galleryId) {
                        setGalleryControl(false);
                      }

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
                      handleDelete(artwork.artwork);
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
export default TableArtwork;
