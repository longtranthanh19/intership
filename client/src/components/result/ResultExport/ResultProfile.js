import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const ResultProfile = ({ results, wave, courseCode }) => {
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
  let major = getUnique(results?.map((course) => course.major));
  let year = getUnique(results?.map((course) => course.year));

  return (
    <Container>
      <div
        className="d-flex justify-content-around"
        style={{ padding: "20px", paddingBottom: "30px" }}
      >
        <h3 className="main-title">OVERALL RESULT REPORT</h3>
      </div>
      <div className="d-flex justify-content-around">
        <h4>Academic Year: {wave}</h4>
      </div>
      <Container>
        <p style={{ fontWeight: 550 }}>
          Subject:
          <span style={{ fontWeight: 350 }}> {courseName}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Subject Code:
          <span style={{ fontWeight: 350 }}> {courseCode}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Specialty: <span style={{ fontWeight: 350 }}>{major}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Year: <span style={{ fontWeight: 350 }}>{year}</span>
        </p>
      </Container>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>StudentID</th>
            <th>Student Name</th>
            <th>Attendance</th>
            <th>Exercises</th>
            <th>Assignment</th>
            <th>Reports</th>
            <th>Midterm</th>
            <th>Final</th>
            <th>Total</th>
            <th>ECT Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results?.map((result) => {
            return (
              <tr>
                <td>{result.studentID}</td>
                <td>{result.studentName}</td>
                <td>{result.attendance}</td>
                <td>{result.exercise}</td>
                <td>{result.assignment}</td>
                <td>{result.reports}</td>
                <td>{result.midterm}</td>
                <td>{result.final}</td>
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
};

export default ResultProfile;
