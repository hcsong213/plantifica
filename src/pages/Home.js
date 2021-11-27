import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CustomNavbar from "../components/CustomNavbar";

function Home() {

    var divStyle = {
        padding: "20px",
        margin: "20px"
    };

    return (
        <div>
            <CustomNavbar />
            <Container fluid>
                <Row className="justify-content-md-center align-me" style={divStyle}>
                    <Col md="auto">
                        <h1>plantifica</h1>
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