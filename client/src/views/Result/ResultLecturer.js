import { ResultContext } from "../../contexts/ResultContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import AddResultModal from "../../components/result/AddResultModal";
import DeleteResultModal from "../../components/result/DeleteResultModal";
import LecturerResult from "../../components/lecturerprofile/LecturerResult";
import LecturerResultList from "../../components/lecturerprofile/LecturerResultList";
import UpdateResultModal from "../../components/result/UpdateResultModal";

import addIcon from "../../assets/plus-circle-fill.svg";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

const ResultLecturer = () => {
  // Contexts
  const {
    authState: {
      user: { id },
    },
  } = useContext(AuthContext);

  const {
    resultState: { result, results, resultsLoading },
    getResultLecturer,
    setShowAddResultModal,
    resultShowToast: { show, message, type },
    setResultShowToast,
  } = useContext(ResultContext);

  // Start: Get Result
  useEffect(() => getResultLecturer(), []);

  let body = null;

  if (resultsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else {
    body = (
      <>
        <LecturerResultList
          LecturerResult={LecturerResult}
          id={id}
          results={results}
        />
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Add New Task !!</Tooltip>}
        >
          <Button
            className="btn-floating"
            onClick={setShowAddResultModal.bind(this, true)}
          >
            <img src={addIcon} alt="add-post" width="60" height="60" />
          </Button>
        </OverlayTrigger>
      </>
    );
  }

  return (
    <Container>
      {body}
      <AddResultModal />
      {result !== null && <UpdateResultModal />}
      <DeleteResultModal />
      <Toast
        show={show}
        style={{ position: "fixed", top: "7%", right: "10px" }}
        className={`bg-${type} text-white`}
        onClose={setResultShowToast.bind(this, {
          show: false,
          message: "",
          type: null,
        })}
        delay={4000}
        autohide
      >
        <Toast.Body>
          <strong>{message}</strong>
        </Toast.Body>
      </Toast>
    </Container>
  );
};

export default ResultLecturer;
