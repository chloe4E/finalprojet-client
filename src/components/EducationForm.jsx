import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";

function EducationForm() {
  const [education, setEducation] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEducation = (e) => setEducation(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { education };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        navigate("/user-profile");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextArea1">
          <Form.Label column sm="4">
            Tell us about your education
          </Form.Label>
          <Col sm="6">
            <Form.Control
              as="textarea"
              placeholder="I completed a 3 months bootcamp at Ironhack in 2017"
              rows={3}
              onChange={handleEducation}
            />
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Here you go
        </Button>
      </Form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Take me back to profile</p>
      <Link to="/user-profile"> profile</Link>
    </>
  );
}

export default EducationForm;
