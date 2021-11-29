import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../firebase/config";

function CustomNavbar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Plantifica</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Your Profile</Nav.Link>
          <Nav.Link href="/search">Find Plants</Nav.Link>
          <Nav.Link href="/settings">Settings</Nav.Link>
        </Nav>
        <Navbar.Text
          className="clicky"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
