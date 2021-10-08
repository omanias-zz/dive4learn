import React from "react";

import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Div4Learn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/servicios">Servicios</Nav.Link>
              <Nav.Link href="/elegirnos">¿Por que elegirnos?</Nav.Link>
              <Nav.Link href="/nosotros">¿Quienes somos?</Nav.Link>
              <Nav.Link href="/contactanos">Contáctanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
