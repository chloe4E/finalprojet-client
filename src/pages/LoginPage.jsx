import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";

const WhiteStripes = styled.div`
  margin-left: 160px;
  margin-right: 160px;
  @media (max-width: 900px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const ButtonTag = styled.button`
  font-family: "Anton", sans-serif;
  background-color: #99ff00;
  color: #f51e71;
  border: 0 solid #99ff00;
  font-family: "Anton", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.55rem 1.35rem;
  width: 100%;
  max-width: 300px;
  transform: rotate(-15deg);
  text-decoration: none;
  margin-left: 30px;
`;

const FormTag = styled.div`
  font-family: "Anton", sans-serif;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin-top: 80px;
  background-color: #1dc1cc;
  padding: 80px;
  margin-left: 160px;
  margin-right: 160px;
  border-radius: 15px;
  box-shadow: 6px 16px 38px 5px rgba(0, 0, 0, 0.54);
  @media (max-width: 900px) {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5 px;
    padding: 5px;
  }
`;

function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };

      let response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        body
      );
      // Request to the server's endpoint `/auth/login` returns a response
      // with the JWT string ->  response.data.authToken
      storeToken(response.data.authToken);
      await authenticateUser();

      //trying to check if the logged in User already has a job created or not:
      /* let existingUser = await axios
      .post(`${process.env.REACT_APP_API_URL}/api/user-profile/check`, body) */

      navigate("/new-user/form");
    } catch (err) {
      setErrorMessage(err.response.data.errorMessage);
    }
  };

  return (
    <WhiteStripes>
      <FormTag>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={handleEmail}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="4">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePassword}
              />
            </Col>
          </Form.Group>
          <ButtonTag type="submit" variant="primary">
            Log in
          </ButtonTag>
        </Form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </FormTag>
    </WhiteStripes>
  );
}

export default LoginPage;
