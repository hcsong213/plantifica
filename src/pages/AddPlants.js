import Form from "react-bootstrap/Form";
import SideMarginLayout from "../layouts/SideMarginLayout";
import Button from "react-bootstrap/Button";
import CompleteNavbar from "../components/CompleteNavbar";
import AuthLayout from "../layouts/AuthLayout";
import { db } from "../firebase/config.js"
import { useState } from "react";

function AddPlants() {
  const [plantName, setPlantName] = useState("")
  const getPlant = () => {
    const collection = db.collection('plants');
    const query = collection
      .where('name', '==', plantName)
  }
  return (
    <div>
      <CompleteNavbar />
      <AuthLayout>
        <SideMarginLayout>
          <h1>This is the Plant Search Page!</h1>
          <Form>
            <Form.Group className="mb-3" controlId="PlantName">
              <Form.Label>Plant name</Form.Label>
            </Form.Group>
            <Form.Control type="text" placeholder="Enter a plant name" />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </SideMarginLayout>
      </AuthLayout>
    </div>
  );
}

export default AddPlants;
