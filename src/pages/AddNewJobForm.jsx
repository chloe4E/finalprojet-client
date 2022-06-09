import React from "react";
import WorkHistoryForm from "../components/WorkHistoryForm";
import styled from "styled-components";

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
