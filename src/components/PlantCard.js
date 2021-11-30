import React, { useState } from "react";
import { arrayUnion, updateDoc } from "firebase/firestore";
import { Card, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { db, auth } from "../firebase/config.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function PlantCard(props) {
  const [image, setImage] = useState(null);
  async function updateProfile() {
    try {
      const userDocument = await db
        .collection("users")
        .doc(auth.currentUser?.uid)
        .get();

      var plants = userDocument.data()?.plants;

      plants.push(props.name);

      await db
        .collection("users")
        .doc(auth.currentUser?.uid)
        .update({
          numPlants: userDocument.data()?.numPlants + 1,
          plants: plants,
        });
    } catch (err) {
      console.log("userDocument.get Failed");
    }
  }

  const storage = getStorage();
  getDownloadURL(ref(storage, props.image))
    .then((url) => {
      setImage(url);
    })
    .catch((error) => {
      console.log("Image does not exist.");
    });

  return (
    <Card bg="success" text="white" style={{ width: "18rem" }}>
      <Card.Header>{props.rarity}</Card.Header>
      <Card.Img src={image} />
      <Card.Title>{props.name}</Card.Title>
      <ListGroup>
        <ListGroup.Item>Genus Name: {props.genus}</ListGroup.Item>
        <ListGroup.Item>Life Cycle: {props.life}</ListGroup.Item>
        <ListGroup.Item>Sun Requirements: {props.sun}</ListGroup.Item>
        <ListGroup.Item>Plant Type: {props.type}</ListGroup.Item>
        <ListGroup.Item>Special Info: {props.info}</ListGroup.Item>
      </ListGroup>
      <Button variant="primary" onClick={() => updateProfile()}>
        Add Plant/Remove Plant
      </Button>
    </Card>
  );
}

export default PlantCard;
