import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { CourseContext } from "../../contexts/CourseContext";

const DeleteCourseModal = ({ _id }) => {
  // Contexts
  const {
    courseState: { course },
    showDeleteCourseModal,
    setShowDeleteCourseModal,
    deleteCourse,
    setCourseShowToast,
  } = useContext(CourseContext);

  // State
  const [deletedCourse, setDeletedCourse] = useState(course);

  useEffect(() => setDeletedCourse(course), [course]);

  const closeDialog = () => {
    setDeletedCourse(course);
    setShowDeleteCourseModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await deleteCourse(deletedCourse);
    setShowDeleteCourseModal(false);
    setCourseShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  return (
    <Modal show={showDeleteCourseModal}>
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

export default DeleteCourseModal;
