import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white" }}>
          Taller React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"/content"}>
              <Nav.Item href="" style={{ color: "white", marginRight: "10px" }}>
                CONTENT
              </Nav.Item>
            </Link>
            <Link to={"/create"}>
              <Nav.Item style={{ color: "white" }}>CREARTE</Nav.Item>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
