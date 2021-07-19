import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CourseContext } from "../../../contexts/CourseContext";

const UpdateStudentList = () => {
  // Contexts
  const {
    courseState: { course },
    showUpdateStudentListModal,
    setShowUpdateStudentListModal,
    updateCourse,
    setCourseShowToast,
  } = useContext(CourseContext);

  // State
  const [updatedCourse, setUpdatedCourse] = useState(course);

  useEffect(() => setUpdatedCourse(course), [course]);

  const {
    studentList,
  } = updatedCourse;

  const onChangeUpdatedCourseForm = (event) => {
    setUpdatedCourse({
      ...updatedCourse,
      [event.target.name]: event.target.value,
    });
  };

  const closeDialog = () => {
    setUpdatedCourse(course);
    setShowUpdateStudentListModal(false);
  };

  const reload = () => {
    window.location.reload();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateCourse(updatedCourse);
    setShowUpdateStudentListModal(false);
    setCourseShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
    setTimeout(() => {
      reload();
    }, 1000);
  };

  return (
    <Modal show={showUpdateStudentListModal} onHide={closeDialog}>
      <Modal.Header>
        <Modal.Title>Making Change?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          {/* Student ID */}
          {studentList.map((student) => {
            return (
              <div>
                <Form.Group>
                  <Form.Text id="title-help" muted>
                    StudentID
                  </Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="50%"
                    name="studentID"
                    aria-describedby="title-help"
                    value={student.studentID}
                    onChange={onChangeUpdatedCourseForm}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Text id="title-help" muted>
                    Student Name
                  </Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="50%"
                    name="studentName"
                    aria-describedby="title-help"
                    value={student.studentName}
                    onChange={onChangeUpdatedCourseForm}
                  />
                </Form.Group>
              </div>
            );
          })}
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

export default UpdateStudentList;
