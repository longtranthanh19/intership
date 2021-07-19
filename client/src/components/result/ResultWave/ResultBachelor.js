import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const ResultBachelor = ({
  results,
  resultsLoading,
  year,
  levelOfTraining,
  wave,
}) => {
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

  if (resultsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else {
    body = (
      <div>
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
                    to={`/result/${year}/${levelOfTraining}/${wave}/SCIENCE/${name}`}
                    style={{ textDecoration: "none" }}
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
      </div>
    );
  }
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
          <span style={{ fontWeight: 350 }}>Bachelor 1 of 3 Year Program </span>
        </p>
        <p style={{ fontWeight: 550 }}>
          Wave: <span style={{ fontWeight: 350 }}>{wave}</span>
        </p>
      </div>
      {body}
    </div>
  );
};

export default ResultBachelor;
