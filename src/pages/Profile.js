import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Avatar from "react-avatar";
import { onAuthStateChanged } from "firebase/auth";
import CompleteNavbar from "../components/CompleteNavbar";
import { db, auth } from "../firebase/config.js";
import AchievementBadges from "../components/molecular/AchievementBadges";
import AuthLayout from "../layouts/AuthLayout";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userDocument = await db
          .collection("users")
          .doc(auth.currentUser?.uid)
          .get();

        setUser(auth?.currentUser);
        setName(userDocument.data()?.name);
        setEmail(userDocument.data()?.email);
      } catch (err) {
        console.log("userDocument.get Failed");
      }
    }
  });

  return (
    <div>
      <CompleteNavbar />
      <AuthLayout>
        <Container fluid>
          <Row className="justify-content-md-center align-me mt-4 p-4">
            <Col md="auto">
              <h1>About Me</h1>
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
              <h2>Name: {name}</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center m-2">
            <Col md="auto">
              <h2> Email: {email}</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center align-me m-4 p-4">
            <Col md="auto">
              <h1>Achievements</h1>
            </Col>
            <AchievementBadges user={user} />
          </Row>
        </Container>
      </AuthLayout>
      <div className="profile"></div>
    </div>
  );
}

export default Profile;
