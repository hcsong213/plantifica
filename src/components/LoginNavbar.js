import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

function LoginNavbar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Plantifica</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default LoginNavbar;