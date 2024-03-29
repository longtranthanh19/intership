import { PostContext } from "../../contexts/PostContext";
import { AuthContext } from "../../contexts/AuthContext";
import SinglePost from "../../components/posts/SinglePost";
import UpdatePostModal from "../../components/posts/UpdatePostModal";
import AddPostModal from "../../components/posts/AddPostModal";
import DeletePostModal from "../../components/posts/DeletePostModal";

import studentImg from "../../assets/student.jpg";
import courseImg from "../../assets/course.jpg";
import resultImg from "../../assets/result.jpg";
import lecturerImg from "../../assets/lecturer.jpg";
import addIcon from "../../assets/plus-circle-fill.svg";
import Calendar from "../Calendar/Calendar";
import { useContext, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

const Dashboard = () => {
  // Contexts
  const {
    authState: {
      user: { userName, role },
    },
  } = useContext(AuthContext);

  const {
    postState: { post, posts, postsLoading },
    getPosts,
    setShowAddPostModal,
    showToast: { show, message, type },
    setShowToast,
  } = useContext(PostContext);

  // Start: Get all posts
  useEffect(() => getPosts(), []);

  let body = null;

  if (postsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (posts.length === 0) {
    body = (
      <>
        <Container>
          <h1
            className="main-title d-flex justify-content-around"
            style={{ padding: "10px" }}
          >
            DASHBOARD
          </h1>
          <Card className="text-center mx-5 my-5">
            <Card.Header as="h3">
              Hi, {role} {userName}
            </Card.Header>
            <Card.Body>
              <Card.Title>Welcome to USTH Result Management</Card.Title>
              <Card.Text>Click the button below to add your todo tasks</Card.Text>
              <Button
                variant="primary"
                onClick={setShowAddPostModal.bind(this, true)}
              >
                Add Tasks
              </Button>
            </Card.Body>
          </Card>
          <Calendar />
        </Container>
      </>
    );
  } else {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          DASHBOARD
        </h1>
        <h2 className="sub-title d-flex justify-content-around">To-dos List</h2>
        <Container>
          <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
            {posts.map((post) => (
              <Col key={post._id} className="my-2">
                <SinglePost post={post} />
              </Col>
            ))}
          </Row>
          <Calendar />
        </Container>
        {/* Open Add Post Modal */}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Add New Task !!</Tooltip>}
        >
          <Button
            className="btn-floating"
            onClick={setShowAddPostModal.bind(this, true)}
          >
            <img src={addIcon} alt="add-post" width="60" height="60" />
          </Button>
        </OverlayTrigger>
      </>
    );
  }

  return (
    <>
      {body}
      <AddPostModal />
      {post !== null && <UpdatePostModal />}
      <DeletePostModal />
      {/* After post is added, show toast */}
      <Toast
        show={show}
        style={{ position: "fixed", top: "7%", right: "10px" }}
        className={`bg-${type} text-white`}
        onClose={setShowToast.bind(this, {
          show: false,
          message: "",
          type: null,
        })}
        delay={3000}
        autohide
      >
        <Toast.Body>
          <strong>{message}</strong>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default Dashboard;
