import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { LecturerContext } from "../../contexts/LecturerContext";

const DeleteLecturerModal = ({ _id }) => {
  // Contexts
  const {
    lecturerState: { lecturer },
    showDeleteLecturerModal,
    setShowDeleteLecturerModal,
    deleteLecturer,
    setLecturerShowToast,
  } = useContext(LecturerContext);

  // State
  const [deletedLecturer, setDeletedLecturer] = useState(lecturer);

  useEffect(() => setDeletedLecturer(lecturer), [lecturer]);

  const closeDialog = () => {
    setDeletedLecturer(lecturer);
    setShowDeleteLecturerModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await deleteLecturer(deletedLecturer);
    setShowDeleteLecturerModal(false);
    setLecturerShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  return (
    <Modal show={showDeleteLecturerModal}>
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

export default DeleteLecturerModal;
