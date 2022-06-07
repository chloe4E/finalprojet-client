import React,  { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import JobCard from "../components/JobCard";

function ProfileLandingPage() {
  const [user, setUser] = useState(null);
  

  const getPersonalInfo = async () => {
    try {
      const getToken = localStorage.getItem('authToken');
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user-profile`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      setUser(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getPersonalInfo();
  }, []);

  return (
    <>
     
      <h4>Personal Information</h4>
        { user && ( <>
          <p> {user.name} </p>
          <p> {user.surname} </p>
        </>)}
        <h4>Job list</h4>
       <div lassName="JobDetails"> 
       
       {user && user.jobList.map((job) => {
     
       return (
       <div key={job._id}> 
     <JobCard job={job} />
      <Link to="/user-profile/edit">
        <Button>Edit</Button>
      </Link>
      </div> )
       })}
      </div>
     
    </>
  );
}

export default ProfileLandingPage;
