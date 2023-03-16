import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  OverlayTrigger,
  Popover,
  Image,
} from "react-bootstrap";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import {
  putExhibition,
  postExhibitionkByGalleryId,
  deleteExhibitionById,
} from "../api";
import { validationExhibitForm } from "../utils/validation";
const TableExhibitions = ({ exhibitions }) => {
  const navigate = useNavigate();
  const { galleryId } = useParams();
  const [show, setShow] = useState(false);
  const [inputExhibitionsErrors, setInputExhibitionsErrors] = useState({});
  const [exhibition, setExhibition] = useState({
    name: "",
    start: "",
    end: "",
    firstImgUrl: "",
    secondImgUrl: "",
    thirdImgUrl: "",
  });

  const handleShowModal = () => {
    setShow(true);
    const tempExhibit = validationExhibitForm(exhibition);
    setInputExhibitionsErrors(tempExhibit);
  };
  const handleCloseModal = () => {
    setShow(false);
    setExhibition({
      name: "",
      start: "",
      end: "",
      firstImgUrl: "",
      secondImgUrl: "",
      thirdImgUrl: "",
    });
  };
  const handleInputChange = (input, value) => {
    setExhibition({ ...exhibition, [input]: value });
  };
  const handleFormSubmit = async (e) => {
    let result = { ok: false, data: [] };
    e.preventDefault();
    console.log(exhibition);
    if (exhibition.id !== undefined) {
      result = await putExhibition(exhibition, exhibition.id);
      if (result.ok) {
        handleCloseModal();
        navigate(0);
      } else {
        console.log(result.data);
      }
    } else {
      result = await postExhibitionkByGalleryId(exhibition, galleryId);

      if (result.ok) {
        handleCloseModal();
        navigate(0);
      } else {
        console.log(result.data);
      }
    }
  };
  const handleDelete = async (exhibition) => {
    const result = await deleteExhibitionById(exhibition.id);
    if (result.ok) {
      navigate(0);
    } else {
      console.log(result);
    }
  };
  useEffect(() => {
    const tempExhibit = validationExhibitForm(exhibition);
    setInputExhibitionsErrors(tempExhibit);
  }, [exhibition]);

  return (
    <>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>edit Exhibitions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={exhibition.name}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputExhibitionsErrors.name ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputExhibitionsErrors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="start">
              <Form.Label>Start</Form.Label>
              <Form.Control
                type="date"
                value={exhibition.start}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputExhibitionsErrors.start ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputExhibitionsErrors.start}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="end">
              <Form.Label>end</Form.Label>
              <Form.Control
                type="date"
                value={exhibition.end}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputExhibitionsErrors.end ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputExhibitionsErrors.end}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="firstImgUrl">
              <Form.Label>1stImageUrl</Form.Label>
              <Form.Control
                type="text"
                value={exhibition.firstImgUrl}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputExhibitionsErrors.firstImgUrl ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputExhibitionsErrors.firstImgUrl}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="secondImgUrl">
              <Form.Label>2ndImageUrl</Form.Label>
              <Form.Control
                type="text"
                value={exhibition.secondImgUrl}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputExhibitionsErrors.secondImgUrl ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputExhibitionsErrors.secondImgUrl}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="thirdImgUrl">
              <Form.Label>3rdImageUrl</Form.Label>
              <Form.Control
                type="text"
                value={exhibition.thirdImgUrl}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputExhibitionsErrors.thirdImgUrl ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputExhibitionsErrors.thirdImgUrl}
              </Form.Control.Feedback>
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
          setExhibition({
            name: "",
            start: "",
            end: "",
            firstImgUrl: "",
            secondImgUrl: "",
            thirdImgUrl: "",
          });
          handleShowModal();
        }}
        disabled={!galleryId}
      >
        Add New Exhibition
      </Button>
      <Table size="sm" hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
            <th>1stImageUrl</th>
            <th>2ndImageUrl</th>
            <th>3rdImageUrl</th>
            <th>Modify</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {exhibitions.map((exhibit, index) => {
            const popoverExhibitImgF = (
              <Popover id={"popover-" + index}>
                <Popover.Header>
                  {exhibit.exhibitions.firstImgUrl}
                </Popover.Header>
                <Popover.Body>
                  <Image
                    className=" d-block w-100"
                    src={exhibit.exhibitions.firstImgUrl}
                  ></Image>
                </Popover.Body>
              </Popover>
            );
            const popoverExhibitImgS = (
              <Popover id={"popover-" + index}>
                <Popover.Header>
                  {exhibit.exhibitions.secondImgUrl}
                </Popover.Header>
                <Popover.Body>
                  <Image
                    className=" d-block w-100"
                    src={exhibit.exhibitions.secondImgUrl}
                  ></Image>
                </Popover.Body>
              </Popover>
            );
            const popoverExhibitImgT = (
              <Popover id={"popover-" + index}>
                <Popover.Header>
                  {exhibit.exhibitions.thirdImgUrl}
                </Popover.Header>
                <Popover.Body>
                  <Image
                    className=" d-block w-100"
                    src={exhibit.exhibitions.thirdImgUrl}
                  ></Image>
                </Popover.Body>
              </Popover>
            );
            return (
              <tr key={index}>
                <td>{exhibit.exhibitions.id}</td>
                <td>{exhibit.exhibitions.name}</td>
                <td>{exhibit.exhibitions.start}</td>
                <td>{exhibit.exhibitions.end}</td>
                <td>
                  <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom-start"
                    overlay={popoverExhibitImgF}
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
                    overlay={popoverExhibitImgS}
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
                    overlay={popoverExhibitImgT}
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
                      setExhibition(exhibit.exhibitions);
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
                      handleDelete(exhibit.exhibitions);
                    }}
                    disabled={galleryId}
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
export default TableExhibitions;
