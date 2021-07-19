import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { ResultContext } from "../../contexts/ResultContext";

const DeleteResultModal = ({ _id }) => {
  // Contexts
  const {
    resultState: { result },
    showDeleteResultModal,
    setShowDeleteResultModal,
    deleteResult,
    setResultShowToast,
  } = useContext(ResultContext);

  // State
  const [deletedResult, setDeletedResult] = useState(result);

  useEffect(() => setDeletedResult(result), [result]);

  const closeDialog = () => {
    setDeletedResult(result);
    setShowDeleteResultModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await deleteResult(deletedResult);
    setShowDeleteResultModal(false);
    setResultShowToast({
      show: true,
      message: success
        ? `Delete ${result.studentName}'s result successful`
        : message,
      type: success ? "success" : "danger",
    });
    if (success) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <Modal show={showDeleteResultModal}>
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
          >
            Delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default DeleteResultModal;
