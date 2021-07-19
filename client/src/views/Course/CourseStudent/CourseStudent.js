import { CourseContext } from "../../../contexts/CourseContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect } from "react";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

const CourseStudent = () => {
  // Contexts
  const {
    authState: {
      user: { username, id, role },
    },
  } = useContext(AuthContext);

  const {
    courseState: { course, courses, coursesLoading },
    getCourseByStudent,
  } = useContext(CourseContext);

  // Start: Get all posts
  useEffect(() => getCourseByStudent(), []);
  console.log(courses.length)
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
          </Card.Body>
        </Card>
      </>
    );
  } else {
    body = (
      <>
        {courses.map((course) => (
          <div>
            {course.courseName}
          </div>
        ))}
        {/* <CourseProfileList CourseProfile={CourseProfile} courses={courses} /> */}
      </>
    );
  }

  return <Container>{body}</Container>;
};

export default CourseStudent;
