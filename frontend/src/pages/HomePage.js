import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Modal,
  FormLabel,
} from "react-bootstrap";

import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import NavBtn from "../components/NavBtn";

const HomePage = ({ users, galleries }) => {
  const [search, setSearch] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
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
  if (!userId && !galleryId && !adminId) {
    url = ``;
  }

  const navigate = useNavigate();
  const handleLoginModal = () => setShowLoginModal(!showLoginModal);
  const [inputFormLogin, setInputFormLogin] = useState({
    select: "",
    username: "",
    password: "",
  });

  const handleInputFormLogin = (input, value) => {
    setInputFormLogin({ ...inputFormLogin, [input]: value });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (inputFormLogin.select === "1") {
      const user = users.find(
        (user) =>
          user.username === inputFormLogin.username &&
          user.password === inputFormLogin.password
      );
      if (user) {
        navigate(`/${user.id}/user`);
        handleLoginModal();
      } else {
        window.alert("Wrong username or password");
        setInputFormLogin({
          select: inputFormLogin.select,
          username: "",
          password: "",
        });
      }
    } else if (inputFormLogin.select === "2") {
      const gallery = galleries.find(
        (gallery) =>
          gallery.username === inputFormLogin.username &&
          gallery.password === inputFormLogin.password
      );
      if (gallery) {
        navigate(`/${gallery.id}/gallery`);
        handleLoginModal();
      } else {
        window.alert("Wrong username or password");
        setInputFormLogin({
          select: inputFormLogin.select,
          username: "",
          password: "",
        });
      }
    } else if (inputFormLogin.select === "") {
      if (
        inputFormLogin.username === "admin" &&
        inputFormLogin.password === "password"
      ) {
        const admin = 1;
        navigate(`/${admin}/admin`);
        handleLoginModal();
      } else {
        window.alert("Wrong username or password");
        setInputFormLogin({
          select: inputFormLogin.select,
          username: "",
          password: "",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`search/${search}`);

    setSearch("");
  };

  return (
    <>
      {/* <Image src={jumbo} fluid className="mt-5 mt-md-0"></Image> */}
      <Container className=" jumbo d-flex" fluid>
        <div className="art-galleries"></div>
      </Container>

      <Navbar bg="dark" expand="lg" className="fixed-top">
        <Container fluid>
          <Navbar.Brand href={url + "/"} className="text-white">
            Art
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href={url + "/galleries"} className="text-white ">
                Galleries
              </Nav.Link>
              <Nav.Link href={url + "/artworks"} className="text-white">
                Artworks
              </Nav.Link>
              <Nav.Link href={url + "/exhibitions"} className="text-white">
                Exhibitions
              </Nav.Link>

              <NavBtn handleLoginModal={handleLoginModal}></NavBtn>
            </Nav>

            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button variant="outline-warning" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showLoginModal} onHide={handleLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleLoginSubmit}>
          <Modal.Body>
            <Form.Select
              id="select"
              value={inputFormLogin.select}
              onChange={(e) => {
                handleInputFormLogin(e.target.id, e.target.value);
              }}
            >
              <option value="">Select One</option>
              <option value="1">User</option>
              <option value="2">Gallery</option>
            </Form.Select>
            <Form.Group className="" controlId="username">
              <FormLabel>Username</FormLabel>
              <Form.Control
                type="text"
                placeholder="Username"
                value={inputFormLogin.username}
                onChange={(e) => {
                  handleInputFormLogin(e.target.id, e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="" controlId="password">
              <FormLabel>Password</FormLabel>
              <Form.Control
                type="password"
                placeholder="Password"
                value={inputFormLogin.password}
                onChange={(e) => {
                  handleInputFormLogin(e.target.id, e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleLoginModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Outlet />
    </>
  );
};
export default HomePage;
