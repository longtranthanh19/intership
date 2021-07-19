import React from "react";
import Table from "react-bootstrap/Table";
import ActionButtons from "../ActionButtons";

const ResultTableInfo = ({ data }) => {
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

  let courseName = getUnique(data.map((course) => course.courseName));
  let courseCode = getUnique(data.map((course) => course.courseCode));
  let lecturerName = getUnique(data.map((course) => course.lecturerName));
  let lecturerID = getUnique(data.map((course) => course.lecturerID));
  let major = getUnique(data.map((course) => course.major));
  let year = getUnique(data.map((course) => course.year));
  let wave = getUnique(data.map((course) => course.wave));
  let creditPoints = getUnique(data.map((course) => course.creditPoints));
  let date = getUnique(data.map((course) => course.date));
  
  return (
    <>
      <div>
        <p style={{ fontWeight: 550 }}>
          Subject: <span style={{ fontWeight: 350 }}> {courseName}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Subject Code: <span style={{ fontWeight: 350 }}> {courseCode}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Lecturer: <span style={{ fontWeight: 350 }}> {lecturerName}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Lecturer ID: <span style={{ fontWeight: 350 }}> {lecturerID}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Major: <span style={{ fontWeight: 350 }}> {major}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Year: <span style={{ fontWeight: 350 }}> {year}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Credit Points:{" "}
          <span style={{ fontWeight: 350 }}> {creditPoints}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Date: <span style={{ fontWeight: 350 }}> {date}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Wave: <span style={{ fontWeight: 350 }}> {wave}</span>
        </p>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            {/* <th>No</th> */}
            <th>Student ID</th>
            <th>Full Name</th>
            <th>Attendance</th>
            <th>Exercises</th>
            <th>Assignment</th>
            <th>Reports</th>
            <th>Midterm</th>
            <th>Final</th>
            <th>Total</th>
            <th>ECT Grade</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((result) => {
            return (
              <>
                <tr style={{ textAlign: "center" }}>
                  <td>{result.studentID}</td>
                  <td>{result.studentName}</td>
                  <td>{result.attendance}</td>
                  <td>{result.exercises}</td>
                  <td>{result.assignment}</td>
                  <td>{result.reports}</td>
                  <td>{result.midterm}</td>
                  <td>{result.final}</td>
                  <td>{result.total}</td>
                  <td>{result.ectsGrade}</td>
                  <td>{result.status}</td>
                  <td>
                    <ActionButtons _id={result._id} />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ResultTableInfo;
