import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import CourseDetail from "./CourseDetail";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const CourseProfile = ({ course, students, role, download }) => {
  let body = null;
  if (role === "Student") {
    body = (
      <Container>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          Course Detail
        </h1>
        <div id="Check List">
          <CourseDetail course={course} students={students} />
        </div>
      </Container>
    );
  } else {
    body = (
      <Container>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          Course
        </h1>
        <div>
          <Form className="search-box d-flex justify-content-end">
            <Button
              variant="primary"
              onClick={() => download("Check List", 600)}
            >
              Export
            </Button>
            <div style={{ paddingLeft: "10px" }}>
              <Button variant="primary">
                <Link
                  to={`/course/${course?.year}/${course?.program}/${course?.wave}/${course?.department}/${course?.courseName}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Detail
                </Link>
              </Button>
            </div>
          </Form>
        </div>

        <div id="Check List">
          <CourseDetail course={course} students={students} />
        </div>
      </Container>
    );
  }
  return <div>{body}</div>;
};

export default CourseProfile;
