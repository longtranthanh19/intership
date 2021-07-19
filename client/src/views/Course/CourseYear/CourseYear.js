import { CourseContext } from "../../../contexts/CourseContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UpdateCourseModal from "../../../components/course/UpdateCourseModal/UpdateCourseModal";
import DeleteCourseModal from "../../../components/course/DeleteCourseModal/DeleteCourseModal";
import AddCourseModal from "../../../components/course/AddCourseModal/AddCourseModal";

import Spinner from "react-bootstrap/Spinner";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import addIcon from "../../../assets/plus-circle-fill.svg";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const CourseYear = (props) => {
  // Contexts
  const year = props.match.params.year;
  const program = props.match.params.program;

  const {
    authState: {
      user: { role },
    },
  } = useContext(AuthContext);

  const {
    courseState: { course, coursesLoading, courses },
    getCourseByYear,
    courseShowToast: { show, message, type },
    setShowAddCourseModal,
    setCourseShowToast,
  } = useContext(CourseContext);

  // Start: Get all posts
  useEffect(() => {
    const timer = setTimeout(() => {
      getCourseByYear(year, program);
    }, 0.1);

    return () => clearTimeout(timer);
  }, []);

  console.log();

  function getUnique(array) {
    var uniqueArray = [];

    // Loop through array values
    for (var value of array) {
      if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value);
      }
    }
    return uniqueArray;
  }

  let waves = getUnique(courses.map((course) => course.wave));

  let body = null;
  if (coursesLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (role === "Student" && program === "Bachelor 4 Year") {
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
            Program:
            <span style={{ fontWeight: 350 }}>
              {" "}
              Bachelor 1 of 4 Year Program{" "}
            </span>
          </p>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "700" }}>WAVES</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {waves.map((wave) => (
              <tr>
                <td>
                  <Link
                    className="d-flex justify-content-around"
                    to={`/course/${year}/${program}/${wave}`}
                    style={{ textDecoration: "none" }}
                  >
                    {wave}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {waves.length === 0 && (
          <h4 className="d-flex justify-content-around">
            No Course Found To Display!
          </h4>
        )}
      </div>
    );
  } else if (program === "Bachelor 4 Year") {
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
            Program:
            <span style={{ fontWeight: 350 }}>
              {" "}
              Bachelor 1 of 4 Year Program{" "}
            </span>
          </p>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "700" }}>WAVES</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {waves.map((wave) => (
              <tr>
                <td>
                  <Link
                    className="d-flex justify-content-around"
                    to={`/course/${year}/${program}/${wave}`}
                    style={{ textDecoration: "none" }}
                  >
                    {wave}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {waves.length === 0 && (
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
  } else if (role === "Staff" || role === "Lecturer") {
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
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "550" }}>Waves</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {waves.map((wave) => (
              <tr>
                <td>
                  <Link
                    className="d-flex justify-content-around"
                    to={`/course/${year}/${program}/${wave}`}
                    style={{ textDecoration: "none" }}
                  >
                    {wave}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {waves.length === 0 && (
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
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "550" }}>Waves</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {waves.map((wave) => (
              <tr>
                <td>
                  <Link
                    className="d-flex justify-content-around"
                    to={`/course/${year}/${program}/${wave}`}
                    style={{ textDecoration: "none" }}
                  >
                    {wave}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {waves.length === 0 && (
          <h4 className="d-flex justify-content-around">
            No Course Found To Display!
          </h4>
        )}
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

export default CourseYear;
