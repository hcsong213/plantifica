import React, { useState } from "react";
import { arrayUnion, updateDoc } from "firebase/firestore";
import { Card, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { db, auth } from "../firebase/config.js";

function PlantCard(props) {
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(null);
  const [hasPlant, setHasPlant] = useState(false);
  async function getPlantStatus() {

    try {
      const userDocument = await db
        .collection("users")
        .doc(auth.currentUser?.uid)
        .get();

      var plants = userDocument.data()?.plants;
      var plantIdx = plants.indexOf(props.name);

      if (plantIdx === -1) {
        setHasPlant(false);
      } else {
        setHasPlant(true);
      }
    } catch (err) {
      console.log("userDocument.get Failed");
    }
  }
  getPlantStatus();

  async function updateProfile() {
    try {
      const userDocument = await db
        .collection("users")
        .doc(auth.currentUser?.uid)
        .get();

      var plants = userDocument.data()?.plants;
      var plantIdx = plants.indexOf(props.name);

      if (plantIdx === -1) {
        plants.push(props.name);
        setHasPlant(true);
      } else {
        plants.splice(plantIdx, 1);
        setHasPlant(false);
      }

      await db.collection("users").doc(auth.currentUser?.uid).update({
        numPlants: plants.length,
        plants: plants,
      });
    } catch (err) {
      console.log("userDocument.get Failed");
    }
  }

  console.log(props.image);
  return (
    <Card bg={hasPlant? "success" : "primary"} text="light" style={{ width: "18rem" }}>
      <Card.Header>{hasPlant ? "In Collection" : "Not in Collection"}</Card.Header>
      <Card.Img src={props.image} />
      <Card.Title>{props.name}</Card.Title>
      <ListGroup>
        <ListGroup.Item>Genus Name: {props.genus}</ListGroup.Item>
        <ListGroup.Item>Life Cycle: {props.life}</ListGroup.Item>
        <ListGroup.Item>Sun Requirements: {props.sun}</ListGroup.Item>
        <ListGroup.Item>Plant Type: {props.type}</ListGroup.Item>
        <ListGroup.Item>Special Info: {props.info}</ListGroup.Item>
      </ListGroup>
      <Button variant={hasPlant ? "danger" : "success"} onClick={() => updateProfile()}>
        {hasPlant ? "Remove Plant" : "Add Plant"}
      </Button>
    </Card>
  );
}

export default PlantCard;
