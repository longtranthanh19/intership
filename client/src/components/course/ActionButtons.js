import Button from "react-bootstrap/Button";
// import playIcon from '../../assets/play-btn.svg'
import editIcon from "../../assets/pencil.svg";
import deleteIcon from "../../assets/trash.svg";
import { CourseContext } from "../../contexts/CourseContext";
import { useContext } from "react";

const ActionButtons = ({ _id }) => {
  const {
    findCourse,
    setShowUpdateCourseModal,
    setShowDeleteCourseModal,
  } = useContext(CourseContext);

  const chooseCourse = (couseId) => {
    findCourse(couseId);
    setShowUpdateCourseModal(true);
  };

  const deletedCourse = (couseId) => {
    findCourse(couseId);
    setShowDeleteCourseModal(true);
  }

  return (
    <>
      <Button className="post-button" onClick={chooseCourse.bind(this, _id)}>
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>

      <Button className="post-button" onClick={deletedCourse.bind(this, _id)}>
        <img src={deleteIcon} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};

export default ActionButtons;
