import React, { useState, useContext } from "react";

import ResultTableInfo from "./ResultTableInfo";

import { AuthContext } from "../../../contexts/AuthContext";
import { ResultContext } from "../../../contexts/ResultContext";

import UpdateResultModal from "../../../components/result/UpdateResultModal";
import AddResultModal from "../../../components/result/AddResultModal";
import DeleteResultModal from "../../../components/result/DeleteResultModal";

import { Link } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import addIcon from "../../../assets/plus-circle-fill.svg";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ResultDetailInfo = ({ results, result }) => {
  const {
    authState: {
      user: { id, userName, role },
    },
  } = useContext(AuthContext);

  const {
    getResults,
    setShowAddResultModal,
    resultShowToast: { show, message, type },
    setResultShowToast,
  } = useContext(ResultContext);
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

  let wave = getUnique(results.map((course) => course.wave));
  let courseCode = getUnique(results.map((course) => course.courseCode));

  let body = null;
  if (role === "Staff" || role === "Lecturer") {
    body = (
      <div>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          RESULTS
        </h1>
        <div
          className="main-title d-flex justify-content-end"
          style={{ paddingRight: "20px" }}
        >
          <Button>
            <Link to={`/result/export/${wave}/${courseCode}`} style={{ textDecoration: "none", color: "white" }}>
              Export
            </Link>
          </Button>
        </div>
        <div>
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
        </div>

        <div>
          <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
            <ResultTableInfo data={data} />
            {data.length === 0 && (
              <h4 className="d-flex justify-content-around">
                No Result Found To Display!
              </h4>
            )}
          </Row>
        </div>
        {/* Open Add Post Modal */}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Add New Result !!</Tooltip>}
        >
          <Button
            className="btn-floating"
            onClick={setShowAddResultModal.bind(this, true)}
          >
            <img src={addIcon} alt="add-post" width="60" height="60" />
          </Button>
        </OverlayTrigger>
      </div>
    );
  } else if (role === "Student") {
    body = (
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

        <div>
          <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
            <ResultTableInfo data={data} />
            {data.length === 0 && (
              <h4 className="d-flex justify-content-around">
                No Result Found To Display!
              </h4>
            )}
          </Row>

          <AddResultModal />
          {result !== null && <UpdateResultModal />}
          <DeleteResultModal />
          {/* After post is added, show toast */}
          <Toast
            show={show}
            style={{ position: "fixed", top: "7%", right: "10px" }}
            className={`bg-${type} text-white`}
            onClose={setResultShowToast.bind(this, {
              show: false,
              message: "",
              type: null,
            })}
            delay={4000}
            autohide
          >
            <Toast.Body>
              <strong>{message}</strong>
            </Toast.Body>
          </Toast>
        </div>
      </div>
    );
  }
  return (
    <Container>
      {body}
      <AddResultModal />
      {result !== null && <UpdateResultModal />}
      <DeleteResultModal />
      {/* After post is added, show toast */}
      <Toast
        show={show}
        style={{ position: "fixed", top: "7%", right: "10px" }}
        className={`bg-${type} text-white`}
        onClose={setResultShowToast.bind(this, {
          show: false,
          message: "",
          type: null,
        })}
        delay={4000}
        autohide
      >
        <Toast.Body>
          <strong>{message}</strong>
        </Toast.Body>
      </Toast>
    </Container>
  );
};

export default ResultDetailInfo;
