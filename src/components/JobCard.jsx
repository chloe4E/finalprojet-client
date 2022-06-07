import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';


function JobCard({job}) {

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
    
      <Row> 
        <Col sm="12"> 
         <h1>{job.title}</h1>
        </Col>
        </Row>
        <Row> 
        <Col  sm="6"> 
        <h2> Job description</h2>
        <p>{job.description}</p>
        <h2>Work experience</h2>
        <p>{job.workExperience}</p>
        </Col>
        <Col sm="6">
        <h2>Cover Letter</h2>
        <p>{job.coverLetter[0] && job.coverLetter[0].text}</p>
        </Col>  
        </Row>
    </div>
  )
}

export default JobCard