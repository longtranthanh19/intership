import Button from "react-bootstrap/Button";
// import playIcon from '../../assets/play-btn.svg'
import editIcon from "../../assets/pencil.svg";
import deleteIcon from "../../assets/trash.svg";
import { ResultContext } from "../../contexts/ResultContext";
import { useContext } from "react";

const ActionButtons = ({ _id }) => {
  const {
    findResult,
    setShowUpdateResultModal,
    setShowDeleteResultModal,
  } = useContext(ResultContext);

  const chooseResult = (resultId) => {
    findResult(resultId);
    setShowUpdateResultModal(true);
  };

  const deletedResult = (resultId) => {
    findResult(resultId);
    setShowDeleteResultModal(true);
  }

  return (
    <>
      <Button className="post-button" onClick={chooseResult.bind(this, _id)}>
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>

      <Button className="post-button" onClick={deletedResult.bind(this, _id)}>
        <img src={deleteIcon} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};

export default ActionButtons;
