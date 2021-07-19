import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import addIcon from "../../../assets/plus-circle-fill.svg";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import TableCourseList from "./TableCourseList";

import { AuthContext } from "../../../contexts/AuthContext";

const CourseList = ({ setShowAddCourseModal, courses }) => {
  const {
    authState: {
      user: { role },
    },
  } = useContext(AuthContext);

  // Search

  let body = null;

  if (role === "Staff" || role === "Lecturer") {
    body = (
      <div>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH COURSES
        </h1>
        <div style={{ paddingTop: "20px" }}>
          <TableCourseList />
        </div>

        {/* Open Add Post Modal */}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Add New Course !!</Tooltip>}
        >
          <Button
            className="btn-floating"
            onClick={setShowAddCourseModal.bind(this, true)}
          >
            <img src={addIcon} alt="add-post" width="60" height="60" />
          </Button>
        </OverlayTrigger>
      </div>
    );
  } else {
    body = (
      <div>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH COURSES
        </h1>
        <div style={{ paddingTop: "20px" }}>
          <TableCourseList />
        </div>
      </div>
    );
  }
  return <>{body}</>;
};

export default CourseList;
