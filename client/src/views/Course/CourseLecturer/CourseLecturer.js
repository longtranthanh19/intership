import { CourseContext } from "../../../contexts/CourseContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import CourseProfile from "../../../components/lecturerprofile/CourseProfile";
import CourseProfileList from "../../../components/lecturerprofile/CourseProfileList";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

const CourseLecturer = () => {
  // Contexts
  const {
    authState: {
      user: { username, id, role },
    },
  } = useContext(AuthContext);

  const {
    courseState: { course, courses, coursesLoading },
    getCourseByLecturer,
  } = useContext(CourseContext);

  // Start: Get all posts
  useEffect(() => getCourseByLecturer(), []);

  let body = null;

  if (coursesLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (role === "Student" || role === "Staff") {
    body = (
      <>
        You dont have permission
      </>
    );
  } else if (courses.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {username}</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to USTH Management System</Card.Title>
            <Card.Text>Click the button below to add new Course !!</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    body = (
      <>
        <CourseProfileList CourseProfile={CourseProfile} courses={courses} />
      </>
    );
  }

  return <Container>{body}</Container>;
};

export default CourseLecturer;
