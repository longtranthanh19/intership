import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

const TableCourseList = () => {
  const history = useHistory();
  const [courseID, setCourseID] = useState("");
  const [wave, setWave] = useState("");

  const handleCourseChange = (value) => {
    setCourseID(value);
  };

  const handleWaveChange = (value) => {
    setWave(value);
  };

  const handleSubmit = () => {
    history.push(`/course/export/${wave}/${courseID}`);
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <Table striped bordered>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "700" }}>Search Course</h4>
              </th>
            </tr>
          </thead>
          <tbody>
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
                    <div style={{ paddingRight: "10px" }}>
                      <FormControl
                        type="search"
                        style={{ width: "100%" }}
                        placeholder="Course Code"
                        aria-label="Search"
                        value={courseID.toUpperCase()}
                        onChange={(e) => handleCourseChange(e.target.value)}
                      />
                    </div>
                    <Button onClick={handleSubmit}>Search</Button>
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
                to="/course/1st Year/Bachelor 4 Year"
                style={{ textDecoration: "none" }}
              >
                First Year - Sciences ( 4 Year Program )
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/course/1st Year/Bachelor"
                style={{ textDecoration: "none" }}
              >
                First Year - Sciences ( 3 Year Program )
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/course/2nd Year/Bachelor"
                style={{ textDecoration: "none" }}
              >
                Second Year
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/course/3rd Year/Bachelor"
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

export default TableCourseList;
