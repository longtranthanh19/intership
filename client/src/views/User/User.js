import { UserContext } from "../../contexts/UserContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import SingleUser from "../../components/user/SingleUser";
import UpdateUserModal from "../../components/user/UpdateUserModal";
import AddUserModal from "../../components/user/AddUserModal";
import UserList from "../../components/user/UserList";
import DeleteUserModal from "../../components/user/DeleteUserModal";
import TableUserRole from "../../components/user/TableUserRole";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import addIcon from "../../assets/plus-circle-fill.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const User = () => {
  // Contexts
  const {
    authState: {
      user: { username, role },
    },
  } = useContext(AuthContext);

  const {
    userState: { user, users, usersLoading },
    getUsers,
    setShowAddUserModal,
    userShowToast: { show, message, type },
    setUserShowToast,
  } = useContext(UserContext);

  // Start: Get all posts
  useEffect(() => getUsers(), []);

  let body = null;

  if (usersLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (role !== "Staff") {
    body = <div>NOT PERMISSION</div>;
  } else if (users.length === 0) {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH USER
        </h1>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {username}</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to USTH Management System</Card.Title>
            <Card.Text>Click the button below to add new User !!</Card.Text>
            <Button
              variant="primary"
              onClick={setShowAddUserModal.bind(this, true)}
            >
              Add User
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH USER
        </h1>
        <TableUserRole />
        {/* Open Add Post Modal */}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Add New User!!</Tooltip>}
        >
          <Button
            className="btn-floating"
            onClick={setShowAddUserModal.bind(this, true)}
          >
            <img src={addIcon} alt="add-post" width="60" height="60" />
          </Button>
        </OverlayTrigger>
      </>
    );
  }

  return (
    <Container>
      {body}
      <AddUserModal />
      {user !== null && <UpdateUserModal />}
      <DeleteUserModal />
      {/* After post is added, show toast */}
      <Toast
        show={show}
        style={{ position: "fixed", top: "7%", right: "10px" }}
        className={`bg-${type} text-white`}
        onClose={setUserShowToast.bind(this, {
          show: false,
          message: "",
          type: null,
        })}
        delay={4000}
        autohide
      >
        <Toast.Body>
          <strong>{message}</strong>
        </Toast.Body>
      </Toast>
    </Container>
  );
};

export default User;
