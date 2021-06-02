import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import addIcon from "../../assets/plus-circle-fill.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const StudentList = ({ SingleStudent, setShowAddStudentModal, students }) => {
  // Search
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(students);

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setData(students);
    } else {
      const filteredData = students.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setData(filteredData);
    }
  };

  return (
    <div>
      <h1 className="main-title d-flex justify-content-around" style={{ padding: "10px" }}>
        USTH STUDENT
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
        <Button variant="outline-success">Search</Button>
      </Form>

      <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
        {data.map((student) => (
          <Col key={student._id} className="my-2">
            <SingleStudent student={student} />
          </Col>
        ))}
        {data.length === 0 && (
          <h4 className="d-flex justify-content-around">
            No Student Found To Display!
          </h4>
        )}
      </Row>

      {/* Open Add Post Modal */}
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip>Add New Student !!</Tooltip>}
      >
        <Button
          className="btn-floating"
          onClick={setShowAddStudentModal.bind(this, true)}
        >
          <img src={addIcon} alt="add-post" width="60" height="60" />
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default StudentList;
