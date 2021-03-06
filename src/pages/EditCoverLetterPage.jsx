import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

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
const LabelTag = styled.label`
  font-size: 40px;
  font-family: "neon", monospace;
  color: #f51e71;
`;

function EditCoverLetterPage() {
  const { coverLetterId } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const getCoverLetter = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/job/${coverLetterId}/cover-letter/edit`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setText(response.data.text);
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
    getCoverLetter();
  }, []);

  let handleText = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { text };
    const getToken = localStorage.getItem("authToken");
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/job/${coverLetterId}/cover-letter/edit`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      )
      .then(() => {
        setText("");
        navigate("/user-profile");
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
          value={text}
          onChange={handleText}
          rows={10}
          cols={90}
        />
        <br />
        <ButtonTag type="submit">Save</ButtonTag>
      </form>
      <br />
    </div>
  );
}

export default EditCoverLetterPage;
