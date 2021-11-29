import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Avatar from "react-avatar";
import { onAuthStateChanged } from "firebase/auth";
import CompleteNavbar from "../components/CompleteNavbar"
import { db, auth } from "../firebase/config.js";

function Profile() {
  const [signedIn, setSignedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSignedIn(true);
      async function fetchProfile() {
        try {
          const userDocument = await db
            .collection('users')
            .doc(auth.currentUser?.uid)
            .get();
          
            setName(userDocument.data()?.name);
            setEmail(userDocument.data()?.email);
        } catch (err) {
          console.log('userDocument.get Failed')
        }
      }
      fetchProfile();
    }
  });

  return (
    <div>
      <CompleteNavbar />
      {signedIn ? (
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
                name={name}
                size="200"
                round={true}
              />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center m-2">
            <Col md="auto">
              <h2>name: {name}</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center m-2">
            <Col md="auto">
              <h2> email: {email}</h2>
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
          Please <a href="/login">log in</a> 🌱
        </div>
      )}
      <div className="profile"></div>
    </div>
  );
}

export default Profile;
