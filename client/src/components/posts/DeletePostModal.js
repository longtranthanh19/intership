import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { PostContext } from "../../contexts/PostContext"

const DeletePostModal = ({ _id }) => {
  // Contexts
  const {
    postState: { post },
    showDeletePostModal,
    setShowDeletePostModal,
    deletePost,
    setShowToast,
  } = useContext(PostContext);

  // State
  const [deletedPost, setDeletedPost] = useState(post);

  useEffect(() => setDeletedPost(post), [post]);

  const closeDialog = () => {
    setDeletedPost(post);
    setShowDeletePostModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await deletePost(deletedPost);
    setShowDeletePostModal(false);
    setShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  return (
    <Modal show={showDeletePostModal}>
      <Modal.Header>
        <Modal.Title>Are You Sure To Delete This ?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => window.location.reload()}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default DeletePostModal;
