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
    <Navbar  style={{backgroundColor: '#F51E71'}}>
      <Container>
       

        <Nav className="me-auto">
          <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>

          {!isLoggedIn && (
            <>
              <Nav.Link style={{color:"white"}} href="/login">Log in</Nav.Link>
              <Nav.Link style={{color:"white"}} href="/signup">Sign up</Nav.Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Nav.Link style={{color:"white"}} href="/user-profile">My profile</Nav.Link>
              <Button onClick={logOutUser}>Logout</Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
