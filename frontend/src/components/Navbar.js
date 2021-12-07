import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
const NavbarHome = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-oscuro" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/"> <span className="texto-naranja">MyTinerary</span></Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link  eventKey={1}  as={Link} to="/" >
                <span className="texto-naranja">Home</span> 
              </Nav.Link>
              <Nav.Link  eventKey={2}  as={Link} to="/cities">
              <span className="texto-naranja">Cities</span> 
              </Nav.Link>
              <Nav.Link  eventKey={3}  as={Link} to="/Signup">
              <span className="texto-naranja">Sing Up</span> 
              </Nav.Link>
              <Nav.Link  eventKey={4}  as={Link} to="/Signin">
              <span className="texto-naranja">Sing In</span> 
              </Nav.Link>
              <Navbar.Brand as={Link} to="/">
                <img
                  src= '/assets/images/profile.png'
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
