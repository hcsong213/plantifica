import CustomNavbar from "../components/CustomNavbar";
import Form from "react-bootstrap/Form";
import SideMarginLayout from "../layouts/SideMarginLayout";
import Button from "react-bootstrap/Button";

function AddPlants() {
  return (
    <div>
      <CustomNavbar />
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
    </div>
  );
}

export default AddPlants;
