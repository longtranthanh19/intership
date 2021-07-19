import { ResultContext } from "../../contexts/ResultContext";
import { StudentContext } from "../../contexts/StudentContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import ProfileResult from "../../components/studentprofile/ProfileResult";
import ResultProfileList from "../../components/studentprofile/ResultProfileList";
import html2pdf from "html2pdf.js";

import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const ResultStudentSearch = (props) => {
  const studentID = props.match.params.studentID;
  // Contexts
  const {
    authState: {
      user: { id, userName, role},
    },
  } = useContext(AuthContext);

  const {
    resultState: { resultsLoading, results },
    getResultStudent,
  } = useContext(ResultContext);

  const {
    studentState: { studentLoading, student },
    getStudentByID,
  } = useContext(StudentContext);

  // Start: Get all posts
  useEffect(() => {
    getResultStudent(studentID);
    getStudentByID(studentID);
  }, []);

  let body = null;

  const download = (id, ht) => {
    const source = document.getElementById(id);
    console.log(source);
    html2pdf(source, {
      filename: `${student.studentName}-${student.studentID}-${id}.pdf`,
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

  if (role === "Student") {
    body = (
      <div className="spinner-container">
        NO PERMISSION
      </div>
    );
  } else if (resultsLoading && studentLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (results.length === 0 && !student) {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          RESULTS
        </h1>
        <div>
          There is no result to display !! Please update the result
        </div>
      </>
    );
  } else {
    body = (
      <>
        <ResultProfileList
          ProfileResult={ProfileResult}
          student={student}
          results={results}
          download={download}
        />
      </>
    );
  }
  return <Container>{body}</Container>;
};

export default ResultStudentSearch;
