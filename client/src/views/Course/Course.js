import { CourseContext } from "../../contexts/CourseContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import UpdateCourseModal from "../../components/course/UpdateCourseModal/UpdateCourseModal";
import AddCourseModal from "../../components/course/AddCourseModal/AddCourseModal";
import DeleteCourseModal from "../../components/course/DeleteCourseModal/DeleteCourseModal";
import TableCourseList from "../../components/course/CourseList/TableCourseList";

import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import addIcon from "../../assets/plus-circle-fill.svg";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Course = () => {
  // Contexts
  const {
    authState: {
      user: { username, role },
    },
  } = useContext(AuthContext);

  const {
    courseState: { course, courses, coursesLoading },
    getCourses,
    setShowAddCourseModal,
    courseShowToast: { show, message, type },
    setCourseShowToast,
  } = useContext(CourseContext);

  // Start: Get all posts
  useEffect(() => getCourses(), []);

  let body = null;
  if (role === "Staff" || role === "Lecturer") {
    body = (
      <div>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH COURSES
        </h1>
        <div style={{ paddingTop: "20px" }}>
          <TableCourseList />
        </div>

        {/* Open Add Post Modal */}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Add New Course !!</Tooltip>}
        >
          <Button
            className="btn-floating"
            onClick={setShowAddCourseModal.bind(this, true)}
          >
            <img src={addIcon} alt="add-post" width="60" height="60" />
          </Button>
        </OverlayTrigger>
      </div>
    );
  } else {
    body = (
      <div>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH COURSES
        </h1>
        <div style={{ paddingTop: "20px" }}>
          <TableCourseList />
        </div>
      </div>
    );
  }
  return (
    <Container>
      {body}
      <AddCourseModal />
      {course !== null && <UpdateCourseModal />}
      <DeleteCourseModal />
      {/* After post is added, show toast */}
      <Toast
        show={show}
        style={{ position: "fixed", top: "7%", right: "10px" }}
        className={`bg-${type} text-white`}
        onClose={setCourseShowToast.bind(this, {
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

export default Course;
