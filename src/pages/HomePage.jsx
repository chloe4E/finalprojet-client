import React from "react";
import videoBored from "../Images/video-bored.mp4";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import logo from "../Images/placeholder.png";

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
            is one thing missing: A cover Letter. <br /> Writing a good cover
            letter is time consuming and you can't really find the best words
            right now. So you are planning to "do it later", right?
          </p>
          <h4>You Won't.</h4>
          <p>
            We know you would't. You would probably end up re-using something
            you wrote before or copying someone else's.
          </p>
          <h3>That's not how you land your dream job.</h3>
        </Col>
        <Col sm="8">
          {/*  <video width="100%" height="400px" preload="auto" autoPlay>
            <source src={videoBored} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video> */}
          <iframe
            src="https://giphy.com/embed/3o6YfYvk4uB415sOTm"
            width="480"
            height="248"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
      <H2Tag>
        Thank god you googled "cover letter generator" and landed here.
      </H2Tag>

      <Row>
        <Col>
          <Card>
            <iframe
              src="https://giphy.com/embed/xUPGcjUQcWclgK94ti"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>

            <Card.Body>
              <Card.Title>How does it work?</Card.Title>
              <Card.Text>
                We have a team of full-time minions working day and night to
                write for you. Joking. AI does the job.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <iframe
              src="https://giphy.com/embed/Khurh5g5bBIkg"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>

            <Card.Body>
              <Card.Title>What do I have to do?</Card.Title>
              <Card.Text>
                Feed the AI. Don't be scared. It doesn't bite.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <iframe
              src="https://giphy.com/embed/3oKIPa2TdahY8LAAxy"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <Card.Body>
              <Card.Title>What are you waiting for?</Card.Title>
              <Card.Text>IT'S FREE. NO REALLY IT'S FREE.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
