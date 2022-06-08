import React from "react";
import WorkHistoryForm from "../components/WorkHistoryForm";
import styled from "styled-components";
import paper from "../Images/paper.jpeg";
import notebook from "../Images/ripped-notebook-paper-vector-20237.jpeg";

/* const PaperBackgroundTag = styled.div`
   background-image: url(${notebook});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: "100vh";
  width: "100vw";
  
`;
 */
const FormTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
`;

const WhiteStripes = styled.div`
  margin-left: 160px;
  margin-right: 160px;
  margin-top: 50px;
`;

const H1Tag = styled.h1`
  background-color: #99ff00;
  color: #f51e71;
  
  margin-bottom: 50px;
`;

function AddNewJobForm() {
  return (
    <WhiteStripes>
      <H1Tag>Create a new cover letter</H1Tag>
      <FormTag> 
      <WorkHistoryForm />
  </FormTag>
    </WhiteStripes>
  );
}

export default AddNewJobForm;
