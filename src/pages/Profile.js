import CustomNavbar from "../components/CustomNavbar";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Avatar from "react-avatar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Profile() {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      return;
    }
  }, [user, loading]);

  return (
    <div>
      <CustomNavbar />
      {user ? (
        <Container fluid>
          <Row className="justify-content-md-center align-me m-4 p-4">
            <Col md="auto">
              <h1>about me</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center align-me">
            <Col md="auto">
              <Avatar
                color={"darkseagreen"}
                name={user.displayName}
                size="200"
                round={true}
              />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center m-2">
            <Col md="auto">
              <h2>name: {user.displayName}</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center m-2">
            <Col md="auto">
              <h2> email: {user.email}</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center align-me m-4 p-4">
            <Col md="auto">
              <h1>achievements</h1>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="justify-content-md-center align-me text-center">
          Please log in 🌱
        </div>
      )}
      <div className="profile"></div>
    </div>
  );
}

export default Profile;
