import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const LecturerResultList = ({ LecturerResult, id, results }) => {
  // Search
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(results);

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setData(results);
    } else {
      const filteredData = results.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setData(filteredData);
    }
  };

  return (
    <div>
      <h1
        className="main-title d-flex justify-content-around"
        style={{ padding: "10px" }}
      >
       RESULTS
      </h1>
      <Form className="search-box d-flex justify-content-end">
        <FormControl
          type="search"
          placeholder="Search"
          className="search-form"
          aria-label="Search"
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Form>

      <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
        {data.map((result) => (
          <Col key={result._id} className="my-2">
            <LecturerResult id={id} result={result} />
          </Col>
        ))}
        {data.length === 0 && (
          <h4 className="d-flex justify-content-around">
            No Result Found To Display!
          </h4>
        )}
      </Row>
    </div>
  );
};

export default LecturerResultList;
