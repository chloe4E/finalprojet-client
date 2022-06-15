import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import JobCard from "../components/JobCard";
import styled from "styled-components";

const TitleTag = styled.h1`
  background-color: #004661;
  color: white;
  text-align: center;
`;

const ButtonTag = styled.button`
  background-color: #99ff00;
  border: 0 solid #99ff00;
  display: flex;
  font-family: "Anton", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  width: 100%;
  max-width: 300px;
  transform: rotate(-15deg);
  margin-top: 60px;
  margin-left: 60px;
  text-decoration: none;
`;

const WhiteStripes = styled.div`
  margin-left: 160px;
  margin-right: 160px;
  @media (max-width: 900px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

function ProfileLandingPage() {
  const [user, setUser] = useState(null);

  const getPersonalInfo = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user-profile`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPersonalInfo();
  }, []);

  return (
    <WhiteStripes>
      <ButtonTag>
        <Link to="/user-profile/add-job">Create a new cover letter</Link>
      </ButtonTag>
      {/*      <h4>Personal Information</h4>
      {user && (
        <>
          <p> {user.name} </p>
          <p> {user.surname} </p>
        </>
      )} */}
      <TitleTag>Cover Letters</TitleTag>

      <div lassName="JobDetails">
        {user &&
          user.jobList
            .slice()
            .reverse()
            .map((job) => {
              if (!job || !job._id || !job.coverLetter.length) return null;
              return (
                <div key={job._id}>
                  <JobCard job={job} />
                </div>
              );
            })}
      </div>
    </WhiteStripes>
  );
}

export default ProfileLandingPage;
