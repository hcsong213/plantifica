import CustomNavbar from "../components/CustomNavbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddPlants() {
  return (
    <div>
      <CustomNavbar />
      <h1>This is the Plant Search Page!</h1>
      <Form>
        <Form.Group className="mb-3" controlId="PlantName">
          <Form.Label>Plant name</Form.Label>
          <Form.Control type="text" placeholder="Enter a plant name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddPlants;
