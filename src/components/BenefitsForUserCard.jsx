import React from 'react'
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import logo from "../Images/placeholder.png";
import styled from "styled-components";


function BenefitsForUserCard(props) {
  return (
    <Row xs={1} md={3} className="g-4">
    {Array.from({ length: 3 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>cardTitle</Card.Title>
            <Card.Text>
              cardText
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  )
}

export default BenefitsForUserCard