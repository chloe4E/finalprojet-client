import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

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
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={handleEmail}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Log in
        </Button>
      </Form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Don't have an account?</p>
      <Link to="/signup"> Sign up</Link>
    </>
  );
}

export default LoginPage;
