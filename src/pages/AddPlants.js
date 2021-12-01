import Form from "react-bootstrap/Form";
import CompleteNavbar from "../components/CompleteNavbar";
import SideMarginLayout from "../layouts/SideMarginLayout";
import Button from "react-bootstrap/Button";
import { db } from "../firebase/config.js";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import PlantCard from "../components/PlantCard";
import AuthLayout from "../layouts/AuthLayout";
import { Col, Row } from "react-bootstrap";

// todo: convert the snapshot into an array, and return the results using plantcards

function AddPlants() {
  const [value, setValue] = useState(),
    onInput = ({ target: { value } }) => setValue(value),
    onFormSubmit = (e) => {
      e.preventDefault();
    };

  const [plantReady, setPlantReady] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [card, setCard] = useState([]);

  const Search = async (plantInput) => {
    setHasSearched(true);
    const plantRef = collection(db, "plants");
    const plant = String(plantInput);
    const q = query(plantRef, where("name", "==", plant));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setCard({
        name: doc.data().name,
        genus: doc.data().genus,
        image: doc.data().image,
        life: doc.data().cycle,
        sun: doc.data().sun,
        type: doc.data().type,
        info: doc.data().specialInfo,
      });
    });

    querySnapshot.empty ? setPlantReady(false) : setPlantReady(true);
  };

  return (
    <div>
      <CompleteNavbar />
      <AuthLayout>
        <SideMarginLayout>
          <h1 className="my-4">Search for your plants below:</h1>
          <Form onSubmit={onFormSubmit}>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Enter a plant name"
                  value={value}
                  onChange={onInput}
                />
              </Col>
              <Col>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => Search(value)}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
          {plantReady && (
            <PlantCard
              rarity={card.rarity}
              name={card.name}
              genus={card.genus}
              image={card.image}
              life={card.life}
              sun={card.sun}
              type={card.type}
              info={card.info}
            />
          )}
          {!plantReady && hasSearched && (
            <p>
              Uh oh! We couldn't find the plant you're looking for. Please
              ensure that you spelled the plant properly.
            </p>
          )}
          <div id="spacer" className="mb-5" />
        </SideMarginLayout>
      </AuthLayout>
    </div>
  );
}

export default AddPlants;
