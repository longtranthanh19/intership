import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const UpdateUserModal = () => {
  // Contexts
  const {
    userState: { user },
    showUpdateUserModal,
    setShowUpdateUserModal,
    updateUser,
    setUserShowToast,
  } = useContext(UserContext);

  // State
  const [updatedUser, setUpdatedUser] = useState(user);

  useEffect(() => setUpdatedUser(user), [user]);

  const { id, username, password, role, userName } = updatedUser;

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const onChangeUpdatedUserForm = (event) =>
    setUpdatedUser({
      ...updatedUser,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedUser(user);
    setShowUpdateUserModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateUser(updatedUser);
    setShowUpdateUserModal(false);
    setUserShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  // const resetAddPostData = () => {
  // 	setNewPost({ title: '', description: '', url: '', status: 'TO LEARN' })
  // 	setShowAddPostModal(false)
  // }

  return (
    <Modal show={showUpdateUserModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Making Change?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Text id="title-help" muted>
              ID
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Change username"
              name="id"
              required
              aria-describedby="title-help"
              value={id}
              onChange={onChangeUpdatedUserForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              username
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Change username"
              name="username"
              required
              aria-describedby="title-help"
              value={username}
              onChange={onChangeUpdatedUserForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              Password *
            </Form.Text>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Change Password"
              name="password"
              required
              aria-describedby="title-help"
              value={password}
              onChange={onChangeUpdatedUserForm}
            />
            <Form.Check
              type="checkbox"
              label="Show password"
              onClick={handleShowPassword}
            />
          </Form.Group>

          <Form.Group>
            <Form.Text id="title-help" muted>
              User Name *
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Change User Name"
              name="userName"
              required
              aria-describedby="title-help"
              value={userName}
              onChange={onChangeUpdatedUserForm}
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
              onChange={onChangeUpdatedUserForm}
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
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateUserModal;
