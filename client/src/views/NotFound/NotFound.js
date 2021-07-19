import React from "react";
import "./NotFound.css";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

const NotFound = () => {
  return (
    <div>
      <Container className="notFound">
        <h1> 404 - Page Not Found</h1>
        <h3> The page you are looking for might have been removed</h3>
        <div>
          <Button variant="primary" size="lg">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              GO TO HOMEPAGE
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
