import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const CoverLetterTag = styled.p`
  background-color: #99ff00;
  margin-left: 250px;
  margin-right: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-style: solid;
  border-color: #99ff00;
  white-space: pre-wrap;
  text-align: justify;
  border-radius: 15px;
  @media (max-width: 900px) {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const ButtonTag = styled.button`
  background-color: #f51e71;
  color: white;
  border: 0 solid #99ff00;
  font-family: "Anton", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.55rem 1.35rem;
  width: 100%;
  max-width: 300px;
  transform: rotate(-15deg);
  text-decoration: none;
  margin-left: 30px;
`;

const ButtonDeleteTag = styled.button`
  background-color: #004661;
  color: white;
  border: 0 solid #004661;
  font-family: "Anton", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.55rem 1.35rem;
  width: 100%;
  max-width: 300px;
  transform: rotate(-15deg);
  text-decoration: none;
`;

const H1Tag = styled.h1`
  color: #f51e71;
  margin-top: 16px;
  font-family: "Anton", sans-serif;
`;
function CoverLetterPage() {
  const { coverLetterId } = useParams();

  const [coverLetter, setCoverLetter] = useState(null);

  const [fetching, setFetching] = useState(true);
  const navigate = useNavigate();

  const getCoverLetter = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/job/${coverLetterId}/cover-letter`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setCoverLetter(response.data);
      setFetching(true);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCoverLetter = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/job/${coverLetterId}/cover-letter/delete`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      navigate("/user-profile");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFetching(true);
    getCoverLetter();
  }, []);

  return (
    <div>
      <H1Tag>HERE IS YOUR COVER LETTER</H1Tag>
      {/*  {fetching && <p>Fetching data</p>} */}
      {coverLetter && (
        <>
          <CoverLetterTag> {coverLetter.text} </CoverLetterTag>
          <Link to={`/job/${coverLetterId}/cover-letter/edit`}>
            <ButtonTag>Edit Cover Letter</ButtonTag>
          </Link>
          <ButtonDeleteTag onClick={deleteCoverLetter}>Delete</ButtonDeleteTag>
        </>
      )}
    </div>
  );
}

export default CoverLetterPage;
