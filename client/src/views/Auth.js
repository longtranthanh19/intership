import LoginForm from "../components/auth/LoginForm";

import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

import usthLogo from "../assets/logo_moi-eng.png";

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading)
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  else if (isAuthenticated) return <Redirect to="/dashboard" />;
  else body = <>{authRoute === "login" && <LoginForm />}</>;
  return (
    <Container>
      <div className="landing">
        <div className="dark-overlay">
          <div className="nav-login d-flex justify-content-start">
            <img
              src={usthLogo}
              alt="usthLogo"
              width="358"
              height="100"
              className="usth-logo-login"
            />
            <h1></h1>
          </div>

          <div className="landing-inner">
            <span className="login-title">USTH Result Management</span>
            {body}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Auth;
