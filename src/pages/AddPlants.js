import CustomNavbar from "../components/CustomNavbar";
import Form from "react-bootstrap/Form";
import SideMarginLayout from "../layouts/SideMarginLayout";
import Button from "react-bootstrap/Button";
import { db } from "../firebase/config.js";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import PlantCard from "../components/PlantCard";

// done: search filters thru input to return the right plant
// todo: convert the snapshot into an array, and return the results using plantcards

function AddPlants() {
  const [value, setValue] = useState(),
    onInput = ({ target: { value } }) => setValue(value),
    onFormSubmit = (e) => {
      e.preventDefault();
      setValue();
    };

  const [plantReady, setPlantReady] = useState(false);
  const [card, setCard] = useState([]);

  const Search = async (plantInput) => {
    const plantRef = collection(db, "plants");
    const plant = String(plantInput);
    const q = query(plantRef, where("name", "==", plant));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setCard({
        name: doc.data().name,
        rarity: "Common",
        genus: doc.data().genus,
        life: doc.data().cycle,
        sun: doc.data().sun,
        type: doc.data().type,
        info: doc.data().specialInfo,
      });
    });
    setPlantReady(true);
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
        {plantReady ? (
          <PlantCard
            rarity={card.rarity}
            name={card.name}
            genus={card.genus}
            life={card.life}
            sun={card.sun}
            type={card.type}
            info={card.info}
          />
        ) : (
          <br />
        )}
      </SideMarginLayout>
    </div>
  );
}

export default AddPlants;
