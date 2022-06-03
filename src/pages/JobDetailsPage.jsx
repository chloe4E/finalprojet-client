import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function JobDetailsPage() {
  return (
    <>
      <div>JobDetailsPage</div>
      <h4>Job title</h4>
      <p>Placeholder for User Data</p>
      <h4>Job Description</h4>
      <p>Placeholder for User Data</p>
      <h4>Cover Letter(s)</h4>
      <p>Placeholder for User Data</p>
      <Link to="/user-profile">
        <Button>Bring me back to my profile</Button>
      </Link>
    </>
  );
}

export default JobDetailsPage;
