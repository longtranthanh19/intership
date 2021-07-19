import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { CourseContext } from "../../../contexts/CourseContext";
import { useHistory } from "react-router-dom";

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

  let history = useHistory();
  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await deleteCourse(deletedCourse);
    setShowDeleteCourseModal(false);
    setCourseShowToast({
      show: true,
      message: success
        ? `Delete course '${course.courseName}' successful`
        : message,
      type: success ? "success" : "danger",
    });
    if (success) {
      setTimeout(() => {
        history.push(`/course/${course.year}/${course.program}/${course.wave}`)
      }, 1500);
    }
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
          <Button variant="primary" type="submit">
            Delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default DeleteCourseModal;
