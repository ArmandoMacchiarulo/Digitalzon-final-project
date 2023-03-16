import { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import {
  BsPencilSquare,
  BsFillTrash3Fill,
  BsFillPaletteFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { putTag, postTag, deleteTagById } from "../api";
import { validationTagForm } from "../utils/validation";
const TableTags = ({ tags }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [inputTagErrors, setInputTagErrors] = useState({});
  const [tag, setTag] = useState({
    name: "",
    color: "",
  });
  const handleShowModal = () => {
    setShow(true);
    const tempTag = validationTagForm(tag);
    setInputTagErrors(tempTag);
  };
  const handleCloseModal = () => {
    setShow(false);
    setTag({ name: "", color: "" });
  };
  const handleInputChange = (input, value) => {
    setTag({ ...tag, [input]: value });
  };
  const handleFormSubmit = async (e) => {
    let result = { ok: false, data: [] };
    e.preventDefault();
    if (tag.id !== "") {
      result = await putTag(tag, tag.id);
      if (result.ok) {
        handleCloseModal();
        navigate(0);
      } else {
        console.log(result.data);
      }
    } else {
      console.log(tag.id);
      result = await postTag(tag);

      if (result.ok) {
        handleCloseModal();
        navigate(0);
      } else {
        console.log(result.data);
      }
    }
  };
  const handleDelete = async (tag) => {
    const result = await deleteTagById(tag.id);
    if (result.ok) {
      navigate(0);
    } else {
      console.log(result);
    }
  };
  useEffect(() => {
    const tempTag = validationTagForm(tag);
    setInputTagErrors(tempTag);
  }, [tag]);
  return (
    <>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>edit Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={tag.name}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputTagErrors.name ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputTagErrors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="color"
                value={tag.color}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputTagErrors.color ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputTagErrors.color}
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
          setTag({
            id: "",
            name: "",
            color: "",
          });
          handleShowModal();
        }}
      >
        Add New Tag
      </Button>
      <Table size="sm" hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
            <th>Modify</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag, index) => {
            return (
              <tr key={index}>
                <td>{tag.id}</td>
                <td>{tag.name}</td>
                <td>
                  {tag.color}
                  <span className="p-1" style={{ backgroundColor: tag.color }}>
                    <BsFillPaletteFill />
                  </span>
                </td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => {
                      setTag(tag);
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
                      handleDelete(tag);
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
export default TableTags;
