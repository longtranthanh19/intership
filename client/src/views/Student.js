import { StudentContext } from "../contexts/StudentContext";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import SingleStudent from "../components/student/SingleStudent";
import UpdateStudentModal from "../components/student/UpdateStudentModal";
import AddStudentModal from "../components/student/AddStudentModal";
import StudentList from "../components/student/StudentList";
import DeleteStudentModal from "../components/student/DeleteStudentModal";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

const Student = () => {
  // Contexts
  const {
    authState: {
      user: { username },
    },
  } = useContext(AuthContext);

  const {
    studentState: { student, students, studentsLoading },
    getStudents,
    setShowAddStudentModal,
    studentShowToast: { show, message, type },
    setStudentShowToast,
  } = useContext(StudentContext);

  // Start: Get all posts
  useEffect(() => getStudents(), []);

  let body = null;

  if (studentsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (students.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {username}</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to USTH Management System</Card.Title>
            <Card.Text>Click the button below to add new Student !!</Card.Text>
            <Button
              variant="primary"
              onClick={setShowAddStudentModal.bind(this, true)}
            >
              Add
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    body = (
      <>
        <StudentList
          SingleStudent={SingleStudent}
          setShowAddStudentModal={setShowAddStudentModal}
          students={students}
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

export default Student;
