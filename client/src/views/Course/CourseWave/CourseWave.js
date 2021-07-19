import { CourseContext } from "../../../contexts/CourseContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UpdateCourseModal from "../../../components/course/UpdateCourseModal/UpdateCourseModal";
import DeleteCourseModal from "../../../components/course/DeleteCourseModal/DeleteCourseModal";

import CourseWaveBachelor4 from "./CourseWaveBachelor4";
import CourseWaveBachelor from "./CourseWaveBachelor";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import addIcon from "../../../assets/plus-circle-fill.svg";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import AddCourseModal from "../../../components/course/AddCourseModal/AddCourseModal";

const CourseWave = (props) => {
  // Contexts
  const year = props.match.params.year;
  const program = props.match.params.program;
  const wave = props.match.params.wave;

  const {
    authState: {
      user: { username, role },
    },
  } = useContext(AuthContext);

  const {
    courseState: { coursesLoading, courses },
    getCourseByYearWave,
    setShowAddCourseModal,
    courseShowToast: { show, message, type },
    setCourseShowToast,
  } = useContext(CourseContext);

  // Start: Get all posts
  useEffect(() => getCourseByYearWave(year, program, wave), []);

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

  let departments = getUnique(courses.map((course) => course.department));

  let body = null;
  if (coursesLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (role === "Student" && program === "Bachelor 4 Year") {
    body = (
      <>
        <CourseWaveBachelor4 courses={courses} year={year} />
      </>
    );
  } else if (
    role === "Student" &&
    program === "Bachelor" &&
    year === "1st Year"
  ) {
    body = (
      <>
        <CourseWaveBachelor courses={courses} year={year} />
        {/* Open Add Post Modal */}
      </>
    );
  } else if (role === "Student" && program === "Bachelor") {
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
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "700" }}>Department</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/PMAB`}
                  style={{ textDecoration: "none" }}
                >
                  PMAB
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/AMSN`}
                  style={{ textDecoration: "none" }}
                >
                  AMSN
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/Energy`}
                  style={{ textDecoration: "none" }}
                >
                  Energy
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/ICT`}
                  style={{ textDecoration: "none" }}
                >
                  ICT
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/WEO`}
                  style={{ textDecoration: "none" }}
                >
                  WEO
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/Space`}
                  style={{ textDecoration: "none" }}
                >
                  Space and Application
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/MST`}
                  style={{ textDecoration: "none" }}
                >
                  MST
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/FST`}
                  style={{ textDecoration: "none" }}
                >
                  FST
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/CHEM`}
                  style={{ textDecoration: "none" }}
                >
                  CHEM
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/AE`}
                  style={{ textDecoration: "none" }}
                >
                  AE
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/MATH`}
                  style={{ textDecoration: "none" }}
                >
                  Applied Math
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  } else if (program === "Bachelor 4 Year") {
    body = (
      <>
        <CourseWaveBachelor4 courses={courses} year={year} />
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
      </>
    );
  } else if (program === "Bachelor" && year === "1st Year") {
    body = (
      <>
        <CourseWaveBachelor courses={courses} year={year} />
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
      </>
    );
  } else if (program === "Bachelor") {
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
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "700" }}>Department</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/PMAB`}
                  style={{ textDecoration: "none" }}
                >
                  PMAB
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/AMSN`}
                  style={{ textDecoration: "none" }}
                >
                  AMSN
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/Energy`}
                  style={{ textDecoration: "none" }}
                >
                  Energy
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/ICT`}
                  style={{ textDecoration: "none" }}
                >
                  ICT
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/WEO`}
                  style={{ textDecoration: "none" }}
                >
                  WEO
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/Space`}
                  style={{ textDecoration: "none" }}
                >
                  Space and Application
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/MST`}
                  style={{ textDecoration: "none" }}
                >
                  MST
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/FST`}
                  style={{ textDecoration: "none" }}
                >
                  FST
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/CHEM`}
                  style={{ textDecoration: "none" }}
                >
                  CHEM
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/AE`}
                  style={{ textDecoration: "none" }}
                >
                  AE
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <Link
                  to={`/course/${year}/${program}/${wave}/MATH`}
                  style={{ textDecoration: "none" }}
                >
                  Applied Math
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
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

export default CourseWave;
