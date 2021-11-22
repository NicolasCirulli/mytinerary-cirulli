import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
const NavbarHome = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <img
                  src='./assets/images/logo.png'
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="User"
                />
          <Navbar.Brand as={Link} to="/">MYTINERARY</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/" >
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/cities">
                Cities
              </Nav.Link>
              <Navbar.Brand as={Link} to="/">
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
