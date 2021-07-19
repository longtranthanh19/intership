import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ResultProfile from "./ResultProfile";
import { Link } from "react-router-dom";

const ResultDetail = ({ results, download, wave, courseCode }) => {
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
  let year = getUnique(results?.map((course) => course.year));
  let levelOfTraining = getUnique(
    results?.map((course) => course.levelOfTraining)
  );
  let major = getUnique(results?.map((course) => course.major));

  return (
    <div>
      <Container>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          RESULTS
        </h1>
        <div>
          <Form className="search-box d-flex justify-content-end">
            <Button variant="primary" onClick={() => download("Result", 600)}>
              Export
            </Button>
            <div style={{ paddingLeft: "10px" }}>
              <Button variant="primary">
                <Link
                  to={`/result/${year}/${levelOfTraining}/${wave}/${major}/${courseName}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Detail
                </Link>
              </Button>
            </div>
          </Form>
        </div>

        <div id="Result">
          <ResultProfile
            results={results}
            wave={wave}
            courseCode={courseCode}
          />
        </div>

        {results?.length === 0 && (
          <h4 className="d-flex justify-content-around">
            No Result Found To Display!
          </h4>
        )}
      </Container>
    </div>
  );
};

export default ResultDetail;
