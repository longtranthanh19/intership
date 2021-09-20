import { CourseContext } from "../../../contexts/CourseContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { CourseStudentContext } from "../../../contexts/CourseStudentContext";

import { useContext, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UpdateCourseModal from "../../../components/course/UpdateCourseModal/UpdateCourseModal";
import CourseBasicInformation from "../../../components/course/CourseDetail/CourseBasicInformation";
import StudentListInformation from "../../../components/course/CourseDetail/StudentListInformation";
import DeleteCourseModal from "../../../components/course/DeleteCourseModal/DeleteCourseModal";

import UpdateCourseStudentModal from "../../../components/coursestudents/UpdateCourseStudentModal/UpdateCourseStudentModal";
import AddCourseStudentModal from "../../../components/coursestudents/AddCourseStudentModal/AddCourseStudentModal";
import DeleteCourseStudentModal from "../../../components/coursestudents/DeleteCourseStudentModal/DeleteCourseStudentModal";

import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import html2pdf from "html2pdf.js";

const CourseDetail = (props) => {
  const year = props.match.params.year;
  const program = props.match.params.program;
  const department = props.match.params.department;
  const wave = props.match.params.wave;
  const courseName = props.match.params.courseName;
  // Contexts

  const {
    authState: {
      user: { role },
    },
  } = useContext(AuthContext);

  const {
    courseState: { course, courseLoading },
    getCourseByName,
    courseShowToast: { show, message, type },
    setCourseShowToast,
  } = useContext(CourseContext);

  const {
    studentCourseState: { student, students, studentsLoading },
    getCourseStudents,
    setShowAddCourseStudentModal,
    courseStudentShowToast: { showToast, messageToast, typeToast },
    setCourseStudentShowToast,
  } = useContext(CourseStudentContext);

  // Start: Get all posts
  useEffect(() => {
    getCourseByName(year, program, department, wave, courseName);
    getCourseStudents(year, program, wave, courseName);
  }, []);

  const download = (id, ht) => {
    const source = document.getElementById(id);
    console.log(source);
    html2pdf(source, {
      filename: `${course.courseName}-${course.wave}-${id}.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        useCORS: true,
        letterRendering: true,
        scale: 3,
        height: ht,
      },
      jsPDF: { unit: "pt", format: "A4", orientation: "portrait" },
    });
  };

  let body = null;

  if (courseLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (!course) {
    body = <div>This Course Have Been Deleted Recently</div>;
  } else if (role === "Student" && year === "1st Year") {
    body = (
      <>
        <h2
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH COURSES
        </h2>
        <div id="Course Detail">
          <Container>
            <h3
              className="d-flex justify-content-around"
              style={{ padding: "10px" }}
            >
              Course Detail
            </h3>
            <div style={{ paddingBottom: "10px" }}>
              <Container>
                <Row>
                  <Col>
                    <p style={{ fontWeight: 550 }}>
                      Wave: <span style={{ fontWeight: 350 }}>{wave}</span>
                    </p>
                  </Col>
                  <Col className="d-flex justify-content-end"></Col>
                </Row>
              </Container>
            </div>

            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <CourseBasicInformation course={course} />
                </Col>
                <Col xs={12} md={8}>
                  <StudentListInformation students={students} />
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </>
    );
  } else if (year === "1st Year") {
    body = (
      <>
        <h2
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH COURSES
        </h2>
        <div id="Course Detail">
          <Container>
            <h3
              className="d-flex justify-content-around"
              style={{ padding: "10px" }}
            >
              Course Detail
            </h3>
            <div style={{ paddingBottom: "10px" }}>
              <Container>
                <Row>
                  <Col>
                    <p style={{ fontWeight: 550 }}>
                      Wave: <span style={{ fontWeight: 350 }}>{wave}</span>
                    </p>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <div style={{ paddingRight: "10px" }}>
                      <Button>
                        <Link
                          to={`/course/export/${wave}/${course.courseCode}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Export
                        </Link>
                      </Button>
                    </div>
                    <div>
                      <Button onClick={setShowAddCourseStudentModal}>
                        Add Student
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <CourseBasicInformation course={course} />
                </Col>
                <Col xs={12} md={8}>
                  <StudentListInformation students={students} />
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </>
    );
  } else if (role === "Student") {
    body = (
      <>
        <h2
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH COURSES
        </h2>
        <div id="Course Detail">
          <Container>
            <h3
              className="d-flex justify-content-around"
              style={{ padding: "10px" }}
            >
              Course Detail
            </h3>
            <div>
              <p style={{ fontWeight: 550 }}>
                Department:{" "}
                <span style={{ fontWeight: 350 }}>{department}</span>
              </p>
              <p style={{ fontWeight: 550 }}>
                Wave: <span style={{ fontWeight: 350 }}>{wave}</span>
              </p>
            </div>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <CourseBasicInformation course={course} />
                </Col>
                <Col xs={12} md={8}>
                  <StudentListInformation students={students} />
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </>
    );
  } else {
    body = (
      <>
        <h2
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH COURSES
        </h2>
        <div id="Course Detail">
          <Container>
            <h3
              className="d-flex justify-content-around"
              style={{ padding: "10px" }}
            >
              Course Detail
            </h3>
            <div style={{ paddingBottom: "10px" }}>
              <Container>
                <Row>
                  <Col className="d-flex justify-content-end">
                    <div style={{ paddingRight: "10px" }}>
                      <Button>
                        <Link
                          to={`/course/export/${wave}/${course.courseCode}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Export
                        </Link>
                      </Button>
                    </div>
                    <div>
                      <Button onClick={setShowAddCourseStudentModal}>
                        Add Student
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div>
              <p style={{ fontWeight: 550 }}>
                Department:{" "}
                <span style={{ fontWeight: 350 }}>{department}</span>
              </p>
              <p style={{ fontWeight: 550 }}>
                Wave: <span style={{ fontWeight: 350 }}>{wave}</span>
              </p>
            </div>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <CourseBasicInformation course={course} />
                </Col>
                <Col xs={12} md={8}>
                  <StudentListInformation students={students} />
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </>
    );
  }

  return (
    <Container>
      {body}
      {course !== null && <UpdateCourseModal />}
      {student !== null && <UpdateCourseStudentModal />}
      <AddCourseStudentModal course={course} />
      <DeleteCourseModal />
      <DeleteCourseStudentModal />
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

      <Toast
        show={showToast}
        style={{ position: "fixed", top: "7%", right: "10px" }}
        className={`bg-${typeToast} text-white`}
        onClose={setCourseShowToast.bind(this, {
          showToast: false,
          messageToast: "",
          typeToast: null,
        })}
        delay={4000}
        autohide
      >
        <Toast.Body>
          <strong>{messageToast}</strong>
        </Toast.Body>
      </Toast>
    </Container>
  );
};

export default CourseDetail;
