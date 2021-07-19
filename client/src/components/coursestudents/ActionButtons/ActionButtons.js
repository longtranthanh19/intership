import Button from "react-bootstrap/Button";
// import playIcon from '../../assets/play-btn.svg'
import editIcon from "../../../assets/pencil.svg";
import deleteIcon from "../../../assets/trash.svg";
import { CourseStudentContext } from "../../../contexts/CourseStudentContext";
import { useContext } from "react";

const ActionButtons = ({ _id }) => {
  const {
    findCourseStudent,
    setShowUpdateCourseStudentModal,
    setShowDeleteCourseStudentModal,
  } = useContext(CourseStudentContext);

  const chooseStudent = (studentId) => {
    findCourseStudent(studentId);
    setShowUpdateCourseStudentModal(true);
  };

  const deletedStudent = (studentId) => {
    findCourseStudent(studentId);
    setShowDeleteCourseStudentModal(true);
  };
  
  return (
    <>
      <Button className="post-button" onClick={chooseStudent.bind(this, _id)}>
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>

      <Button className="post-button" onClick={deletedStudent.bind(this, _id)}>
        <img src={deleteIcon} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};

export default ActionButtons;
