import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const StudentProfile = ({
  student: {
    _id,
    studentID,
    studentName,
    gender,
    dateOfBirth,
    intake,
    email,
    phoneNumber,
    address,
    levelOfTraining,
    typeOfTraining,
    major,
    session,
    wave,
  },
}) => (
  <Card className="shadow">
    <Card.Body>
      <Card.Title>
        <Row>
          <Col>
            <p className="post-title">{studentName}</p>
            <Button variant={"success"} size="sm" disabled>
              {major} {session}
            </Button>
          </Col>
          <Col>
          </Col>
        </Row>
      </Card.Title>
      <Card.Text>
        <span className="main-content-title">ID: </span> {studentID}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Gender: </span> {gender}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">DOB: </span> {dateOfBirth}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Intake: </span> {intake}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Email: </span> {email}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Phone: </span> {phoneNumber}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Address: </span> {address}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Level of Training: </span>{" "}
        {levelOfTraining}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Type of Training: </span>{" "}
        {typeOfTraining}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Wave: </span> {wave}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default StudentProfile;
