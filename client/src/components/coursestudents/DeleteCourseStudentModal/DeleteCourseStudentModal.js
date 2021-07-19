import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { CourseStudentContext } from "../../../contexts/CourseStudentContext";

const DeleteCourseStudentModal = () => {
  // Contexts
  const {
    studentCourseState: { student },
    showDeleteCourseStudentModal,
    setShowDeleteCourseStudentModal,
    deleteCourseStudent,
    setCourseStudentShowToast,
  } = useContext(CourseStudentContext);

  // State
  const [deletedCourseStudent, setDeletedCourseStudent] = useState(student);

  useEffect(() => setDeletedCourseStudent(student), [student]);

  const closeDialog = () => {
    setDeletedCourseStudent(student);
    setShowDeleteCourseStudentModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await deleteCourseStudent(
      deletedCourseStudent
    );
    setShowDeleteCourseStudentModal(false);
    setCourseStudentShowToast({
      showToast: true,
      messageToast: success
        ? `Delete student '${student.studentName}' successful`
        : message,
      typeToast: success ? "success" : "danger",
    });
    if (success) {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  return (
    <Modal show={showDeleteCourseStudentModal}>
      <Modal.Header>
        <Modal.Title>Are You Sure To Delete This ?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default DeleteCourseStudentModal;
