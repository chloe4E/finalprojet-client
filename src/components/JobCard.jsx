import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const CoverLetterTag = styled.p`
  background-color: #99ff00;
  border-style: solid;
  border-color: #99ff00;
  white-space: pre-wrap;
  text-align: justify;
  margin-left: 300px;
  margin-right: 300px;
  padding: 50px;
  border-radius: 15px;
`;

const TitleTag = styled.h1`
  background-color: #f51e71;
  color: white;
  text-align: center;
  border-radius: 15px 15px 0px 0px;
`;

const BackgroundTag = styled.p`
  background-color: #1dc1cc;
  border-radius: 15px;
`;

function JobCard({ job }) {
  /*  { props.user && props.user.jobList.map((job) => {
    return <div> 
    <h1>{prop.job.title}</h1> 
    <h2> Job description</h2>
    <p>{prop.job.description}</p>
    <h2>Work experience</h2>
    <p>{prop.job.workExperience}</p>
    <h2>Cover Letter</h2>
    <p>{prop.job.coverLetter}</p>
    </div>
   })} */

  return (
    <div>
      <BackgroundTag className="mt-5 mx-5">
        <Row>
          <Col sm="12">
            <TitleTag>
              <h1>{job.title}</h1>
            </TitleTag>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          {/* <Col sm="4" className="px-5">
            <Card>
              <Card.Body>
                <Card.Title>Job description</Card.Title>
                <Card.Text>{job.description}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-2 mb-2">
              <Card.Body>
                <Card.Title>Work experience</Card.Title>
                <Card.Text>{job.workExperience}</Card.Text>
              </Card.Body>
            </Card>
          </Col> */}

          <Col sm="12" className="mx-5">
            <h3>Cover Letter</h3>
            <CoverLetterTag>
              {job.coverLetter[0] && job.coverLetter[0].text}
            </CoverLetterTag>
          </Col>
        </Row>
      </BackgroundTag>
    </div>
  );
}

export default JobCard;
