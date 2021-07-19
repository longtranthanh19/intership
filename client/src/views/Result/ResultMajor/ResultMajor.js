import React from "react";
import { ResultContext } from "../../../contexts/ResultContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import TableMajorList from "../../../components/result/TableMajorList/TableMajorList";
import ResultBachelor4 from "../../../components/result/ResultWave/ResultBachelor4";
import ResultBachelor from "../../../components/result/ResultWave/ResultBachelor";

import UpdateResultModal from "../../../components/result/UpdateResultModal";
import AddResultModal from "../../../components/result/AddResultModal";
import DeleteResultModal from "../../../components/result/DeleteResultModal";

import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import addIcon from "../../../assets/plus-circle-fill.svg";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ResultMajor = (props) => {
  const year = props.match.params.year;
  const levelOfTraining = props.match.params.levelOfTraining;
  const wave = props.match.params.wave;
  const major = props.match.params.major;

  const {
    authState: {
      user: { userName, role },
    },
  } = useContext(AuthContext);

  const {
    resultState: { result, results, resultsLoading },
    getResultsCourse,
    setShowAddResultModal,
    resultShowToast: { show, message, type },
    setResultShowToast,
  } = useContext(ResultContext);

  useEffect(() => getResultsCourse(year, levelOfTraining, wave, major), []);

  function refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }

  function getUnique(array) {
    var uniqueArray = [];

    // Loop through array values
    for (var value of array) {
      if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value);
      }
    }
    return uniqueArray;
  }

  let courseName = getUnique(results.map((course) => course.courseName));
  let body = null;

  if (role === "Student") {
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
  } else if (resultsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (role === "Staff" || role === "Lecturer") {
    body = (
      <div>
        <h2
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH COURSES
        </h2>
        <div>
          <p style={{ fontWeight: 550 }}>
            Program:{" "}
            <span style={{ fontWeight: 350 }}>
              Bachelor 1 of 3 Year Program{" "}
            </span>
          </p>
          <p style={{ fontWeight: 550 }}>
            Wave: <span style={{ fontWeight: 350 }}>{wave}</span>
          </p>
          <p style={{ fontWeight: 550 }}>
            Major: <span style={{ fontWeight: 350 }}>{major}</span>
          </p>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "550" }}>Course Categories</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {courseName.map((name) => (
              <tr>
                <td>
                  <Link
                    className="d-flex justify-content-around"
                    to={`/result/${year}/${levelOfTraining}/${wave}/${major}/${name}`}
                    style={{ textDecoration: "none" }}
                    onClick={refreshPage}
                  >
                    {name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          {results.length === 0 && (
            <h4 className="d-flex justify-content-around">
              No Course Found To Display!
            </h4>
          )}
        </Table>
        {/* Open Add Post Modal */}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Add New Course !!</Tooltip>}
        >
          <Button
            className="btn-floating"
            onClick={setShowAddResultModal.bind(this, true)}
          >
            <img src={addIcon} alt="add-post" width="60" height="60" />
          </Button>
        </OverlayTrigger>
      </div>
    );
  }
  return (
    <Container>
      {body}
      <AddResultModal />
      {result !== null && <UpdateResultModal />}
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

export default ResultMajor;
