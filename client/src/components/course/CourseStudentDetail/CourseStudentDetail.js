import { useContext } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { AuthContext } from "../../contexts/AuthContext";

const CourseStudentDetail = ({
  course: {
    _id,
    courseCode,
    courseName,
    lecturerID,
    lecturerName,
    year,
    program,
    department,
    creditPoints,
    timeCommitment,
    lecture,
    tutorial,
    practical,
    attendance,
    exercises,
    assignment,
    reports,
    midterm,
    final,
    studentList,
  },
}) => {
  // Contexts
  const {
    authState: {
      user: { username, role },
    },
  } = useContext(AuthContext);

  let body = null;
  if (role === "Lecturer") {
    body = (
      <Card className="shadow">
        <Card.Body>
          <Card.Title>
            <Row>
              <Col>
                <p className="post-title">{courseName}</p>
                <Button variant={"success"} size="sm" disabled>
                  {department}
                </Button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text>
            <span className="main-content-title">Lecturer: </span>
            {lecturerName}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Lecturer Code: </span>
            {lecturerID}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Course Code: </span>
            {courseCode}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Year: </span>
            {year}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Program: </span>
            {program}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Credit Point: </span>
            {creditPoints}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title d-flex justify-content-center">
              Description{" "}
            </span>
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Time Commitment: </span>
            {timeCommitment}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Lecture: </span>
            {lecture}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Tutorial: </span>
            {tutorial}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Practical: </span>
            {practical}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title d-flex justify-content-center">
              Evaluation{" "}
            </span>
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Attendance: </span>
            {attendance}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Exercises: </span>
            {exercises}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Assignment: </span>
            {assignment}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Report: </span>
            {reports}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Midterm: </span>
            {midterm}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Final: </span>
            {final}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Student List: </span>
            <hr />
            {studentList.map((list) => (
              <div>
                <Card.Text>
                  <span className="main-content-title">Student Name: </span>
                  {list.studentName}
                </Card.Text>
                <Card.Text>
                  <span className="main-content-title">StudentID: </span>
                  {list.studentID}
                </Card.Text>
                <hr />
              </div>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return <>{body}</>;
};

export default CourseStudentDetail;
