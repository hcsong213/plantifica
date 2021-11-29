import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CompleteNavbar from "../components/CompleteNavbar";

function Home() {
  return (
    <div>
      <CompleteNavbar />
      <Container fluid>
        <Row className="justify-content-md-center align-me m-4 p-4">
          <Col md="auto">
            <h1>welcome to plantifica!</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center align-me">
          <Col md="auto">
            <h3>Track Your Plants Today</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center align-me">
          <Col md="auto">
            <p>By creating a Plantifica account, you can:</p>
            <ul>
              <li>Track the plants you own</li>
              <li>Learn about their characteristics</li>
              <li>Win achievements for your plant collection</li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-md-center align-me">
          <Col md="auto">
            <h3>Ready to get started?</h3>
            <h4>Make an account or login below:</h4>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center align-me">
          <Col md="auto">
            {/* link below to the account creation page*/}
            <Link to="/new-account">
              <h4>Create an Account</h4>
            </Link>
          </Col>
          <Col md="auto">
            <Link to="/login">
              <h4>Login</h4>
            </Link>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center align-me">
          <Col md="auto">
            <Button variant="primary" size="lg" href="/profile">
              Your Plants
            </Button>
          </Col>
          <Col md="auto">
            <Button variant="primary" size="lg" href="/search">
              Find Plants
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
