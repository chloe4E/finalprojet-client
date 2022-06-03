import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step1 = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
      <p>Who they're gonna call?</p>
      <FormGroup>
        <Label for="name">name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={props.name} // Prop: The name input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
        <Label for="surname">surname</Label>
        <Input
          type="text"
          name="surname"
          id="surname"
          placeholder="Enter your surname"
          value={props.surname} // Prop: The surname input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step1;
