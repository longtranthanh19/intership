import { useContext } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ActionButtons from "../ActionsButtons/ActionButtons";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const CourseBasicInformation = ({
  course: {
    _id,
    courseCode,
    courseName,
    lecturerID,
    lecturerName,
    year,
    program,
    creditPoints,
    department,
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
    wave,
    status,
  },
}) => {
  // Contexts
  const {
    authState: {
      user: { role },
    },
  } = useContext(AuthContext);

  let body = null;
  if (role === "Staff" || role === "Lecturer") {
    body = (
      <Card className="shadow">
        <Card.Body>
          <Card.Title>
            <Row>
              <Col>
                <p className="post-title" style={{ fontWeight: 550 }}>
                  {courseName}
                </p>
              </Col>
              <Col className="text-end">
                <ActionButtons _id={_id} />
                <Button variant={"success"} size="sm" disabled>
                  {status}
                </Button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text></Card.Text>
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
            {creditPoints} ECTS
          </Card.Text>
          <Card.Text>
            <span className="main-content-title d-flex justify-content-center">
              Description
            </span>
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Time Commitment: </span>
            {timeCommitment} Hour
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Lecture: </span>
            {lecture} Hour
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Tutorial: </span>
            {tutorial} Hour
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Practical: </span>
            {practical} Hour
          </Card.Text>
          <Card.Text>
            <span className="main-content-title d-flex justify-content-center">
              Evaluation
            </span>
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Attendance: </span>
            {attendance}%
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Exercises: </span>
            {exercises}%
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Assignment: </span>
            {assignment}%
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Report: </span>
            {reports}%
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Midterm: </span>
            {midterm}%
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Final: </span>
            {final}%
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else if (role === "Student") {
    body = (
      <Card className="shadow">
        <Card.Body>
          <Card.Title>
            <Row>
              <Col>
                <p className="post-title">{courseName}</p>
              </Col>
              <Col className="text-end">
                <Button variant={"success"} size="sm" disabled>
                  {status}
                </Button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text></Card.Text>
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
            {creditPoints} ECTS
          </Card.Text>
          <Card.Text>
            <span className="main-content-title d-flex justify-content-center">
              Description
            </span>
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Time Commitment: </span>
            {timeCommitment} Hour
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Lecture: </span>
            {lecture} Hour
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Tutorial: </span>
            {tutorial} Hour
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Practical: </span>
            {practical} Hour
          </Card.Text>
          <Card.Text>
            <span className="main-content-title d-flex justify-content-center">
              Evaluation
            </span>
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Attendance: </span>
            {attendance}%
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Exercises: </span>
            {exercises}%
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Assignment: </span>
            {assignment}%
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Report: </span>
            {reports}%
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Midterm: </span>
            {midterm}%
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Final: </span>
            {final}%
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return <>{body} </>;
};

export default CourseBasicInformation;
