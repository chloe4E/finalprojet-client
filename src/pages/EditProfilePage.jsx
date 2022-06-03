import React from "react";
import WorkHistoryForm from "../components/WorkHistoryForm";
import EducationForm from "../components/EducationForm";
import PersonalInfoForm from "../components/PersonalInformationForm";

import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import MasterForm from "../components/Masterform";
import { Container, Row, Col } from "reactstrap";

import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function EditProfilePage() {
  return (
    <>
      <div>EditProfilePage</div>
      {/*       <PersonalInfoForm />
      <WorkHistoryForm />
      <EducationForm /> */}
      <Helmet>
        <style>{"body { background-color: lightgray; }"}</style>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <MasterForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditProfilePage;
