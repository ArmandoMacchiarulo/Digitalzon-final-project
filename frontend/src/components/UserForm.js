import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { postUser, putUser } from "../api";
import { validationUserForm } from "../utils/validation";
const UserForm = ({ utente, handleShowModal }) => {
  const [inputUserErrors, setInputUserErrors] = useState({});
  const navigate = useNavigate();
  const userData = {
    name: "",
    surname: "",
    username: "",
    password: "",
    email: "",
    address: "",
    telephone: "",
    dob: "",
    gender: "",
  };
  const [user, setUser] = useState(userData);

  const handleSignInModal = () => {
    //setSignInShow(!signInShow);
    handleShowModal();

    console.log("user");

    const tempUser = validationUserForm(user);
    setInputUserErrors(tempUser);
  };

  const handleUserInputChange = (input, value) => {
    setUser({ ...user, [input]: value });
  };

  const handleUserFormSubmit = async (e) => {
    let result = { ok: false, data: [] };
    e.preventDefault();
    if (user.id === undefined) {
      result = await postUser(user);
      if (result.ok) {
        handleSignInModal();
        window.alert("user registration successful");
        navigate(0);
      } else {
        console.log(result.data);
        window.alert("username and password is invalid or email alrady in use");
      }
    } else {
      console.log(user.id);
      result = await putUser(user, user.id);
      if (result.ok) {
        handleSignInModal();
        window.alert("user registration successful");
        navigate(0);
      } else {
        console.log(result.data);
        window.alert("username and password is invalid or email alrady in use");
      }
    }
  };

  useEffect(() => {
    const tempUser = validationUserForm(user);
    setInputUserErrors(tempUser);
  }, [user]);
  useEffect(() => {
    if (utente) {
      setUser(utente);
    }
  }, [utente]);

  return (
    <Form onSubmit={handleUserFormSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={user.name}
          onChange={(e) => {
            handleUserInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputUserErrors.name ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputUserErrors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="surname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          value={user.surname}
          onChange={(e) => {
            handleUserInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputUserErrors.surname ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputUserErrors.surname}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={user.username}
          onChange={(e) => {
            handleUserInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputUserErrors.username ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputUserErrors.username}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={user.password}
          onChange={(e) => {
            handleUserInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputUserErrors.password ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputUserErrors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={user.email}
          onChange={(e) => {
            handleUserInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputUserErrors.email ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputUserErrors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          value={user.address}
          onChange={(e) => {
            handleUserInputChange(e.target.id, e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="telephone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={user.telephone}
          onChange={(e) => {
            handleUserInputChange(e.target.id, e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="dob">
        <Form.Label>Date of birt</Form.Label>
        <Form.Control
          type="date"
          value={user.dob}
          onChange={(e) => {
            handleUserInputChange(e.target.id, e.target.value);
          }}
          isInvalid={inputUserErrors.dob ? true : false}
        />
        <Form.Control.Feedback type="invalid">
          {inputUserErrors.dob}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>

        <Form.Select
          value={user.gender}
          onChange={(e) => {
            handleUserInputChange(e.target.id, e.target.value);
          }}
        >
          <option>Select one</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </Form.Select>
      </Form.Group>
      <Button variant="secondary" onClick={handleSignInModal} className="mt-1">
        Close
      </Button>
      <Button
        variant="primary"
        type="submit"
        className="mt-1"
        disabled={Object.keys(inputUserErrors).length > 0}
      >
        Save Changes
      </Button>
    </Form>
  );
};
export default UserForm;
