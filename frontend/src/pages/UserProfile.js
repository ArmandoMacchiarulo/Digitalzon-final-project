import { useCallback, useEffect, useState } from "react";
import { Navbar, Container, Button, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../api";
import UserForm from "../components/UserForm";

const UserProfile = () => {
  const { userId } = useParams();
  const [show, setShow] = useState("d-none");
  const [modify, setModify] = useState("Modify");
  const [user, setUser] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    email: "",
    address: "",
    telephone: "",
    dob: "",
    gender: "",
  });
  const getUser = useCallback(async () => {
    const result = await getUserById(userId);
    if (result.ok) {
      setUser(result.data);
    } else {
      console.log(result);
      console.log(result.ok);
    }
  }, [userId]);

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
    getUser();
  }, []);

  return (
    <>
      <Navbar bg="dark" expand="lg" className="">
        <Container fluid>
          <Navbar.Brand href={"/" + userId + "/user"} className="text-white">
            Home
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid className="vh-100 ">
        <Row>
          <div className="col-6 bg-white opacity-75 h-100">
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
            <p>Telephone: {user.telephone}</p>
            <p>Date of birth: {user.dob}</p>
            <p>Gender: {user.gender}</p>
            <Button variant="warning" className="m-1" onClick={handleShowForm}>
              {modify}
            </Button>
            <Link to={"/" + userId + "/user"}>
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
              "border-bottom border-start border-end border-dark col-6 bg-white opacity-75 " +
              show
            }
          >
            <UserForm utente={user} handleShowModal={handleShowForm} />
          </div>
        </Row>
      </Container>
    </>
  );
};
export default UserProfile;
