import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import styled from "styled-components";


const ButtonTag = styled.button`

  background-color: #99FF00;
  border: 0 solid #99FF00;
  display: flex;
  font-family: "neon", monospace;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: .75rem 1.65rem;
  width: 100%;
  max-width: 460px;
  transform: rotate(-3deg);

`;

const LabelTag = styled.label`
font-size: 40px;
font-family: "neon", monospace;
color: #F51E71

`;

function EditCoverLetterPage() {

  const { coverLetterId } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  

  const getCoverLetter = async () => {
    try {
      const getToken = localStorage.getItem('authToken');
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/job/${coverLetterId}/cover-letter/edit`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      setText(response.data.text);
      console.log("we are at the cover letter page")
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCoverLetter = async () => {
    try {
      const getToken = localStorage.getItem('authToken');
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/job/${coverLetterId}/cover-letter/delete`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      navigate('/user-profile');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoverLetter();
  }, []);

  let handleText =(e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { text };
    const getToken = localStorage.getItem('authToken');
    axios
    .put(`${process.env.REACT_APP_API_URL}/api/job/${coverLetterId}/cover-letter/edit`, body, {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    })
    .then(() => {
      setText('');
      navigate('/user-profile');
    })
    .catch((err) => console.log(err));
};



  return (
    <div>

<form onSubmit={handleSubmit}>
        <LabelTag for="name">Your Cover Letter:</LabelTag>
        <br />
        <textarea
          type="textarea"
          name="text"
          id="text"
          value={text} // Prop: The name input data
          onChange={handleText} // Prop: Puts data into the state
          rows={10}
          cols={90}
        />
        <br />
         <ButtonTag type="submit">Save</ButtonTag>
      </form>
      <br />
      <ButtonTag onClick={deleteCoverLetter}>Delete</ButtonTag>
    </div>

    
  )
}

export default EditCoverLetterPage