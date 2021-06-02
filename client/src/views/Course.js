import { CourseContext } from "../contexts/CourseContext";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import SingleCourse from "../components/course/SingleCourse";
import UpdateCourseModal from "../components/course/UpdateCourseModal";
import AddCourseModal from "../components/course/AddCourseModal";
import CourseList from "../components/course/CourseList";
import DeleteCourseModal from "../components/course/DeleteCourseModal";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

const Course = () => {
  // Contexts
  const {
    authState: {
      user: { username },
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

  if (coursesLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (courses.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {username}</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to USTH Management System</Card.Title>
            <Card.Text>Click the button below to add new Course !!</Card.Text>
            <Button
              variant="primary"
              onClick={setShowAddCourseModal.bind(this, true)}
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
        <CourseList
          SingleCourse={SingleCourse}
          setShowAddCourseModal={setShowAddCourseModal}
          courses={courses}
        />
      </>
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
