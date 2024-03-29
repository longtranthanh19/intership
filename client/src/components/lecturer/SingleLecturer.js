import { useContext } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ActionButtons from "./ActionButtons";

import { AuthContext } from "../../contexts/AuthContext";

const SingleLecturer = ({
  lecturer: {
    _id,
    lecturerID,
    lecturerName,
    gender,
    dateOfBirth,
    degree,
    email,
    phoneNumber,
    address,
    department,
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
                <p className="post-title">{lecturerName}</p>
                <Button variant={"success"} size="sm" disabled>
                  {department}
                </Button>
              </Col>
              <Col className="text-end">
                <ActionButtons _id={_id} />
              </Col>
            </Row>
          </Card.Title>
          <Card.Text>
            <span className="main-content-title">ID: </span>
            {lecturerID}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Gender: </span> {gender}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">DOB: </span> {dateOfBirth}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Degree: </span> {degree}
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
                <p className="post-title">{lecturerName}</p>
                <Button variant={"success"} size="sm" disabled>
                  {department}
                </Button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text>
            <span className="main-content-title">ID: </span>
            {lecturerID}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Gender: </span> {gender}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">DOB: </span> {dateOfBirth}
          </Card.Text>
          <Card.Text>
            <span className="main-content-title">Degree: </span> {degree}
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
        </Card.Body>
      </Card>
    );
  }
  return (
    <>{body}</>
  );
};

export default SingleLecturer;
