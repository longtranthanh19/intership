import { ResultContext } from "../../contexts/ResultContext";
import { StudentContext } from "../../contexts/StudentContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import ProfileResult from "../../components/studentprofile/ProfileResult";
import ResultProfileList from "../../components/studentprofile/ResultProfileList";
import html2pdf from "html2pdf.js";

import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const ResultStudent = () => {
  // Contexts
  const {
    authState: {
      user: { id, userName, role },
    },
  } = useContext(AuthContext);

  const {
    resultState: { resultsLoading, results },
    getResultProfile,
  } = useContext(ResultContext);

  const {
    studentState: { studentLoading, student },
    getStudentProfile,
  } = useContext(StudentContext);

  // Start: Get Result
  useEffect(() => {
    getResultProfile();
    getStudentProfile();
  }, []);

  let body = null;

  const download = (id, ht) => {
    const source = document.getElementById(id);
    console.log(source);
    html2pdf(source, {
      filename: `${student.studentName}-${student.studentID}-${id}.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        margin: 1,
        useCORS: true,
        letterRendering: true,
        scale: 3,
        // height: ht,
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    });
  };

  if (resultsLoading && studentLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (role === "Student" && results.length === 0 && !student) {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          RESULTS
        </h1>
        <div>
          There is no result to display !! Please contact the Staff to update
          your result
        </div>
      </>
    );
  } else if (role === "Staff" || role === "Lecturer") {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          RESULTS
        </h1>
        <div>NO PERMISSION</div>
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

export default ResultStudent;
