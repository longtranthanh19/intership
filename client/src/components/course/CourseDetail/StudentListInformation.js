import { useContext } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import UpdateStudentList from "../ActionsButtons/UpdateStudentList";
import ActionButtons from "../../coursestudents/ActionButtons/ActionButtons";

import { AuthContext } from "../../../contexts/AuthContext";
import { resultReducer } from "../../../reducers/resultReducer";
const StudentListInformation = ({ students }) => {
  console.log(students);
  // Contexts
  const {
    authState: {
      user: { role },
    },
  } = useContext(AuthContext);

  let body = null;
  if (students?.length === 0) {
    body = (
      <Card>
        <Card.Body>
          <Card.Text>
            <Row>
              <Col></Col>
              <div style={{ textAlign: "center" }}>
                <span className="main-content-title">
                  Student List Information
                </span>
              </div>
            </Row>

            <hr />
            <div>No Student Found To Display!</div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else if (role === "Staff" || role === "Lecturer") {
    body = (
      <Card>
        <Card.Body>
          <Card.Text>
            <div style={{ textAlign: "center" }}>
              <span className="main-content-title">
                Student List Information
              </span>
            </div>
            <hr />
            <div>
              <Table>
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Full Name</th>
                    <th>StudentID</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {students?.map((student) => {
                    return (
                      <tr>
                        <td>{student.department}</td>
                        <td>{student.studentName}</td>
                        <td>{student.studentID}</td>
                        <td>
                          <ActionButtons _id={student._id} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <hr />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else if (role === "Student") {
    body = (
      <Card>
        <Card.Body>
          <Card.Text>
            <div style={{ textAlign: "center" }}>
              <span className="main-content-title">
                Student List Information
              </span>
            </div>

            <hr />
            <div>
              <Table>
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th>Department</th>
                    <th>StudentID</th>
                    <th>Full Name</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  {students?.map((student) => {
                    return (
                      <tr>
                        <td>{student.department}</td>
                        <td>{student.studentID}</td>
                        <td>{student.studentName}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <hr />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return <>{body}</>;
};

export default StudentListInformation;
