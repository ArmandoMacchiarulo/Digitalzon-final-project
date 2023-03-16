import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { postGallery, putGallery } from "../api";
import { validationGalleryForm } from "../utils/validation";
const GalleryForm = ({ galleria, handleShowModal }) => {
  const [inputGalleryErrors, setInputGalleryErrors] = useState({});
  const navigate = useNavigate();
  const galleryData = {
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
  };
  const [gallery, setGallery] = useState(galleryData);
  const handleSignInModal = () => {
    handleShowModal();

    const tempGallery = validationGalleryForm(gallery);
    setInputGalleryErrors(tempGallery);
  };
  const handleGalleryInputChange = (input, value) => {
    setGallery({ ...gallery, [input]: value });
  };
  const handleGalleryFormSubmit = async (e) => {
    let result = { ok: false, data: [] };
    e.preventDefault();
    if (gallery.id === undefined) {
      result = await postGallery(gallery);
      if (result.ok) {
        handleSignInModal();
        window.alert("Gallery registration successful");
        navigate(0);
      } else {
        console.log(result.data);
        window.alert("username and password is invalid or email alrady in use");
      }
    } else {
      result = await putGallery(gallery, gallery.id);
      if (result.ok) {
        handleSignInModal();
        window.alert("Gallery registration successful");
        navigate(0);
      } else {
        console.log(result.data);
        window.alert("username and password is invalid or email alrady in use");
      }
    }
  };
  useEffect(() => {
    const tempGallery = validationGalleryForm(gallery);
    setInputGalleryErrors(tempGallery);
  }, [gallery]);
  useEffect(() => {
    if (galleria) {
      setGallery(galleria);
    }
  }, [galleria]);
  return (
    <Form onSubmit={handleGalleryFormSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={gallery.name}
          onChange={(e) => {
            handleGalleryInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputGalleryErrors.name ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputGalleryErrors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={gallery.username}
          onChange={(e) => {
            handleGalleryInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputGalleryErrors.username ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputGalleryErrors.username}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={gallery.password}
          onChange={(e) => {
            handleGalleryInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputGalleryErrors.password ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputGalleryErrors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={gallery.email}
          onChange={(e) => {
            handleGalleryInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputGalleryErrors.email ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputGalleryErrors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          value={gallery.address}
          onChange={(e) => {
            handleGalleryInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputGalleryErrors.address ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputGalleryErrors.address}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="telephone">
        <Form.Label>Telephone</Form.Label>
        <Form.Control
          type="text"
          value={gallery.telephone}
          onChange={(e) => {
            handleGalleryInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputGalleryErrors.telephone ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputGalleryErrors.telephone}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="pIva">
        <Form.Label>P.Iva</Form.Label>
        <Form.Control
          type="text"
          value={gallery.pIva}
          onChange={(e) => {
            handleGalleryInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputGalleryErrors.pIva ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputGalleryErrors.pIva}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="firstImgUrl">
        <Form.Label>1st img url</Form.Label>
        <Form.Control
          type="text"
          value={gallery.firstImgUrl}
          onChange={(e) => {
            handleGalleryInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputGalleryErrors.firstImgUrl ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputGalleryErrors.firstImgUrl}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="secondImgUrl">
        <Form.Label>2nd img url</Form.Label>
        <Form.Control
          type="text"
          value={gallery.secondImgUrl}
          onChange={(e) => {
            handleGalleryInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputGalleryErrors.secondImgUrl ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputGalleryErrors.secondImgUrl}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="thirdImgUrl">
        <Form.Label>3rd img url</Form.Label>
        <Form.Control
          type="text"
          value={gallery.thirdImgUrl}
          onChange={(e) => {
            handleGalleryInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputGalleryErrors.thirdImgUrl ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputGalleryErrors.thirdImgUrl}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="secondary" onClick={handleSignInModal} className="mt-1">
        Close
      </Button>
      <Button
        variant="primary"
        type="submit"
        className="mt-1"
        disabled={Object.keys(inputGalleryErrors).length > 0}
      >
        Save Changes
      </Button>
    </Form>
  );
};
export default GalleryForm;
