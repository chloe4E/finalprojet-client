import React from "react";
import WorkHistoryForm from "../components/WorkHistoryForm";
import styled from "styled-components";
import paper from "../Images/paper.jpeg";
import notebook from "../Images/ripped-notebook-paper-vector-20237.jpeg";

const PaperBackgroundTag = styled.div`
  /*  background-image: url(${notebook}); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: "100vh";
  width: "100vw";
`;



function AddNewJobForm() {
  return (
    <PaperBackgroundTag>
      <h1>Create a new cover letter</h1>
      <WorkHistoryForm />
    </PaperBackgroundTag>
  );
}

export default AddNewJobForm;
