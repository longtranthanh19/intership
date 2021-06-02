import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { StudentContext } from "../../contexts/StudentContext";

const DeleteStudentModal = ({ _id }) => {
  // Contexts
  const {
    studentState: { student },
    showDeleteStudentModal,
    setShowDeleteStudentModal,
    deleteStudent,
    setStudentShowToast,
  } = useContext(StudentContext);

  // State
  const [deletedStudent, setDeletedStudent] = useState(student);

  useEffect(() => setDeletedStudent(student), [student]);

  const closeDialog = () => {
    setDeletedStudent(student);
    setShowDeleteStudentModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await deleteStudent(deletedStudent);
    setShowDeleteStudentModal(false);
    setStudentShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  return (
    <Modal show={showDeleteStudentModal}>
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

export default DeleteStudentModal;
