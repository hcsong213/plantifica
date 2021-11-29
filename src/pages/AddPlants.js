import CustomNavbar from "../components/CustomNavbar";
import Form from "react-bootstrap/Form";
import SideMarginLayout from "../layouts/SideMarginLayout";
import Button from "react-bootstrap/Button";
import { db } from "../firebase/config.js";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

// done: search filters thru input to return the right plant
// todo: convert the snapshot into an array, and return the results using plantcards

async function Search(plantInput) {
  const plantRef = collection(db, "plants");
  const plant = String(plantInput);
  const q = query(plantRef, where("name", "==", plant));
  const querySnapshot = await getDocs(q);
  console.log("hi");
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    console.log("printed");
    console.log(doc.data().name);
  });
  return;
}

function AddPlants() {
  const [value, setValue] = useState(),
    onInput = ({ target: { value } }) => setValue(value),
    onFormSubmit = (e) => {
      e.preventDefault();
      console.log("The value is " + value);
      setValue();
    };

  return (
    <div>
      <CustomNavbar />
      <SideMarginLayout>
        <h1>Search for your plants below:</h1>
        <Form onSubmit={onFormSubmit}>
          <Form.Group className="mb-3" controlId="PlantName">
            <Form.Label>Plant name</Form.Label>
          </Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter a plant name"
            value={value}
            onChange={onInput}
          />
          <Button variant="primary" type="submit" onClick={() => Search(value)}>
            Submit
          </Button>
        </Form>
      </SideMarginLayout>
    </div>
  );
}

export default AddPlants;
