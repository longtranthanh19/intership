import Button from "react-bootstrap/Button";
// import playIcon from '../../assets/play-btn.svg'
import editIcon from "../../assets/pencil.svg";
import deleteIcon from "../../assets/trash.svg";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const ActionButtons = ({ _id }) => {
  const {
    findUser,
    setShowUpdateUserModal,
    setShowDeleteUserModal,
  } = useContext(UserContext);

  const chooseUser = (userId) => {
    findUser(userId);
    setShowUpdateUserModal(true);
  };

  const deletedUser = (studentId) => {
    findUser(studentId);
    setShowDeleteUserModal(true);
  }

  return (
    <>
      <Button className="post-button" onClick={chooseUser.bind(this, _id)}>
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>

      <Button className="post-button" onClick={deletedUser.bind(this, _id)}>
        <img src={deleteIcon} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};

export default ActionButtons;
