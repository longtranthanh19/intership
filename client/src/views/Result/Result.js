import { ResultContext } from "../../contexts/ResultContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import SingleResult from "../../components/result/SingleResult";
import UpdateResultModal from "../../components/result/UpdateResultModal";
import AddResultModal from "../../components/result/AddResultModal";
import ResultList from "../../components/result/ResultList";
import DeleteResultModal from "../../components/result/DeleteResultModal";
import TableProgramList from "../../components/result/TableProgramList/TableProgramList";

import Spinner from "react-bootstrap/Spinner";
import addIcon from "../../assets/plus-circle-fill.svg";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

const Lecturer = () => {
  // Contexts
  const {
    authState: {
      user: { userName, role },
    },
  } = useContext(AuthContext);

  const {
    resultState: { result, results, resultsLoading },
    getResults,
    setShowAddResultModal,
    resultShowToast: { show, message, type },
    setResultShowToast,
  } = useContext(ResultContext);

  // Start: Get all posts
  useEffect(() => getResults(), []);

  let body = null;
  if (resultsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (role === "Student") {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH RESULTS
        </h1>
        NO PERMISSION
      </>
    );
  } else {
    body = (
      <>
        <h1
          className="main-title d-flex justify-content-around"
          style={{ padding: "10px" }}
        >
          USTH RESULTS
        </h1>
        <TableProgramList />
        {/* Open Add Post Modal */}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Add New Result !!</Tooltip>}
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
      {/* After post is added, show toast */}
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

export default Lecturer;
