import { Card, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function PlantCard(props) {
  return (
    <Card bg="success" text="white" style={{ width: "18rem" }}>
      <Card.Header>{props.rarity}</Card.Header>
      <Card.Img src={props.img} />
      <Card.Title>{props.name}</Card.Title>
      <ListGroup>
        <ListGroup.Item>Genus Name: {props.genus}</ListGroup.Item>
        <ListGroup.Item>Life Cycle: {props.life}</ListGroup.Item>
        <ListGroup.Item>Sun Requirements: {props.sun}</ListGroup.Item>
        <ListGroup.Item>Plant Type: {props.type}</ListGroup.Item>
        <ListGroup.Item>Special Info: {props.info}</ListGroup.Item>
      </ListGroup>
      <Button variant="primary">Add Plant/Remove Plant</Button>
    </Card>
  );
}

export default PlantCard;
