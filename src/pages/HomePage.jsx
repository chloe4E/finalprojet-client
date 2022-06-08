import React from "react";
import videoBored from "../Images/video-bored.mp4";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import logo from "../Images/placeholder.png";

const H1Tag = styled.h1`
  background-color: #99ff00;
  color: #f51e71;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const H2Tag = styled.h2`
  background-color: #99ff00;
  color: #f51e71;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
const BackgroundTag = styled.div`
  background-color: #1dc1cc;
  border-radius: 15px;
  padding-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
  height: 300px;
`;

const JustifyText = styled.p`
  text-align: justify;
`;

const DarkBackgroundTag = styled.div`
  /*   background-color: #22acae; */
`;
const WhiteStripes = styled.div`
  margin-left: 160px;
  margin-right: 160px;
`;

function HomePage() {
  return (
    <>
      <WhiteStripes>
        <H1Tag>Writing Cover Letters is BORING</H1Tag>
        <DarkBackgroundTag>
          <Row>
            <Col sm="6" className="ps-5">
              <JustifyText>
                <h2 style={{ color: "#F51E71" }}>We see you.</h2>
              </JustifyText>

              <JustifyText style={{ color: "grey" }}>
                <ul>
                  <li>You have the skills,</li>
                  <li>a good CV, </li>
                  <li>and you found your dream job</li>
                </ul>

                <br />
              </JustifyText>
              <JustifyText>
                <h4 style={{ color: "#F51E71" }}>
                  There is one thing missing: A cover Letter.
                </h4>
              </JustifyText>
            </Col>
            <Col sm="6" className="pt-5">
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
        </DarkBackgroundTag>
        <H2Tag>
          Thank god you googled "cover letter generator" and landed here.
        </H2Tag>

        <Row>
          <Col>
            <BackgroundTag>
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
            </BackgroundTag>
          </Col>

          <Col>
            <BackgroundTag>
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
            </BackgroundTag>
          </Col>
          <Col>
            <BackgroundTag>
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
            </BackgroundTag>
          </Col>
        </Row>
      </WhiteStripes>
    </>
  );
}

export default HomePage;
