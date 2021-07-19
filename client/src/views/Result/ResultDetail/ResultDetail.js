import React from "react";
import { ResultContext } from "../../../contexts/ResultContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import ResultDetailInfo from "../../../components/result/ResultDetail/ResultDetailInfo";
import UpdateResultModal from "../../../components/result/UpdateResultModal";
import AddResultModal from "../../../components/result/AddResultModal";
import DeleteResultModal from "../../../components/result/DeleteResultModal";

import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ResultDetail = (props) => {
  const year = props.match.params.year;
  const levelOfTraining = props.match.params.levelOfTraining;
  const wave = props.match.params.wave;
  const major = props.match.params.major;
  const courseName = props.match.params.courseName;

  const {
    authState: {
      user: { userName, role },
    },
  } = useContext(AuthContext);

  const {
    resultState: { result, results, resultsLoading },
    getResultsDetail,
    setShowAddResultModal,
    resultShowToast: { show, message, type },
    setResultShowToast,
  } = useContext(ResultContext);

  useEffect(
    () => getResultsDetail(year, levelOfTraining, wave, major, courseName),
    []
  );
  let body = null;
  if (resultsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (role === "Student") {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH RESULTS
        </h1>
        NO PERMISSION
      </>
    );
  } else if (results.length === 0) {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          RESULTS
        </h1>
        <div>No Course Found To Display!</div>
      </>
    );
  } else {
    body = (
      <>
        <ResultDetailInfo results={results} result={result} />
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

export default ResultDetail;
