import React from "react";
import { ResultContext } from "../../../contexts/ResultContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import TableMajorList from "../../../components/result/TableMajorList/TableMajorList";
import ResultBachelor4 from "../../../components/result/ResultWave/ResultBachelor4";
import ResultBachelor from "../../../components/result/ResultWave/ResultBachelor";

import UpdateResultModal from "../../../components/result/UpdateResultModal";
import AddResultModal from "../../../components/result/AddResultModal";

import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ResultWave = (props) => {
  const year = props.match.params.year;
  const levelOfTraining = props.match.params.levelOfTraining;
  const wave = props.match.params.wave;

  const {
    authState: {
      user: { role },
    },
  } = useContext(AuthContext);

  const {
    resultState: { result, results, resultsLoading },
    getResultsDepartment,
    setShowAddResultModal,
    resultShowToast: { show, message, type },
    setResultShowToast,
  } = useContext(ResultContext);

  useEffect(() => getResultsDepartment(year, levelOfTraining, wave), []);

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
  } else if (levelOfTraining === "Bachelor 4 Year") {
    body = (
      <div>
        <ResultBachelor4
          results={results}
          resultsLoading={resultsLoading}
          year={year}
          levelOfTraining={levelOfTraining}
          wave={wave}
        />
      </div>
    );
  } else if (levelOfTraining === "Bachelor" && year === "1st Year") {
    body = (
      <div>
        <ResultBachelor
          results={results}
          resultsLoading={resultsLoading}
          year={year}
          levelOfTraining={levelOfTraining}
          wave={wave}
        />
      </div>
    );
  } else if (levelOfTraining === "Bachelor") {
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
              {levelOfTraining} {year}
            </span>
          </p>
          <p style={{ fontWeight: 550 }}>
            Wave: <span style={{ fontWeight: 350 }}>{wave}</span>
          </p>
        </div>
        <TableMajorList
          year={year}
          levelOfTraining={levelOfTraining}
          wave={wave}
        />
      </div>
    );
  }

  return (
    <div>
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
    </div>
  );
};

export default ResultWave;
