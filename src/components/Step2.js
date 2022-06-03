import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <p>What are your superpowers ?</p>
      <FormGroup>
        <Label for="workExperience"> Tell us about your work experience</Label>
        <Input
          type="textarea"
          name="workExperience"
          id="workExperience"
          placeholder="5 years of experience as a fullstack developper with React"
          value={props.workExperience} // Prop: The workExperience input data
          onChange={props.handleChange} // Prop: Puts data into the state
          rows="7"
        />
      </FormGroup>
    </>
  );
};

export default Step2;
