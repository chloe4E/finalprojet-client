import React, { useContext } from "react";
import WorkHistoryForm from "../components/WorkHistoryForm";
import EducationForm from "../components/EducationForm";
import PersonalInfoForm from "../components/PersonalInformationForm";

import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import MasterForm from "../components/Masterform";
import { Container, Row, Col } from "reactstrap";

import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function NewUserForm() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      {/*       <PersonalInfoForm />
      <WorkHistoryForm />
      <EducationForm /> */}
      <Helmet>
        <style>{"body { background-color: lightgray; }"}</style>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <MasterForm userId={user._id} navigate={navigate} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewUserForm;
