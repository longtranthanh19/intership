import Button from "react-bootstrap/Button";
import playIcon from "../../assets/play-btn.svg";
import editIcon from "../../assets/pencil.svg";
import deleteIcon from "../../assets/trash.svg";
import { PostContext } from "../../contexts/PostContext";
import { useContext } from "react";

const ActionButtons = ({ _id }) => {
  const { findPost, setShowUpdatePostModal, setShowDeletePostModal } =
    useContext(PostContext);

  const choosePost = (postId) => {
    findPost(postId);
    setShowUpdatePostModal(true);
  };

  const deletedPost = (postId) => {
    findPost(postId);
    setShowDeletePostModal(true);
  };

  return (
    <>
      <Button className="post-button" onClick={choosePost.bind(this, _id)}>
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>
      <Button className="post-button" onClick={deletedPost.bind(this, _id)}>
        <img src={deleteIcon} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};

export default ActionButtons;
