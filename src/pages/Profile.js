import CustomNavbar from "../components/CustomNavbar";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Profile() {
    const [email, setEmail] = useState("email");
    const [displayName, setDisplayName] = useState("your username");
    var divStyle = {
        padding: "20px",
        margin: "20px"
    };

    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (loading) {
            return;
        }
    }, [user, loading]);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setEmail(user.email);
            setDisplayName(user.displayName);
        } else {
            return;
        }
    });

    return (
        <div>
            <CustomNavbar />
            <Container fluid>
                <Row className="justify-content-md-center align-me" style={divStyle}>
                    <Col md="auto">
                        <h1>about me</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center align-me">
                    <Col md="auto">
                        <Avatar color={'darkseagreen'} name={displayName} size="200" round={true} />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center" style={{
                    margin: "10px"
                }}>
                    <Col md="auto" >
                        <h2>name: {displayName}</h2>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center" style={{
                    margin: "10px"
                }} >
                    <Col md="auto" >
                        <h2> email: {email}</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center align-me" style={divStyle}>
                    <Col md="auto">
                        <h1>achievements</h1>
                    </Col>
                </Row>
            </Container>
            <div className="profile">


            </div>
        </div>

    );
}

export default Profile;