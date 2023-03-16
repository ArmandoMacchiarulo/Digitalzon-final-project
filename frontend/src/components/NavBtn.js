import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UserForm from "./UserForm";
import GalleryForm from "./GalleryForm";

const NavBtn = ({ handleLoginModal }) => {
  const { userId } = useParams();
  const { galleryId } = useParams();
  const { adminId } = useParams();
  const [signInShow, setSignInShow] = useState(false);

  const handleSignInModal = () => {
    setSignInShow(!signInShow);
  };

  if (userId) {
    return (
      <>
        <Link to={"/" + userId + "/user/profile"}>
          <Button className="bg-dark btn-outline-warning ms-5">Profilo</Button>
        </Link>
        <Link to={"/"}>
          <Button className="bg-dark btn-outline-warning ms-5">Logout</Button>
        </Link>
      </>
    );
  } else if (galleryId) {
    return (
      <>
        <Link to={"/" + galleryId + "/gallery/profile"}>
          <Button className="bg-dark btn-outline-warning ms-5">Profilo</Button>
        </Link>
        <Link to={"/"}>
          <Button className="bg-dark btn-outline-warning ms-5">Logout</Button>
        </Link>
      </>
    );
  } else if (adminId) {
    return (
      <>
        <Link to={"/admin/" + adminId + "/settings"}>
          <Button className="bg-dark btn-outline-warning ms-5">Settings</Button>
        </Link>
        <Link to={"/"}>
          <Button className="bg-dark btn-outline-warning ms-5">Logout</Button>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Button
          className="bg-dark btn-outline-warning ms-5"
          onClick={handleLoginModal}
        >
          Login
        </Button>
        <Button
          className="bg-dark btn-outline-warning ms-5"
          onClick={handleSignInModal}
        >
          Sign in
        </Button>
        <Modal show={signInShow} onHide={handleSignInModal}>
          <Modal.Header closeButton>
            <Modal.Title>Sign in module</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs>
              <TabList>
                <Tab>Sign in as User</Tab>
                <Tab>Sign in as Gallery</Tab>
              </TabList>

              <TabPanel>
                {/* FORM USER */}

                <UserForm handleShowModal={handleSignInModal} />
              </TabPanel>
              <TabPanel>
                {/* FORM GALLERY */}

                <GalleryForm handleShowModal={handleSignInModal} />
              </TabPanel>
            </Tabs>
          </Modal.Body>
        </Modal>
      </>
    );
  }
};
export default NavBtn;
