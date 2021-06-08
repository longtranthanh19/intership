import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import usthLogo from "../../assets/logo_moi-eng.png";
import logoutIcon from "../../assets/logout.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const NavBarMenu = () => {
  const {
    authState: {
      user: { userName },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();

  return (
    <Navbar expand="lg" bg="light" variant="light" className="shadow">
      <Container>
        <Navbar.Brand className="font-weight-bolder text-black">
          <img
            src={usthLogo}
            alt="usthLogo"
            width="250"
            height="70"
            className="mr-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="font-weight-bolder text-black"
              to="/dashboard"
              as={Link}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              className="font-weight-bolder text-black"
              to="/student"
              as={Link}
            >
              Student
            </Nav.Link>
            <Nav.Link
              className="font-weight-bolder text-black"
              to="/lecturer"
              as={Link}
            >
              Lecturer
            </Nav.Link>
            <Nav.Link
              className="font-weight-bolder text-black"
              to="/course"
              as={Link}
            >
              Course
            </Nav.Link>
            <Nav.Link
              className="font-weight-bolder text-black"
              to="/result"
              as={Link}
            >
              Result
            </Nav.Link>
            <Nav.Link
              className="font-weight-bolder text-black"
              to="/user"
              as={Link}
            >
              User
            </Nav.Link>
          </Nav>

          <Nav className="justify-content-end">
            <Nav.Link className="font-weight-bolder text-black" disabled>
              Welcome, {userName}
            </Nav.Link>
            <Button
              variant="warning"
              className="btn-logout text-white"
              size="sm"
              onClick={logout}
            >
              <img
                src={logoutIcon}
                alt="logoutIcon"
                width="16"
                height="16"
                className="mr-2"
              />
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarMenu;
