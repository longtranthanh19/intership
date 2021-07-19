import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import SingleCourse from "./SingleCourse"

const CourseDetailByProgram = ({ courses, program }) => {
  // Search
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(courses);

  console.log(courses);

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setData(courses);
    } else {
      const filteredData = courses.filter((item) => {
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
        {program} Courses
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
        {courses.map((course) => (
          <Col key={course._id} className="my-2">
            <SingleCourse course={course} />
          </Col>
        ))}
        {courses.length === 0 && (
          <h4 className="d-flex justify-content-around">
            No Courses Found To Display!
          </h4>
        )}
      </Row>
    </div>
  );
};

export default CourseDetailByProgram;
