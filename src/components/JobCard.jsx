import React from 'react'
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";


function JobCard() {
  return (
    <div>
      <Row> 
        <Col sm="12"> 
         <h1>Job title</h1>
        </Col>
        </Row>
        <Row> 
        <Col  sm="6"> 
        <h2> Job description</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam aut repellat vero dolores. Earum eveniet dolores qui. Voluptas quod facilis repellendus eum amet voluptates praesentium voluptatum quos unde assumenda!</p>
        <h2>Work experience</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, adipisci non dolorem aliquam architecto dolore eius iste sapiente quaerat quibusdam, animi voluptatum facilis autem numquam officia nesciunt quasi reiciendis at.</p>
        </Col>
        <Col sm="6">
        <h2>Cover Letter</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, doloribus iure. Ipsum fugiat maxime ullam vel aliquid? Quo deserunt dicta officiis sed obcaecati, eligendi ea minima ipsa, dolor harum magni!</p>
        </Col>  
        </Row>
    </div>
  )
}

export default JobCard