import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";


function NavBar() {
  return (
     
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Log in</Nav.Link>
      <Nav.Link href="/signup">Sign up</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

   
  );
}

export default NavBar;
