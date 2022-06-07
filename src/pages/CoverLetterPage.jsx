import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
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
  
`;

function CoverLetterPage() {
  const { coverLetterId } = useParams();


  const [coverLetter, setCoverLetter] = useState(null);
  

  const getCoverLetter = async () => {
    try {
      const getToken = localStorage.getItem('authToken');
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/job/${coverLetterId}/cover-letter`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      setCoverLetter(response.data);
      console.log("we are at the cover letter page")
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getCoverLetter();
  }, []);



  return (
    <div>
      <h1>HERE IS YOUR COVER LETTER</h1>
      { coverLetter && ( <>
          <CoverLetterTag> {coverLetter.text} </CoverLetterTag>
          <Link to={`/job/${coverLetterId}/cover-letter/edit`}>
          <Button>Edit Cover Letter</Button> 
          </Link>

        </>)}

    </div>

  )
}

export default CoverLetterPage