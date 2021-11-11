import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-general">
        <Navbar.Brand href="/">
          <img className="nav-logo" src="/img/logo.png" alt="logo dive4learn" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="nav-menu">
            <Nav.Link id="nav-item" href="/" title="Home">
              HOME
            </Nav.Link>

            <Nav.Link id="nav-item" href="/servicios" title="Servicios">
              SERVICIOS
            </Nav.Link>

            <Nav.Link
              id="nav-item"
              href="/elegirnos"
              title="¿Por qué elegirnos?"
            >
              ¿POR QUÉ ELEGIRNOS?
            </Nav.Link>
            <Nav.Link id="nav-item" href="/contactanos" title="Contactanos">
              CONTACTANOS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
