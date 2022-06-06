import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        `${process.env.REACT_APP_API_URL}/api/new-job/${this.state.userId}/form`,
        {
          workExperience: workExperience,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then(() => {
        this.setState({ currentStep: this.state.currentStep + 1 });
      })
      .catch((err) => console.log(err));
  };

  funcStep3 = (event) => {
    const storedToken = localStorage.getItem("authToken");
    event.preventDefault();
    const { jobTitle, jobDescription } = this.state;
    console.log(this.state);
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/new-job/${this.state.userId}/form2`,
        {
          title: jobTitle,
          description: jobDescription,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then(() => {
        console.log("we are HERE");
        this.setState({ currentStep: this.state.currentStep + 1 });
      })
      .then(() => {
        console.log("we are here dude");
        const navigate = useNavigate();
        navigate("/job/cover-letter");
      })
      .catch((err) => console.log(err));
  };

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left" onClick={this._prev}>
          Previous
        </Button>
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
            <CardHeader>Create an Account</CardHeader>
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
                <Button color="primary float-right" onClick={this.funcStep1}>
                  {" "}
                  Next{" "}
                </Button>
              ) : this.state.currentStep === 2 ? (
                <Button color="primary float-right" onClick={this.funcStep2}>
                  {" "}
                  Next
                </Button>
              ) : null}
              {this.state.currentStep > 2 && (
                <Button color="primary float-right" onClick={this.funcStep3}>
                  Submit
                </Button>
              )}
            </CardFooter>
          </Card>
        </Form>
      </>
    );
  }
}

export default MasterForm;
