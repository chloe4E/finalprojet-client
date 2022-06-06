import React from 'react'
import videoBored from "../Images/pexels-ron-lach-8691675.mp4"
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const H1Tag = styled.h1`
background-color: #99FF00;

`

function HomePage() {
  return (
    <> 
    <H1Tag>Writing Cover Letters is BORING</H1Tag>
 
    <Row> 
    <Col sm="3"> 
    <h2>SOME TEXT</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque debitis accusamus enim rerum non asperiores harum ea dolores! In minima quam culpa repudiandae perspiciatis aut necessitatibus, consectetur maiores exercitationem veritatis.</p>
    <h4>MORE TEXT</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam laborum non maiores quis quod architecto, vel similique ut blanditiis qui quaerat optio cumque voluptatum adipisci voluptatibus incidunt minus ratione sit.</p>
    </Col> 
    <Col sm="9"> 
    <video width="100%" height="400px"  preload='auto' autoPlay>
      <source src={videoBored} type="video/mp4" />
        Your browser does not support HTML5 video.
        </video>
        </Col> 
        </Row>
      <H1Tag>We got you cover - Let us do the work for you.</H1Tag>
    </>
  )
}

export default HomePage