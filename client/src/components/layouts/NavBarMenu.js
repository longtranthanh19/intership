import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import usthLogo from "../../assets/logo_moi-eng.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const NavBarMenu = () => {
  const {
    authState: {
      user: { userName, role },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();

  let body = null;
  if (role === "Staff") {
    body = (
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
              <Container>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Welcome to USTH"
                  menuVariant="dark"
                >
                  <NavDropdown.Item className="main-title" disabled>Hi,<span></span>{role} {userName}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="main-title" onClick={logout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else if (role === "Lecturer") {
    body = (
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
            </Nav>

            <Nav className="justify-content-end">
              <Container>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Welcome to USTH"
                  menuVariant="dark"
                >
                  <NavDropdown.Item className="main-title" disabled>Hi,{role} {userName}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="main-title" onClick={logout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else if (role === "Student") {
    body = (
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
                to="/profile"
                as={Link}
              >
                Profile
              </Nav.Link>

              <Nav.Link
                className="font-weight-bolder text-black"
                to="/resultstudent"
                as={Link}
              >
                Result
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
            </Nav>

            <Nav className="justify-content-end">
              <Container>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Welcome to USTH"
                  menuVariant="dark"
                >
                  <NavDropdown.Item className="main-title" disabled>Hi,{role} {userName}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="main-title d-flex justify-content-around" onClick={logout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  return <>{body}</>;
};

export default NavBarMenu;
