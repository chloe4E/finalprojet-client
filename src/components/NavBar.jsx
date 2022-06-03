import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT
import { Button } from "react-bootstrap";


function NavBar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>

          {!isLoggedIn && (
            <>
              <Nav.Link href="/login">Log in</Nav.Link>
              <Nav.Link href="/signup">Sign up</Nav.Link>
             
            </>
            )}
            {isLoggedIn && (
              <Button onClick={logOutUser}>Logout</Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
