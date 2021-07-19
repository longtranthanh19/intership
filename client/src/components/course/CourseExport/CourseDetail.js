import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table"

const CourseDetail = ({ course, students, role }) => {
    console.log(students)
  return (
    <Container>
      <div
        className="d-flex justify-content-around"
        style={{ padding: "20px", paddingBottom: "30px" }}
      >
        <h3 className="main-title">COURSE ATTENDANCE CHECKLIST</h3>
      </div>
      <div
        className="d-flex justify-content-around"
      >
        <h4>Academic Year: {course?.wave}</h4>
      </div>
      <Container>
        <p style={{ fontWeight: 550 }}>
          Subject:
          <span style={{ fontWeight: 350 }}> {course?.courseName}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Subject Code:
          <span style={{ fontWeight: 350 }}> {course?.courseCode}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Lecturer:
          <span style={{ fontWeight: 350 }}> {course?.lecturerName}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Lecturer ID:
          <span style={{ fontWeight: 350 }}> {course?.lecturerID}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Specialty:
          <span style={{ fontWeight: 350 }}> {course?.department}</span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Year:
          <span style={{ fontWeight: 350 }}> {course?.year}</span>
        </p>
      </Container>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => {
              return (
                <tr style={{ textAlign: "center" }}>
                  <td>{student.studentID}</td>
                  <td>{student.studentName}</td>
                  <td>{student.department}</td>
                </tr>
              );
          })}
          </tbody>
      </Table>
    </Container>
  );
};

export default CourseDetail;
