import Button from "react-bootstrap/Button";
import editIcon from "../../assets/pencil.svg";
import deleteIcon from "../../assets/trash.svg";
import { LecturerContext } from "../../contexts/LecturerContext";
import { useContext } from "react";

const ActionButtons = ({ _id }) => {
  const {
    findLecturer,
    setShowUpdateLecturerModal,
    setShowDeleteLecturerModal,
  } = useContext(LecturerContext);

  const chooseLecturer = (lecturerId) => {
    findLecturer(lecturerId);
    setShowUpdateLecturerModal(true);
  };

  const deletedLecturer = (lecturerId) => {
    findLecturer(lecturerId);
    setShowDeleteLecturerModal(true);
  }

  return (
    <>
      <Button className="post-button" onClick={chooseLecturer.bind(this, _id)}>
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>

      <Button className="post-button" onClick={deletedLecturer.bind(this, _id)}>
        <img src={deleteIcon} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};

export default ActionButtons;
