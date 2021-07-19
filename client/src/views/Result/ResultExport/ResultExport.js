import { ResultContext } from "../../../contexts/ResultContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";

import ResultDetail from "../../../components/result/ResultExport/ResultDetail";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/esm/Container";

const ResultExport = (props) => {
  const wave = props.match.params.wave;
  const courseCode = props.match.params.courseCode;

  const {
    authState: {
      user: { userName, role },
    },
  } = useContext(AuthContext);

  const {
    resultState: { result, results, resultsLoading },
    getResultsExport,
    setShowAddResultModal,
    resultShowToast: { show, message, type },
    setResultShowToast,
  } = useContext(ResultContext);

  useEffect(() => getResultsExport(wave, courseCode), []);

  let body = null;

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
  
  let courseName = getUnique(results?.map((course) => course.courseName));

  const download = (id, ht) => {
    const source = document.getElementById(id);
    console.log(source);
    html2pdf(source, {
      filename: `${wave}-${courseName}-${id}.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        useCORS: true,
        letterRendering: true,
        scale: 3,
        height: ht,
      },
      jsPDF: { unit: "pt", format: "A4", orientation: "portrait" },
    });
  };

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
        <ResultDetail results={results} wave={wave} courseCode={courseCode} download={download} />
      </>
    );
  }

  return (
    <div>
      <Container>{body}</Container>
    </div>
  );
};

export default ResultExport;
