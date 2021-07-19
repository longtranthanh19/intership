import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const TableLecturerList = () => {
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
              <h4 style={{ fontWeight: "700" }}>Department</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/lecturer/PMAB"
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                PMAB
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/lecturer/AMSN"
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                AMSN
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/lecturer/Energy"
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Energy
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/lecturer/ICT"
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                ICT
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/lecturer/WEO"
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                WEO
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/lecturer/Space"
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                Space and Application
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/lecturer/MST"
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                MST
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/lecturer/FST"
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                FST
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/lecturer/CHEM"
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                CHEM
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/lecturer/AE"
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
              >
                AE
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <Link
                to="/lecturer/Applied Math"
                style={{ textDecoration: "none" }}
                onClick={refreshPage}
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

export default TableLecturerList;
