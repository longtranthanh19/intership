import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActionButtons from "./ActionButtons";

const SingleUser = ({ user: { _id, username, password, userName, role } }) => (
  <Card className="shadow">
    <Card.Body>
      <Card.Title>
        <Row>
          <Col>
            <p className="post-title">{userName}</p>
          </Col>
          <Col className="text-end">
            <ActionButtons _id={_id} />
          </Col>
        </Row>
      </Card.Title>
      <Card.Text>
        <span className="main-content-title">Username : </span> {username}
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Password : </span>{" "}
        <p type="password" style={{ display: "none" }}>
          {password}
        </p>
      </Card.Text>
      <Card.Text>
        <span className="main-content-title">Role : </span> {role}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default SingleUser;
