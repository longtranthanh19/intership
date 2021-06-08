import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const DeleteUserModal = ({ _id }) => {
  // Contexts
  const {
    userState: { user },
    showDeleteUserModal,
    setShowDeleteUserModal,
    deleteUser,
    setUserShowToast,
  } = useContext(UserContext);

  // State
  const [deletedUser, setDeletedUser] = useState(user);

  useEffect(() => setDeletedUser(user), [user]);

  const closeDialog = () => {
    setDeletedUser(user);
    setShowDeleteUserModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await deleteUser(deletedUser);
    setShowDeleteUserModal(false);
    setUserShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  return (
    <Modal show={showDeleteUserModal}>
      <Modal.Header>
        <Modal.Title>Are You Sure To Delete This ?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => window.location.reload()}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default DeleteUserModal;
