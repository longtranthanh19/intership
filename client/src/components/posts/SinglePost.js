import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ActionButtons from './ActionButtons'

const SinglePost = ({ post: { _id, status, title, description, url } }) => (
  <Card
    className="shadow"
    border={
      status === "DONE"
        ? "success"
        : status === "DOING"
        ? "warning"
        : "danger"
    }
  >
    <Card.Body>
      <Card.Title>
        <Row>
          <Col>
            <p className="post-title">{title}</p>
            <Button
              pill
              variant={
                status === "DONE"
                  ? "success"
                  : status === "DOING"
                  ? "warning"
                  : "danger"
              }
              size="sm"
              disabled
            >
              {status}
            </Button>
          </Col>
          <Col className="text-end">
            <ActionButtons _id={_id} />
          </Col>
        </Row>
      </Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default SinglePost;
