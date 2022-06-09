import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";

function PersonalInfoForm() {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSurname = (e) => setSurname(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, surname };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken

        navigate("/user-profile");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            name
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="plaintext"
              placeholder="name"
              onChange={handleName}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            surname
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="plaintext"
              placeholder="surname"
              onChange={handleSurname}
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

export default PersonalInfoForm;
