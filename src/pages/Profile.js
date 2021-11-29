import CustomNavbar from "../components/CustomNavbar";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Avatar from "react-avatar";

function Profile() {
  var divStyle = {
    padding: "20px",
    margin: "20px",
  };

  return (
    <div>
      <CustomNavbar />
      <Container fluid>
        <Row className="justify-content-md-center align-me" style={divStyle}>
          <Col md="auto">
            <h1>my profile</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center align-me">
          <Col md="auto">
            <Avatar
              color={"darkseagreen"}
              name=" Dummy Name"
              size="200"
              round={true}
            />
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-center"
          style={{
            margin: "10px",
          }}
        >
          <Col md="auto">
            <h2>username</h2>
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-center"
          style={{
            margin: "10px",
          }}
        >
          <Col md="auto">
            <h2>email</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center align-me" style={divStyle}>
          <Col md="auto">
            <h1>achievements</h1>
          </Col>
        </Row>
      </Container>
      <div className="profile"></div>
    </div>
  );
}

export default Profile;
