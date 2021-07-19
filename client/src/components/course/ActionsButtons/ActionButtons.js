import Button from "react-bootstrap/Button";
import editIcon from "../../../assets/pencil.svg";
import deleteIcon from "../../../assets/trash.svg";
import { Link } from "react-router-dom";
import { CourseContext } from "../../../contexts/CourseContext";
import { useContext } from "react";

const ActionButtons = ({ _id }) => {
  const {
    setShowUpdateCourseModal,
    setShowDeleteCourseModal,
    getCourseById,
  } = useContext(CourseContext);

  const updateCourse = (courseId) => {
    getCourseById(courseId);
    setShowUpdateCourseModal(true);
  };

  const deletedCourse = (courseId) => {
    getCourseById(courseId);
    setShowDeleteCourseModal(true);
  };

  return (
    <>
      <Button className="post-button" onClick={updateCourse.bind(this, _id)}>
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>

      <Button className="post-button" onClick={deletedCourse.bind(this, _id)}>
        <img src={deleteIcon} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};

export default ActionButtons;
