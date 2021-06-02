import { ResultContext } from "../contexts/ResultContext";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import SingleResult from "../components/result/SingleResult";
import UpdateResultModal from "../components/result/UpdateResultModal";
import AddResultModal from "../components/result/AddResultModal";
import ResultList from "../components/result/ResultList";
import DeleteResultModal from "../components/result/DeleteResultModal";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

const Lecturer = () => {
  // Contexts
  const {
    authState: {
      user: { username },
    },
  } = useContext(AuthContext);

  const {
    resultState: { result, results, resultsLoading },
    getResults,
    setShowAddResultModal,
    resultShowToast: { show, message, type },
    setResultShowToast,
  } = useContext(ResultContext);

  // Start: Get all posts
  useEffect(() => getResults(), []);

  let body = null;
  if (resultsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (results.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {username}</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to USTH Management System</Card.Title>
            <Card.Text>Click the button below to add new Result !!</Card.Text>
            <Button
              variant="primary"
              onClick={setShowAddResultModal.bind(this, true)}
            >
              Add
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    body = (
      <>
        <ResultList
          SingleResult={SingleResult}
          setShowAddResultModal={setShowAddResultModal}
          results={results}
        />
      </>
    );
  }

  return (
    <Container>
      {body}
      <AddResultModal />
      {result !== null && <UpdateResultModal />}
      <DeleteResultModal />
      {/* After post is added, show toast */}
      <Toast
        show={show}
        style={{ position: "fixed", top: "7%", right: "10px" }}
        className={`bg-${type} text-white`}
        onClose={setResultShowToast.bind(this, {
          show: false,
          message: "",
          type: null,
        })}
        delay={4000}
        autohide
      >
        <Toast.Body>
          <strong>{message}</strong>
        </Toast.Body>
      </Toast>
    </Container>
  );
};

export default Lecturer;
