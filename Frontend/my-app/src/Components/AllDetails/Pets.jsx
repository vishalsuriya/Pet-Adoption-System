import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import Navigationbar from "../Navigationbar";
import PetModal from "../Modal/PetModal";
import UpdatePetModal from "./UpdatePetModal";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [updatePet, setUpdatePet] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleShow = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedPet(null);
    setShowModal(false);
    setUpdatePet(null);
    setShowUpdateModal(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/petdata")
      .then((response) => setPets(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/pets/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete Pet');
      }
      setPets(pets.filter(pet => pet._id !== id));
    } catch (error) {
      console.error('Error deleting Pet:', error);
    }
  };

  const handleUpdate = (pet) => {
    setUpdatePet(pet);
    setShowUpdateModal(true);
  };

  return (
    <>
      <Navigationbar />
      <h1 style={{ textAlign: 'center' }}>
        Available Pets
      </h1>
      <div className="cards">
        {pets.map((pet) => (
          <Card key={pet._id}>
            <div className="details">
              <Row>
                <Col>
                  <Card.Title style={{ fontSize: "30px", marginLeft: "180px" }}>
                    {pet.petName}
                  </Card.Title>
                  <Card.Body>
                    <ul id={pet._id}>
                      <li>Breed: {pet.breed}</li>
                      <li>Age: {pet.age}</li>
                      <li>Gender: {pet.gender}</li>
                      <li>Species: {pet.species}</li>
                      <li>Special Characteristics: {pet.specialCharacteristics}</li>
                    </ul>
                  </Card.Body>
                </Col>
                <Col>
                  <Card.Img
                    src={pet.image}
                    style={{ height: "250px", width: "250px" }}
                  />
                </Col>
                <Col
                  style={{
                    display: "grid",
                    placeItems: "center",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                  }}
                >
                  <div style={{ marginBottom: "10px" }}>
                    <button
                    type="submit"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                      onClick={() => handleUpdate(pet)}
                    >
                      <GrUpdate size={20} color="green" />
                    </button>
                  </div>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    onClick={() => handleDelete(pet._id)}
                  >
                    <MdDeleteOutline size={24} color="red" />
                  </button>
                </Col>
              </Row>
            </div>
            <div className="buttons">
              <Row>
                <Col>
                  <Button className="adopt-btn">Adopt me</Button>
                  <Button className="about-btn" onClick={() => handleShow(pet)}>
                    About me
                  </Button>
                </Col>
              </Row>
            </div>
          </Card>
        ))}
      </div>
      {selectedPet && (
        <PetModal show={showModal} onHide={handleClose} Pets={selectedPet} />
      )}
      {updatePet && (
        <UpdatePetModal show={showUpdateModal} onHide={handleClose} pet={updatePet} onUpdate={handleUpdate}/>
      )}
    </>
  );
};

export default Pets;
