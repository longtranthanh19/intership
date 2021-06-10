import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const AddUserModal = () => {
  // Contexts
  const { showAddUserModal, setShowAddUserModal, addUser, setUserShowToast } =
    useContext(UserContext);

  // State
  const [newUser, setNewUser] = useState({
    id: "",
    username: "",
    password: "",
    userName: "",
    role: "",
  });

  const { id, username, password, role, userName } = newUser;

  const onChangeNewUserForm = (event) =>
    setNewUser({ ...newUser, [event.target.name]: event.target.value });

  const closeDialog = () => {
    resetAddUserData();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addUser(newUser);
    resetAddUserData();
    setUserShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  const resetAddUserData = () => {
    setNewUser({
      id: "",
      username: "",
      password: "",
      userName: "",
      role: "",
    });
    setShowAddUserModal(false);
  };

  return (
    <Modal show={showAddUserModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          {/* Student ID */}

          <Form.Group>
            <Form.Text id="title-help" muted>
              User ID
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Enter User ID"
              name="id"
              required
              aria-describedby="title-help"
              value={id}
              onChange={onChangeNewUserForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              username
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              aria-describedby="title-help"
              value={username}
              onChange={onChangeNewUserForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Password *
            </Form.Text>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              aria-describedby="title-help"
              value={password}
              onChange={onChangeNewUserForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              User Full Name *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Enter User Full Name"
              name="userName"
              required
              aria-describedby="title-help"
              value={userName}
              onChange={onChangeNewUserForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Role
            </Form.Text>
            <Form.Control
              as="select"
              value={role}
              name="role"
              required
              onChange={onChangeNewUserForm}
            >
              <option value="Gender" muted>
                Role *
              </option>
              <option value="Staff">Staff</option>
              <option value="Lecturer">Lecturer</option>
              <option value="Student">Student</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            // onClick={() => window.location.reload()}
          >
            Add User
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
