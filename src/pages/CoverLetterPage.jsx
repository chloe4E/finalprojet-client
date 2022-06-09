import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
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
function CoverLetterPage() {
  const { coverLetterId } = useParams();

  const [coverLetter, setCoverLetter] = useState(null);

  const [fetching, setFetching] = useState(true);

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

  useEffect(() => {
    setFetching(true);
    getCoverLetter();
  }, []);

  return (
    <div>
      <h1>HERE IS YOUR COVER LETTER</h1>
      {/*  {fetching && <p>Fetching data</p>} */}
      {coverLetter && (
        <>
          <CoverLetterTag> {coverLetter.text} </CoverLetterTag>
          <Link to={`/job/${coverLetterId}/cover-letter/edit`}>
            <ButtonTag>Edit Cover Letter</ButtonTag>
          </Link>
        </>
      )}
    </div>
  );
}

export default CoverLetterPage;
