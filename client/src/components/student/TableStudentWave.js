import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const TableStudentWave = (major) => {
  function refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="4" style={{ textAlign: "center" }}>
              <h4 style={{ fontWeight: "700" }}>Intake</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to={`/student/${major.major}/Gen 1`}
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Gen 1
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to={`/student/${major.major}/Gen 2`}
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Gen 2
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to={`/student/${major.major}/Gen 3`}
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Gen 3
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to={`/student/${major.major}/Gen 4`}
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Gen 4
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to={`/student/${major.major}/Gen 5`}
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Gen 5
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to={`/student/${major.major}/Gen 6`}
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Gen 6
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to={`/student/${major.major}/Gen 7`}
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Gen 7
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to={`/student/${major.major}/Gen 8`}
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Gen 8
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to={`/student/${major.major}/Gen 9`}
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Gen 9
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to={`/student/${major.major}/Gen 10`}
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Gen 10
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to={`/student/${major.major}/Gen 11`}
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Gen 11
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableStudentWave;
