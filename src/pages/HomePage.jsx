import React from "react";
import videoBored from "../Images/video-bored.mp4";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import BenefitsForUserCard from "../components/BenefitsForUserCard";

const H1Tag = styled.h1`
  background-color: #99ff00;
`;

const H2Tag = styled.h2`
  background-color: #99ff00;
`;

function HomePage() {
  return (
    <>
      <H1Tag>Writing Cover Letters is BORING</H1Tag>

      <Row>
        <Col sm="4">
          <h2>We see you.</h2>
          <p>
            You have the skills, a good CV and you found your dream job. There
            is one thing missing: A cover Letter. <br/> Writing a good cover letter is
            time consuming and you can't really find the best words right now. So you are planning to "do it later", right? 
          </p>
          <h4>You Won't.</h4>
          <p>
            We know you would't. You would probably end up re-using something you wrote before or copying someone else's. 
          </p>
          <h3>That's not how you land your dream job.</h3>
        </Col>
        <Col sm="8">
          <video width="100%" height="400px" preload="auto" autoPlay>
            <source src={videoBored} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </Col>
      </Row>
      <H2Tag>Thank god you googled "cover letter generator" and landed here.</H2Tag>

      <BenefitsForUserCard/>
    </>
  );
}

export default HomePage;
