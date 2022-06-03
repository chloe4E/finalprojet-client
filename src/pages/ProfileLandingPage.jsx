import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProfileLandingPage() {
  return (
    <>
      <div>ProfileLandingPage</div>
      <h4>Personal Information</h4>
      <p>Placeholder for User Data</p>
      <h4>Work history</h4>
      <p>Placeholder for User Data</p>
      <h4>Education</h4>
      <p>Placeholder for User Data</p>
      <Link to="/user-profile/edit">
        <Button>Edit</Button>
      </Link>
      <h4>Job list</h4>
    </>
  );
}

export default ProfileLandingPage;
