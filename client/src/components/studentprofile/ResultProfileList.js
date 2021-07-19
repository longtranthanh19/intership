import React, { useState, useContext, useEffect } from "react";

import { StudentContext } from "../../contexts/StudentContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ResultProfileList = ({ ProfileResult, student, results, download }) => {
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
            <Button
              variant="primary"
              onClick={() => download("Result")}
            >
              Export
            </Button>
          </Form>
        </div>

        <div id="Result">
          <ProfileResult results={results} student={student}/>
        </div>

        {results.length === 0 && (
          <h4 className="d-flex justify-content-around">
            No Result Found To Display!
          </h4>
        )}
      </Container>
    </div>
  );
};

export default ResultProfileList;
