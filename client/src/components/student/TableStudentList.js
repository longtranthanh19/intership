import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const TableStudentList = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="4" style={{ textAlign: "center" }}>
              <h4 style={{ fontWeight: "700" }}>Department</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/student/PMAB" style={{ textDecoration: "none" }}>
                PMAB
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/student/AMSN" style={{ textDecoration: "none" }}>
                AMSN
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/student/Energy" style={{ textDecoration: "none" }}>
                Energy
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/student/ICT" style={{ textDecoration: "none" }}>
                ICT
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/student/WEO" style={{ textDecoration: "none" }}>
                WEO
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/student/Space" style={{ textDecoration: "none" }}>
                Space and Application
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/student/MST" style={{ textDecoration: "none" }}>
                MST
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/student/FST" style={{ textDecoration: "none" }}>
                FST
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/student/CHEM" style={{ textDecoration: "none" }}>
                CHEM
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link to="/student/AE" style={{ textDecoration: "none" }}>
                AE
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/student/Applied Math"
                style={{ textDecoration: "none" }}
              >
                Applied Math
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableStudentList;
