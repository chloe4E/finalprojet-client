import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT
import { Button } from "react-bootstrap";
import logo from "../Images/CL_logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImageTag = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 50px;
`;
const NavbarTag = styled.div`
  font-family: neon;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function NavBar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <NavbarTag>
      <Navbar style={{ backgroundColor: "#F51E71" }}>
        <Container>
          <ImageTag src={logo} />

          <Nav className="me-auto">
            <Link 
            style={{ color: "white" }}
            className="nav-link"
            to="/">
              Home
            </Link>

            {!isLoggedIn && (
              <>
                <Link
                  style={{ color: "white" }}
                  className="nav-link"
                  to="/login"
                >
                  Log in
                </Link>

                <Link 
                style={{ color: "white" }}
                className="nav-link"
                 to="/signup">
                  Sign up
                </Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link 
                style={{ color: "white" }}
                className="nav-link"
                 to="/user-profile">
                  Profile
                </Link>
                <Button onClick={logOutUser}>Logout</Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </NavbarTag>
  );
}

export default NavBar;
