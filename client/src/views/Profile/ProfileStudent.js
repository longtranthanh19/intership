import { StudentContext } from "../../contexts/StudentContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import StudentProfile from "../../components/studentprofile/StudentProfile";

import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const ProfileStudent = () => {
  // Contexts
  const {
    authState: {
      user: { id, role, userName },
    },
  } = useContext(AuthContext);

  const {
    studentState: { studentLoading, student },
    getStudentProfile,
  } = useContext(StudentContext);

  // Start: Get student
  useEffect(() => getStudentProfile(), []);

  let body = null;

  if (studentLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (!student) {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          PROFILE
        </h1>
        <div>
          There is no profile to display !! Please contact the Staff to update
          your profile
        </div>
      </>
    );
  } else {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          PROFILE
        </h1>
        <StudentProfile id={id} student={student} />
      </>
    );
  }

  return <Container>{body}</Container>;
};

export default ProfileStudent;
