import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import ActionButtons from "./ActionButtons";
import Table from "react-bootstrap/Table";

const ProfileResult = ({ data, student, results }) => (
  <Container>
    <div
      className="d-flex justify-content-around"
      style={{ padding: "20px", paddingBottom: "30px" }}
    >
      <h4 className="main-title">TEMPORARY TRANSCRIPT OF RECORDS</h4>
    </div>
    <Container>
      <p style={{ fontWeight: 550 }}>
        Full Name:
        <span style={{ fontWeight: 350 }}> {student?.studentName}</span>
      </p>
      <p style={{ fontWeight: 550 }}>
        Gender:
        <span style={{ fontWeight: 350 }}> {student?.gender}</span>
      </p>
      <p style={{ fontWeight: 550 }}>
        StudentID:
        <span style={{ fontWeight: 350 }}> {student?.studentID}</span>
      </p>
      <p style={{ fontWeight: 550 }}>
        Date of birth:
        <span style={{ fontWeight: 350 }}> {student?.dateOfBirth}</span>
      </p>
      <p style={{ fontWeight: 550 }}>
        Level of Training:
        <span style={{ fontWeight: 350 }}> {student?.levelOfTraining}</span>
      </p>
      <p style={{ fontWeight: 550 }}>
        Type of Training:
        <span style={{ fontWeight: 350 }}> {student?.typeOfTraining}</span>
      </p>
      <p style={{ fontWeight: 550 }}>
        Major:
        <span style={{ fontWeight: 350 }}> {student?.major}</span>
      </p>
      <p style={{ fontWeight: 550 }}>
        Intake:
        <span style={{ fontWeight: 350 }}> {student?.intake}</span>
      </p>
      <p style={{ fontWeight: 550 }}>
        Language:
        <span style={{ fontWeight: 350 }}> English</span>
      </p>
    </Container>
    <Table striped bordered hover>
      <thead>
        <tr style={{ textAlign: "center" }}>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>ECTS Credit</th>
          <th>USTH Grade</th>
          <th>ECTS Grade</th>
          <th>Validation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="7" style={{ textAlign: "center", fontWeight: "700" }}>
            FIRST YEAR
          </td>
        </tr>
        {results?.map((result) => {
          if (result.year === "1st Year")
            return (
              <tr>
                <td>{result.courseCode}</td>
                <td>{result.courseName}</td>
                <td>{result.creditPoints}</td>
                <td>{result.total}</td>
                <td>{result.ectsGrade}</td>
                <td>{result.status}</td>
              </tr>
            );
        })}

        <tr>
          <td colSpan="7" style={{ textAlign: "center", fontWeight: "700" }}>
            SECOND YEAR
          </td>
        </tr>
        {results?.map((result) => {
          if (result.year === "2nd Year") {
            return (
              <>
                <tr>
                  <td>{result.courseCode}</td>
                  <td>{result.courseName}</td>
                  <td>{result.creditPoints}</td>
                  <td>{result.total}</td>
                  <td>{result.ectsGrade}</td>
                  <td>{result.status}</td>
                </tr>
              </>
            );
          }
        })}
        <tr>
          <td colSpan="7" style={{ textAlign: "center", fontWeight: "700" }}>
            THIRD YEAR
          </td>
        </tr>
        {results?.map((result) => {
          if (result.year === "3rd Year")
            return (
              <tr>
                <td>{result.courseCode}</td>
                <td>{result.courseName}</td>
                <td>{result.creditPoints}</td>
                <td>{result.total}</td>
                <td>{result.ectsGrade}</td>
                <td>{result.status}</td>
              </tr>
            );
        })}
      </tbody>
    </Table>
  </Container>
);

export default ProfileResult;
