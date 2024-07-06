import React, { useState } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "../Dogpage/dogStyle.css";
import PetModal from "../Modal/PetModal";

const Dogcard = ({ dogs }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
        <div className="buttons">
          <Row>
            <Col>
              <Button className="adopt-btn">Adopt me</Button>
              <Button className="about-btn" onClick={handleShow}>
                About me
              </Button>
              <PetModal show={showModal} onHide={handleClose} Pets={dogs} />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default Dogcard;
