import { ResultContext } from "../contexts/ResultContext";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import ProfileResult from "../components/profile/ProfileResult";
import ResultProfileList from "../components/profile/ResultProfileList";

import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const ResultProfile = () => {
  // Contexts
  const {
    authState: {
      user: { id },
    },
  } = useContext(AuthContext);

  const {
    resultState: { resultsLoading, studentResult },
    getResultProfile,
  } = useContext(ResultContext);

  // Start: Get Result
  useEffect(() => getResultProfile(), []);

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
        <ResultProfileList
          ProfileResult={ProfileResult}
          id={id}
          studentResult={studentResult}
        />
      </>
    );
  }

  return <Container>{body}</Container>;
};

export default ResultProfile;
