import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context"; 
import logo from "../Images/CL_logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImageTag = styled.img`
  margin-right: 50px;
`;
const NavbarTag = styled.div`
 font-family: 'Anton', sans-serif;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 0;
  margin-left: 160px;
  margin-right: 160px;

`;

const ButtonTag = styled.button`
  background-color: #99ff00;
  color: #F51E71;
  border: 0 solid #99ff00;
  display: flex;
  font-family: 'Anton', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.55rem 1.35rem;
  width: 100%;
  max-width: 300px;
  transform: rotate(15deg);
  text-decoration: none;
  margin-left: 30px;
  
`;

function NavBar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <NavbarTag>
      <Navbar style={{ backgroundColor: "#F51E71" }}>
        <Container>
          <ImageTag src={logo} />

          <Nav className="me-auto">
            <Link style={{ color: "white" }} className="nav-link" to="/">
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
                  to="/signup"
                >
                  Sign up
                </Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link
                  style={{ color: "white" }}
                  className="nav-link"
                  to="/user-profile"
                >
                  Profile
                </Link>
                <ButtonTag onClick={logOutUser}>Logout</ButtonTag>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </NavbarTag>
  );
}

export default NavBar;
