import { useContext } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ActionButtons from "./ActionButtons";

import { AuthContext } from "../../contexts/AuthContext";

const SingleStudent = ({
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
                <p className="post-title">{studentName}</p>
                <Button variant={"success"} size="sm" disabled>
                  {major} {session}
                </Button>
              </Col>
              <Col className="text-end">
                <ActionButtons _id={_id} />
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
            <span className="main-content-title">Date of Birth: </span> {dateOfBirth}
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
            <span className="main-content-title">Level of Training: </span> {levelOfTraining}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Type of Training: </span> {typeOfTraining}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Wave: </span> {wave}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    body = (
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
            </Row>
          </Card.Title>
          <Card.Text>
            <span className="main-content-title">ID: </span> {studentID}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Gender: </span> {gender}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Date of Birth: </span> {dateOfBirth}
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
            <span className="main-content-title">Level of Training: </span> {levelOfTraining}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Type of Training: </span> {typeOfTraining}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Wave: </span> {wave}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return <>{body}</>;
};

export default SingleStudent;
