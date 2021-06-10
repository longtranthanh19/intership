import { StudentContext } from "../contexts/StudentContext";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import UpdateStudentModal from "../components/student/UpdateStudentModal";
import AddStudentModal from "../components/student/AddStudentModal";
import StudentProfile from "../components/profile/StudentProfile";
import DeleteStudentModal from "../components/student/DeleteStudentModal";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

const Profile = () => {
  // Contexts
  const {
    authState: {
      user: { username, role, id },
    },
  } = useContext(AuthContext);

  const {
    studentState: { student, studentsLoading, studentProfile },
    getStudentProfile,
  } = useContext(StudentContext);

  console.log(studentProfile);
  // Start: Get all posts
  useEffect(() => getStudentProfile(), []);

  let body = null;

  if (studentsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else {
    body = (
      <>
        <StudentProfile id={id} studentProfile={studentProfile} />
      </>
    );
  }

  return (
    <Container>
      {body}
      {/* After post is added, show toast */}
      {/* <Toast
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
      </Toast> */}
    </Container>
  );
};

export default Profile;
