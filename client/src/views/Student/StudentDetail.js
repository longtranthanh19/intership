import { StudentContext } from "../../contexts/StudentContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import SingleStudent from "../../components/student/SingleStudent";
import Skeleton from "react-loading-skeleton";

import AddStudentModal from "../../components/student/AddStudentModal";
import StudentList from "../../components/student/StudentList";
import DeleteStudentModal from "../../components/student/DeleteStudentModal";
import UpdateStudentModal from "../../components/student/UpdateStudentModal";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

const StudentDetail = (props) => {
  const major = props.match.params.major;
  const session = props.match.params.session;
  // Contexts
  const {
    authState: {
      user: { role, userName },
    },
  } = useContext(AuthContext);

  const {
    studentState: { studentsLoading, student, students },
    getStudentDetail,
    setShowAddStudentModal,
    studentShowToast: { show, message, type },
    setStudentShowToast,
  } = useContext(StudentContext);

  // Start: Get all
  useEffect(() => getStudentDetail(major, session), []);

  let body = null;

  if (studentsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (role === "Staff" && students.length === 0) {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH STUDENTS
        </h1>
        <div>
          <p style={{ fontWeight: 550 }}>
            Department:
            <span style={{ fontWeight: 350 }}> {major}</span>
          </p>
          <p style={{ fontWeight: 550 }}>
            Session:
            <span style={{ fontWeight: 350 }}> {session}</span>
          </p>
        </div>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h3">
            Hi, {role} {userName}
          </Card.Header>
          <Card.Body>
            <Card.Title>Welcome to USTH Management System</Card.Title>
            <Card.Text>No student found to display !!</Card.Text>
            <Card.Text>Click the button below to add new Student !!</Card.Text>
            <Button
              variant="primary"
              onClick={setShowAddStudentModal.bind(this, true)}
            >
              Add Student
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  } else if (students.length === 0) {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH STUDENTS
        </h1>
        <div>
          <p style={{ fontWeight: 550 }}>
            Department:
            <span style={{ fontWeight: 350 }}> {major}</span>
          </p>
          <p style={{ fontWeight: 550 }}>
            Session:
            <span style={{ fontWeight: 350 }}> {session}</span>
          </p>
        </div>
        <h4 className="d-flex justify-content-around">
          No Student Found To Display!
        </h4>
      </>
    );
  } else {
    body = (
      <>
        <StudentList
          SingleStudent={SingleStudent}
          setShowAddStudentModal={setShowAddStudentModal}
          role={role}
          userName={userName}
          students={students}
          major={major}
          session={session}
        />
      </>
    );
  }

  return (
    <Container>
      {body}
      <AddStudentModal />
      {student !== null && <UpdateStudentModal />}
      <DeleteStudentModal />
      {/* After post is added, show toast */}
      <Toast
        show={show}
        style={{ position: "fixed", top: "7%", right: "10px" }}
        className={`bg-${type} text-white`}
        onClose={setStudentShowToast.bind(this, {
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

export default StudentDetail;
