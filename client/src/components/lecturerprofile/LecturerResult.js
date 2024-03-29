import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ActionButtons from "../result/ActionButtons";

const LecturerResult = ({
  result: {
    _id,
    studentID,
    studentName,
    courseCode,
    courseName,
    lecturerID,
    lecturerName,
    year,
    levelofTraining,
    typeofTraining,
    major,
    creditPoints,
    attendance,
    exercises,
    assignment,
    reports,
    midterm,
    final,
    total,
    ectsGrade,
    status,
    date,
    wave,
  },
}) => (
    <Card className="shadow">
    <Card.Body>
      <Card.Title>
        <Row>
          <Col>
            <p className="post-title">{courseName}</p>
            <Button variant={"success"} size="sm" disabled>
              {major} {courseCode}
            </Button>
          </Col>
          <Col className="text-end">
            <ActionButtons _id={_id} />
          </Col>
        </Row>
      </Card.Title>
      <Card.Text>
        <span className="main-content-title">Student Name: </span>{" "}
        {studentName}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Student ID: </span> {studentID}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">LecturerID: </span>{" "}
        {lecturerID}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Lecturer: </span>{" "}
        {lecturerName}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Year: </span>
        {year}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Level of Training: </span>{" "}
        {levelofTraining}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Type of Training: </span>{" "}
        {typeofTraining}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Credit Points: </span>{" "}
        {creditPoints}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title d-flex justify-content-center">
          Evaluation
        </span>
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Attendance: </span>{" "}
        {attendance}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Exercises: </span> {exercises}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Assignments: </span>{" "}
        {assignment}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Reports: </span> {reports}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Midterm: </span> {midterm}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Final: </span> {final}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Total: </span> {total}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">ECTS Grade: </span> {ectsGrade}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Status: </span> {status}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Date: </span> {date}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Wave: </span> {wave}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default LecturerResult;
