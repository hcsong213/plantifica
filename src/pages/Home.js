import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CustomNavbar from "../components/CustomNavbar";

function Home() {
    return (
        <div>
            <CustomNavbar />
            <Container fluid>
                <Row className="justify-content-md-center align-me">
                    <Col md="auto">
                        <h1>Plantifica</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center align-me">
                    <Col md="auto">
                        <h3>Track Your Plants Today</h3>
                    </Col>
                </Row>
                <Row className="justify-content-md-center align-me">
                    <Col md="auto">
                        <Button variant='primary' size='lg' href='/profile'>Your Plants</Button>
                    </Col>
                    <Col md="auto">
                        <Button variant='primary' size='lg' href='/search'>Find Plants</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Home;