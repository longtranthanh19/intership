import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import ActionButtons from "./ActionButtons";

const StudentProfile = ({
  studentProfile: {
    // _id,
    studentID,
    studentName,
    gender,
    dateOfBirth,
    dateOfAdmission,
    email,
    phoneNumber,
    address,
    department,
    session,
  },
}) => (
  <Card className="shadow">
    <Card.Body>
      <Card.Title>
        <Row>
          <Col>
            <p className="post-title">{studentName}</p>
            <Button variant={"success"} size="sm" disabled>
              {department} {session}
            </Button>
          </Col>
          {/* <Col className="text-end">
            <ActionButtons _id={_id} />
          </Col> */}
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
        <span className="main-content-title">Date Of Admission </span>{" "}
        {dateOfAdmission}
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

export default StudentProfile;
