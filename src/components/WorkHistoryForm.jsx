import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";

function WorkHistoryForm() {
  const [workHistory, setWorkHistory] = useState("");
  const [Title, setTitle] = useState("");
  const [JobDescription, setJobDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleWorkHistory = (e) => setWorkHistory(e.target.value);
  const handleTitle = (e) => setTitle(e.target.value);
  const handleJobDescription = (e) => setJobDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/user-profile/form`,
        {
          workExperience: workHistory,
          title: Title,
          description: JobDescription,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((res) => {
        navigate(`/job/${res.data._id}/cover-letter`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextArea1">
          <Form.Label column sm="4">
            Tell us about your work experience
          </Form.Label>
          <Col sm="6">
            <Form.Control
              as="textarea"
              placeholder="5 years of experience as a fullstack developper with React"
              rows={3}
              onChange={handleWorkHistory}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextArea2">
          <Form.Label column sm="4">
            What is the job title you are applying for?
          </Form.Label>
          <Col sm="6">
            <Form.Control
              type="text"
              placeholder="Socialite"
              onChange={handleTitle}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextArea3">
          <Form.Label column sm="4">
            Copy-paste here the job description:
          </Form.Label>
          <Col sm="6">
            <Form.Control
              as="textarea"
              placeholder="Take a privte jet to most popular parties"
              rows={3}
              onChange={handleJobDescription}
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

export default WorkHistoryForm;
