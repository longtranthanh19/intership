import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const TableUserRole = () => {
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
              <h4 style={{ fontWeight: "700" }}>User Categories</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/user/Student" style={{ textDecoration: "none" }} onClick={refreshPage}>
                Student
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/user/Lecturer" style={{ textDecoration: "none" }} onClick={refreshPage}>
                Lecturer
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/user/Staff" style={{ textDecoration: "none" }} onClick={refreshPage}>
                Staff
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableUserRole;
