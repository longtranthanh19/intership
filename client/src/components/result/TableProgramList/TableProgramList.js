import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

const TableProgramList = () => {
  const history = useHistory();
  const [studentID, setStudentID] = useState("");
  const [wave, setWave] = useState("");
  const [courseCode, setCourseCode] = useState("");

  const handleChange = (value) => {
    setStudentID(value);
  };

  const handleWaveChange = (value) => {
    setWave(value);
  };

  const handleCourseCodeChange = (value) => {
    setCourseCode(value);
  };

  const handleSubmit = () => {
    history.push(`/result/${studentID}`);
  };

  const handleResultSubmit = () => {
    history.push(`/result/export/${wave}/${courseCode}`);
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <Table striped bordered>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "700" }}>Search Results</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Container>
                  <Form className="search-box d-flex justify-content-end">
                    <FormControl
                      type="search"
                      style={{ width: "30%" }}
                      placeholder="StudentID"
                      aria-label="Search"
                      value={studentID.toUpperCase()}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                    <div style={{ paddingLeft: "10px" }}>
                      <Button onClick={handleSubmit}>Search</Button>
                    </div>
                  </Form>
                </Container>
              </td>
            </tr>
            <tr>
              <td>
                <Container>
                  <Form className="search-box d-flex justify-content-end">
                    <div style={{ paddingRight: "10px" }}>
                      <FormControl
                        type="search"
                        style={{ width: "100%" }}
                        placeholder="Wave"
                        aria-label="Search"
                        value={wave.toUpperCase()}
                        onChange={(e) => handleWaveChange(e.target.value)}
                      />
                    </div>
                    <div>
                      <FormControl
                        type="search"
                        style={{ width: "100%" }}
                        placeholder="Course Code"
                        aria-label="Search"
                        value={courseCode.toUpperCase()}
                        onChange={(e) => handleCourseCodeChange(e.target.value)}
                      />
                    </div>
                    <div style={{ paddingLeft: "10px" }}>
                      <Button onClick={handleResultSubmit}>Search</Button>
                    </div>
                  </Form>
                </Container>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="4" style={{ textAlign: "center" }}>
              <h4 style={{ fontWeight: "700" }}>Bachelor</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/result/1st Year/Bachelor 4 Year"
                style={{ textDecoration: "none" }}
              >
                First Year - Sciences ( 4 Year Program )
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/result/1st Year/Bachelor"
                style={{ textDecoration: "none" }}
              >
                First Year - Sciences ( 3 Year Program )
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/result/2nd Year/Bachelor"
                style={{ textDecoration: "none" }}
              >
                Second Year
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/result/3rd Year/Bachelor"
                style={{ textDecoration: "none" }}
              >
                Third Year
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TableProgramList;
