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
        "p-4 w-25 m-3 rounded text-center text-white " +
        (props.earned ? "bg-success" : "bg-secondary")
      }
    >
      <Container fluid>
        <Row className="justify-content-md-center align-me m-4 p-4">
          <Col md="auto">
          {props.title}
          </Col>
        </Row>
        <Row className="justify-content-md-center align-me">
          <Col md="auto">
          <img src={props.image} width="200px" height="200px" />
          </Col>
        </Row>
        </Container>
    </div>
   
  );
}
