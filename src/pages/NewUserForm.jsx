import React, { useContext, useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import MasterForm from "../components/Masterform";
import { Container, Row, Col } from "reactstrap";

import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const WhiteStripes = styled.div`
  margin-left: 160px;
  margin-right: 160px;
  margin-top: 50px;
`;

function NewUserForm() {
  const { getToken, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const checkFirstTime = () => {
    if (user != null && user.jobList.length > 0) {
      navigate(`/`);
    }
  };

  useEffect(() => {

    checkFirstTime();
  }, []);

  return (
    <>
      {user != null ? (
        <WhiteStripes>
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
        </WhiteStripes>
      ) : (
        <p>Error</p>
      )}
      
    </>
  );
}

export default NewUserForm;
