import { LecturerContext } from "../contexts/LecturerContext";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import SingleLecturer from "../components/lecturer/SingleLecturer";
import UpdateLecturerModal from "../components/lecturer/UpdateLecturerModal";
import AddLecturerModal from "../components/lecturer/AddLecturerModal";
import LecturerList from "../components/lecturer/LecturerList";
import DeleteLecturerModal from "../components/lecturer/DeleteLecturerModal";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

const Lecturer = () => {
  // Contexts
  const {
    authState: {
      user: { username },
    },
  } = useContext(AuthContext);

  const {
    lecturerState: { lecturer, lecturers, lecturersLoading },
    getLecturers,
    setShowAddLecturerModal,
    lecturerShowToast: { show, message, type },
    setLecturerShowToast,
  } = useContext(LecturerContext);

  // Start: Get all posts
  useEffect(() => getLecturers(), []);

  let body = null;
  if (lecturersLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (lecturers.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {username}</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to USTH Management System</Card.Title>
            <Card.Text>Click the button below to add new Lecturer !!</Card.Text>
            <Button
              variant="primary"
              onClick={setShowAddLecturerModal.bind(this, true)}
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
        <LecturerList
          SingleLecturer={SingleLecturer}
          setShowAddLecturerModal={setShowAddLecturerModal}
          lecturers={lecturers}
        />
      </>
    );
  }

  return (
    <Container>
      {body}
      <AddLecturerModal />
      {lecturer !== null && <UpdateLecturerModal />}
      <DeleteLecturerModal />
      {/* After post is added, show toast */}
      <Toast
        show={show}
        style={{ position: "fixed", top: "7%", right: "10px" }}
        className={`bg-${type} text-white`}
        onClose={setLecturerShowToast.bind(this, {
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

export default Lecturer;
