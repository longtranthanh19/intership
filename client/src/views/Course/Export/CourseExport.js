import { CourseContext } from "../../../contexts/CourseContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { CourseStudentContext } from "../../../contexts/CourseStudentContext";
import { useContext, useEffect } from "react";
import CourseProfile from "../../../components/course/CourseExport/CourseProfile";
import html2pdf from "html2pdf.js";

import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
const CourseExport = (props) => {
  const wave = props.match.params.wave;
  const courseCode = props.match.params.courseCode;

  const {
    authState: {
      user: { id, userName, role },
    },
  } = useContext(AuthContext);

  const {
    courseState: { course, courseLoading },
    getCourseToExport,
  } = useContext(CourseContext);

  const {
    studentCourseState: { student, students, studentsLoading },
    getExportCourseStudents,
  } = useContext(CourseStudentContext);

  useEffect(() => {
    getCourseToExport(wave, courseCode);
    getExportCourseStudents(wave, courseCode);
  }, []);

  const download = (id, ht) => {
    const source = document.getElementById(id);
    console.log(source);
    html2pdf(source, {
      filename: `${course.courseName}-${course.wave}-${id}.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        useCORS: true,
        letterRendering: true,
        scale: 3,
        height: ht,
      },
      jsPDF: { unit: "pt", format: "A4", orientation: "portrait" },
    });
  };

  let body = null;
  if (students.length === 0 && !course) {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          RESULTS
        </h1>
        <div>No Course Found To Display !!</div>
      </>
    );
  } else {
    body = (
      <>
        <CourseProfile
          course={course}
          students={students}
          role={role}
          download={download}
        />
      </>
    );
  }
  return <>{body}</>;
};

export default CourseExport;
