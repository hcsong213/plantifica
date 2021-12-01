import { Col, Container, Row } from "react-bootstrap";

/**
 * @param {string} param.title title of the the achievement
 * @param {boolean} props.earned whether the user earned this achievement
 * @returns a badge that is colored differently depending on if the user earned it
 */
export default function Badge(props) {
  console.log(props.image);
  return (
    <div
      className={
        "py-5 w-25 m-3 rounded text-center text-white " +
        (props.earned ? "bg-success" : "bg-secondary")
      }
    >
      <Container fluid>
        <Row className="justify-content-md-center align-me mb-4">
          <Col md="auto">
            <h3>{props.title}</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center align-me">
          <Col md="auto">
            <img src={props.image} width="100px" height="100px" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
