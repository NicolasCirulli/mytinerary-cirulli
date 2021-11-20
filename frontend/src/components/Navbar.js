import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarHome = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <img
                  src='./assets/images/logo.png'
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="User"
                />
          <Navbar.Brand href="#home">MYTINERARY</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {/* LogoUser en footer */}
              {/* Arreglar Miami */}
              {/* cambiar tamaño letra hero */}
              {/* calltoaction para city */}
              <Nav.Link href="#home" className="active">
                Home
              </Nav.Link>
              <Nav.Link eventKey={2} href="#cities">
                Cities
              </Nav.Link>
              <Navbar.Brand href="#home">
                <img
                  src= './assets/images/profile.png'
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="User"
                />
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHome;
