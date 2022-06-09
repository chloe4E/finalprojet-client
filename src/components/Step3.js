import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      <p>Quick and easy as ctrl+c ctrl+v</p>
      <FormGroup>
        <Label for="jobTitle">
          What is the title of the job your are applying for?
        </Label>
        <Input
          type="text"
          name="jobTitle"
          id="jobTitle"
          placeholder="Junior Fullstack Developper"
          value={props.jobTitle} // Prop: The jobTitle input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
        <Label for="jobDescription">
          Copy & paste here your job description
        </Label>
        <Input
          type="textarea"
          name="jobDescription"
          id="jobDescription"
          placeholder="Full Stack Developers are responsible for designing and developing websites and platforms. They work with design teams to ensure that user interactions on web pages are intuitive and engaging. They also provide back-end functionality that can run smoothly from any device or browser type commonly used today."
          value={props.jobDescription} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
          rows="7"
        />
      </FormGroup>
    </>
  );
};

export default Step3;
