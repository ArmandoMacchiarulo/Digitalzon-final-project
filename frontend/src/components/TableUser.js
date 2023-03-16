import { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { deleteUserById } from "../api";
import UserForm from "./UserForm";

const TableUser = ({ users }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
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
  const handleShowModal = () => {
    setShow(!show);
  };

  const handleDelete = async (user) => {
    const result = await deleteUserById(user.id);
    if (result.ok) {
      navigate(0);
    } else {
      console.log(result);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleShowModal} user={user}>
        <Modal.Header closeButton>
          <Modal.Title>edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm utente={user} handleShowModal={handleShowModal} />
        </Modal.Body>
      </Modal>
      <Table size="sm" hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Dob</th>
            <th>Gender</th>
            <th>Modify</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.telephone}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>

                <td>
                  <Button
                    variant="warning"
                    onClick={() => {
                      setUser(user);
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
                      handleDelete(user);
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
export default TableUser;
