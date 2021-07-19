import { CourseContext } from "../../../contexts/CourseContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AddCourseModal from "../../../components/course/AddCourseModal/AddCourseModal";
import UpdateCourseModal from "../../../components/course/UpdateCourseModal/UpdateCourseModal";
import DeleteCourseModal from "../../../components/course/DeleteCourseModal/DeleteCourseModal";

import addIcon from "../../../assets/plus-circle-fill.svg";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const CourseDepartment = (props) => {
  const year = props.match.params.year;
  const program = props.match.params.program;
  const wave = props.match.params.wave;
  const department = props.match.params.department;
  // Contexts
  const {
    authState: {
      user: { role },
    },
  } = useContext(AuthContext);

  const {
    courseState: { coursesLoading, courses },
    getCourseByYearDepartment,
    setShowAddCourseModal,
    courseShowToast: { show, message, type },
    setCourseShowToast,
  } = useContext(CourseContext);

  // Start: Get all posts
  useEffect(
    () => getCourseByYearDepartment(year, program, wave, department),
    []
  );

  let body = null;
  if (coursesLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (role === "Student") {
    body = (
      <div>
        <h2
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH COURSES
        </h2>
        <div>
          <p style={{ fontWeight: 550 }}>
            Program:{" "}
            <span style={{ fontWeight: 350 }}>
              {program} {year}
            </span>
          </p>
          <p style={{ fontWeight: 550 }}>
            Wave: <span style={{ fontWeight: 350 }}>{wave}</span>
          </p>
          <p style={{ fontWeight: 550 }}>
            Department: <span style={{ fontWeight: 350 }}>{department}</span>
          </p>
        </div>
        <Table bordered hover>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "550" }}>Course Categories</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr>
                <td
                  colSpan="4"
                  style={{ textAlign: "center", fontSize: "15px" }}
                >
                  <Link
                    to={`/course/${year}/${program}/${wave}/${department}/${course.courseName}`}
                  >
                    {course.courseName}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {courses.length === 0 && (
          <h4 className="d-flex justify-content-around">
            No Course Found To Display!
          </h4>
        )}
      </div>
    );
  } else if (program === "Bachelor") {
    body = (
      <div>
        <h2
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          {year} of {program} Program
        </h2>
        <h2
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          {department} COURSES
        </h2>
        <Table bordered hover>
          <tbody>
            {courses.map((course) => (
              <tr>
                <td
                  colSpan="4"
                  style={{ textAlign: "center", fontSize: "15px" }}
                >
                  <Link
                    to={`/course/${year}/${program}/${wave}/${department}/${course.courseName}`}
                  >
                    {course.courseName}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {courses.length === 0 && (
          <h4 className="d-flex justify-content-around">
            No Course Found To Display!
          </h4>
        )}
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
  }

  return (
    <Container>
      {body}
      <AddCourseModal />
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

export default CourseDepartment;
