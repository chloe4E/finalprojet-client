import React from 'react'
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

function LoginPage() {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="3">
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="3">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Button variant="primary">Primary</Button>
    </Form>
  )
}

export default LoginPage