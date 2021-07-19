import Button from "react-bootstrap/Button";
// import playIcon from '../../assets/play-btn.svg'
import editIcon from "../../../assets/pencil.svg";
import deleteIcon from "../../../assets/trash.svg";
import { Link } from "react-router-dom";
import { CourseContext } from "../../../contexts/CourseContext";
import { useContext } from "react";

const UpdateStudentList = ({ _id }) => {
  const { findCourse, setShowUpdateStudentListModal, getCourseById } =
    useContext(CourseContext);

  const updateCourse = (courseId) => {
    getCourseById(courseId);
    setShowUpdateStudentListModal(true);
  };

  return (
    <>
      <Button className="post-button" onClick={updateCourse.bind(this, _id)}>
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>
    </>
  );
};

export default UpdateStudentList;
