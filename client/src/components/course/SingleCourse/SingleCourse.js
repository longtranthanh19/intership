import { useContext } from "react";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ActionButtons from "../ActionsButtons/ActionButtons";

import { AuthContext } from "../../../contexts/AuthContext";

const SingleCourse = ({
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
    wave,
    status,
    studentList,
  },
}) => {
  // Contexts
  const {
    authState: {
      user: { role },
    },
  } = useContext(AuthContext);

  let body = null;
  if (role === "Staff") {
    body = (
      <Card className="shadow">
        <Card.Body>
          <Card.Title>
            <Row>
              <Col>
                <p className="post-title">{year}</p>
                <Button variant={"success"} size="sm" disabled>
                  {department}
                </Button>
              </Col>
              <Col className="text-end">
                <Link to={`/courseById/${_id}`}>Course</Link>
                <Button variant={"success"} size="sm" disabled>
                  {status}
                </Button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text>
            <span className="main-content-title">Lecturer: </span>
            {lecturerName}
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
        </Card.Body>
      </Card>
    );
  }
  return <>{body}</>;
};

export default SingleCourse;
