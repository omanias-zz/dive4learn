import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="page-container">
      <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-general">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="nav-logo"
              src="/img/logo.png"
              alt="logo dive4learn"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id="nav-menu">
              <Nav.Link id="nav-item" href="/">
                HOME
              </Nav.Link>

              <Nav.Link id="nav-item" href="/servicios">
                SERVICIOS
              </Nav.Link>

              <Nav.Link id="nav-item" href="/elegirnos">
                ¿POR QUÉ ELEGIRNOS?
              </Nav.Link>
              <Nav.Link id="nav-item" href="/contactanos">
                CONTACTANOS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
