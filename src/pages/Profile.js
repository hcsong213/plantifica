import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Avatar from "react-avatar";
import { onAuthStateChanged } from "firebase/auth";
import CompleteNavbar from "../components/CompleteNavbar";
import { db, auth } from "../firebase/config.js";
import AchievementBadges from "../components/molecular/AchievementBadges";
import AuthLayout from "../layouts/AuthLayout";
import { collection, query, where, getDocs } from "firebase/firestore";
import PlantCard from "../components/PlantCard";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [numPlants, setNumPlants] = useState(0);
  const [plants, setPlants] = useState([]);
  const [cards, setCards] = useState([]);
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && !authState) {
        try {
          const userDocument = await db
            .collection("users")
            .doc(auth.currentUser?.uid)
            .get();

          setUser(auth?.currentUser);
          setName(userDocument.data()?.name);
          setEmail(userDocument.data()?.email);
          setPlants(userDocument.data()?.plants);
          setNumPlants(userDocument.data()?.numPlants)
          plants.map(async (plantName) => {
            const plantRef = collection(db, "plants");
            const plant = String(plantName);
            const q = query(plantRef, where("name", "==", plant));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              setCards((oldArray) => [
                ...oldArray,
                {
                  name: doc.data().name,
                  genus: doc.data().genus,
                  image: doc.data().image,
                  life: doc.data().cycle,
                  sun: doc.data().sun,
                  type: doc.data().type,
                  info: doc.data().specialInfo,
                },
              ]);
            });
          });
          setAuthState(true);
        } catch (err) {
          console.log("userDocument.get Failed");
        }
      }
    });

    return unsubscribe;
  }, [authState, plants]);

  console.log("user: ", user);

  const renderPlants = () => {
    return cards.map((card) => {
      return (
        <PlantCard
          name={card.name}
          genus={card.genus}
          image={card.image}
          life={card.life}
          sun={card.sun}
          type={card.type}
          info={card.info}
        />
      );
    });
  };

  return (
    <div>
      <CompleteNavbar />
      <AuthLayout>
        <Container fluid>
          <Row className="justify-content-md-center align-me mt-4 p-4">
            <Col md="auto">
              <h1>About Me</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center align-me">
            <Col md="auto">
              <Avatar
                color={"darkseagreen"}
                name={name}
                size="200"
                round={true}
              />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center m-2">
            <Col md="auto">
              <h2>Name: {name}</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center m-2">
            <Col md="auto">
              <h2>Email: {email}</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center align-me m-4 p-4">
            <Col md="auto">
              <h1>Achievements</h1>
            </Col>
            <AchievementBadges numPlants={numPlants} />
          </Row>
          <Row className="justify-content-md-center align-me">
            <Col md="auto">
              <h1>Plants</h1>
            </Col>
            <Row className="justify-content-md-center align-me">
              {renderPlants()}
            </Row>
          </Row>
        </Container>
      </AuthLayout>
      <div className="profile"></div>
    </div>
  );
}

export default Profile;
