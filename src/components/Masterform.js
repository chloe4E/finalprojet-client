import React, { Component } from "react";

import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import Step1 from "../components/Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import styled from "styled-components";

import MultiStepProgressBar from "./MultiStepProgressBar";

import axios from "axios";


const ButtonTag = styled.button`
  background-color: #99ff00;
  color: #F51E71;
  border: 0 solid #99ff00;
  font-family: "neon", monospace;
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

const ButtonPreviousTag = styled.button`
  background-color: #004661;
  color: white;
  border: 0 solid #004661;
  font-family: "neon", monospace;
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

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      userId: this.props.userId,
      currentStep: 1,
      name: "",
      surname: "",
      workExperience: "",
      jobTitle: "",
      jobDescription: "",
      jobId: "",
      coverLetterId: "",
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, surname } = this.state;
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  funcStep1 = (event) => {
    const storedToken = localStorage.getItem("authToken");
    event.preventDefault();
    const { name, surname } = this.state;
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/new-user/${this.state.userId}/form`,
        {
          name: name,
          surname: surname,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then(() => this.setState({ currentStep: this.state.currentStep + 1 }))
      .catch((err) => console.log(err));
  };

  funcStep2 = (event) => {
    const storedToken = localStorage.getItem("authToken");
    event.preventDefault();

    const { workExperience } = this.state;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/new-job/form`,
        {
          workExperience: workExperience,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((res) => {
        this.setState({
          currentStep: this.state.currentStep + 1,
          jobId: res.data._id,
        });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  };

  funcStep3 = (event) => {
    const storedToken = localStorage.getItem("authToken");
    event.preventDefault();
    const { jobTitle, jobDescription, jobId, name, surname } = this.state;
    console.log("we are in function 3");
    console.log(this.state);
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/new-job/form2`,
        {
          title: jobTitle,
          description: jobDescription,
          jobId: jobId,
          name: name,
          surname: surname,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((res) => {
        console.log("we are HERE" + res.data);
        this.setState({ currentStep: this.state.currentStep + 1 });
        this.props.navigate(`/job/${res.data._id}/cover-letter`);
      })
      .catch((err) => console.log(err));
  };

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <ButtonPreviousTag color="secondary float-left" onClick={this._prev}>
          Previous
        </ButtonPreviousTag>
      );
    }

    // ...else return nothing
    return null;
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Card>
            <CardHeader>This is where the magic happens</CardHeader>
            <CardBody>
              <CardTitle>
                <MultiStepProgressBar currentStep={this.state.currentStep} />
              </CardTitle>
              <CardText />
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.username}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.password}
              />
            </CardBody>
            <CardFooter>
              {this.previousButton}
              {this.state.currentStep === 1 ? (
                <ButtonTag color="primary float-right" onClick={this.funcStep1}>
                  {" "}
                  Next{" "}
                </ButtonTag>
              ) : this.state.currentStep === 2 ? (
                <ButtonTag color="primary float-right" onClick={this.funcStep2}>
                  {" "}
                  Next
                </ButtonTag>
              ) : null}
              {this.state.currentStep > 2 && (
                <ButtonTag color="primary float-right" onClick={this.funcStep3}>
                  Submit
                </ButtonTag>
              )}
            </CardFooter>
          </Card>
        </Form>
      </>
    );
  }
}

export default MasterForm;
