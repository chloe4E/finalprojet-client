import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

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
  @media (max-width: 900px) {
    padding-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const TitleTag = styled.h3`
  background-color: #f51e71;
  color: white;
  text-align: center;
  border-radius: 15px 15px 0px 0px;
`;

const BackgroundTagForCoverLetter = styled.p`
  background-color: #1dc1cc;
  border-radius: 15px;
  padding-bottom: 0.5px;
`;
const CoverLetterTag = styled.p`
  background-color: #99ff00;
  border-style: solid;
  border-color: #99ff00;
  white-space: pre-wrap;
  text-align: justify;
  margin-left: 50px;
  margin-right: 50px;
  padding: 50px;
  border-radius: 15px;
  @media (max-width: 900px) {
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  }
`;

const JustifyText = styled.p`
  text-align: justify;
`;

const WhiteStripes = styled.div`
  margin-left: 160px;
  margin-right: 160px;
  @media (max-width: 900px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

function HomePage() {
  return (
    <>
      <WhiteStripes>
        <H1Tag>Writing Cover Letters is BORING</H1Tag>

        <Row>
          <Col sm="6" className="ps-5 pt-3">
            <JustifyText style={{ color: "grey" }}>
              You have the skills, a good CV and you found your dream job. There
              is one thing missing: A cover Letter.
              <JustifyText className="pt-3 ">
                <h3 style={{ color: "#F51E71" }}>
                  But writing a cover letter is boring, right?
                </h3>
              </JustifyText>
              <JustifyText style={{ color: "grey" }}>
                What if we tell you it doesn't have to be ?
                <br />
              </JustifyText>
            </JustifyText>
          </Col>
          <Col sm="6">
            <iframe
              src="https://giphy.com/embed/3o6YfYvk4uB415sOTm"
              width="480"
              height="248"
              frameBorder="0"
              className="GIF"
            ></iframe>
          </Col>
        </Row>
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
                className="GIF"
              ></iframe>

              <Card.Body>
                <h5>How does it work?</h5>
                <Card.Text>
                  We have a team of full-time minions to write it for you.
                  Joking. AI does the job.
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
                className="GIF"
              ></iframe>

              <Card.Body>
                <h5>What do I have to do?</h5>
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
                className="GIF"
              ></iframe>
              <Card.Body>
                <h5>What are you waiting for?</h5>
                <Card.Text>IT'S FREE. NO REALLY IT'S FREE.</Card.Text>
              </Card.Body>
            </BackgroundTag>
          </Col>
        </Row>
        <H1Tag>Examples of our success stories</H1Tag>
        <div>
          <BackgroundTagForCoverLetter>
            <TitleTag>President</TitleTag>
            <CoverLetterTag>
              Dear Recruiter, <br /> <br />I am writing to apply for the
              position of President of the United States. <br />
              <br />
              As a real estate magnate and billionaire, I have the experience
              and expertise to effectively lead our country. I am also a reality
              show personality, so I am no stranger to the public eye.
              <br />
              <br /> I am confident that I can fulfill the duties of this office
              with the utmost integrity and dedication. <br />
              <br />
              Thank you for your time and consideration.
              <br />
              <br />
              Sincerely, <br />
              <br />
              Donald Trump
            </CoverLetterTag>
          </BackgroundTagForCoverLetter>
        </div>
        <div>
          <BackgroundTagForCoverLetter>
            <TitleTag>Influencer</TitleTag>
            <CoverLetterTag>
              Dear Recruiter, <br />
              <br />
              My name is Paris Hilton and I am interested in the Influencer
              position. I have never worked before, but I am a socialite and I
              think I would be great at this job. I want to make money posting
              photos online, and I think I have the perfect look and personality
              for this job. I am confident that I can be a successful
              Influencer, and I would appreciate the opportunity to prove
              myself. <br />
              <br />
              Thank you for your time, and I look forward to hearing from you
              soon.
              <br />
              <br />
              Paris Hilton
            </CoverLetterTag>
          </BackgroundTagForCoverLetter>
        </div>
        <div>
          <BackgroundTagForCoverLetter>
            <TitleTag>F1 Driver</TitleTag>
            <CoverLetterTag>
              Dear Recruiter, <br />
              <br /> I am writing in regards to the job opening for an F1 driver
              with Mercedes. I believe that I am the perfect candidate for this
              position, as I have a wealth of experience in the racing industry.{" "}
              <br />
              <br />
              I have been driving since I was eight years old, and have won
              numerous championships throughout my career. In 2008, I made
              history by becoming the first Black driver to win the F1 world
              drivers' championship. I am confident in my abilities and I know
              that I can be an asset to your team.
              <br /> Thank you for your time and consideration, and I look
              forward to hearing from you soon. <br />
              <br />
              Sincerely, <br />
              <br />
              Lewis Hamilton
            </CoverLetterTag>
          </BackgroundTagForCoverLetter>
        </div>
      </WhiteStripes>
    </>
  );
}

export default HomePage;
