import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const CourseWaveBachelor4 = ({ courses }) => {
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

  let wave = getUnique(courses.map((course) => course.wave));
  return (
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
          <span style={{ fontWeight: 350 }}>Bachelor 1 of 4 Year Program </span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Wave: <span style={{ fontWeight: 350 }}>{wave}</span>
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
          {courses.map((course) => (
            <tr>
              <td>
                <Link
                  className="d-flex justify-content-around"
                  to={`/course/${course.year}/${course.program}/${course.wave}/${course.department}/${course.courseName}`}
                  style={{ textDecoration: "none" }}
                >
                  {course.courseName}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        {courses.length === 0 && (
          <h4 className="d-flex justify-content-around">
            No Course Found To Display!
          </h4>
        )}
      </Table>
      {courses.length === 0 && (
        <h4 className="d-flex justify-content-around">
          No Course Found To Display!
        </h4>
      )}
    </div>
  );
};

export default CourseWaveBachelor4;
