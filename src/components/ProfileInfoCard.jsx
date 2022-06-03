import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProfileInfoCard(props) {
  const { title } = props;
  return (
    <>
      <h4>{title}</h4>
      {/*      <Button onClick={viewFunc}>View</Button> */}

      <Link to="/user-profile/edit">
        <Button>Edit</Button>
      </Link>

      <Button>Delete</Button>
    </>
  );
}

export default ProfileInfoCard;
