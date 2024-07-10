import React, { useState } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import PetModal from "../Modal/PetModal";
import { useNavigate } from "react-router-dom";
const Dogcard = ({ dogs }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const navigate = useNavigate()

  const handleAdoptClick = () =>{
    navigate("/adopt")
  }
  return (
    <div className="cards">
      <Card>
        <div className="details">
          <Row>
            <Col>
              <Card.Title style={{ fontSize: "30px", marginLeft: "180px" }}>
                {dogs.petName}
              </Card.Title>
              <Card.Body>
                <ul id={dogs._id}>
                  <li>Breed: {dogs.breed}</li>
                  <li>Age: {dogs.age}</li>
                  <li>Gender: {dogs.gender}</li>
                  <li>Species: {dogs.species}</li>
                  <li>Special Characteristics: {dogs.specialCharacteristics}</li>
                </ul>
              </Card.Body>
            </Col>
            <Col>
              <Card.Img
                src={dogs.image}
                style={{ height: "250px", width: "250px" }}
              />
            </Col>
          </Row>
        </div>
        <div className="d-flex gap-2 mb-3 ml-0">
          <Button style={{width:'200px'}} id="gen-btn" onClick={handleAdoptClick}>Adopt me</Button>
          <Button style={{width:'200px'}} id="gen-btn" onClick={handleShow}>
            About me
          </Button>
          <PetModal show={showModal} onHide={handleClose} Pets={dogs} />
        </div>
      </Card>
    </div>
  );
};

export default Dogcard;
