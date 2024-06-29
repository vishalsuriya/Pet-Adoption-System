import React, { useState } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "../Dogpage/dogStyle.css";
import AdoptModal from "../Modal/DogModal";
import { MdDeleteOutline } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

const Dogcard = ({ dogs }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="cards">
      {/* <Col> */}

      <Card>
        <div className="details">
          <Row>
            <Col>
              <Card.Title style={{ fontSize: "30px", marginLeft: "180px" }}>
                {dogs.petName}
              </Card.Title>
              <Card.Body>
                <ul id={dogs.id}>
                  <li>Breed : {dogs.breed}</li>
                  <li>Age : {dogs.age}</li>
                  <li>Gender : {dogs.gender}</li>
                  <li>Species : {dogs.species}</li>
                  <li>
                    Special Characteristics : {dogs.specialCharacteristics}
                  </li>
                </ul>
              </Card.Body>
            </Col>
            <Col>
              <Card.Img
                src={dogs.image}
                style={{ height: "250px", width: "250px" }}
              ></Card.Img>
            </Col>
            <Col
              style={{
                display: "grid",
                placeItems: "center", // Aligns items both vertically and horizontally
                gridTemplateColumns: "1fr 1fr", // Single column layout
                gap: "10px", // Gap between grid items
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <GrUpdate />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <MdDeleteOutline />
              </div>
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
              <AdoptModal show={showModal} onHide={handleClose} dogs={dogs} />
            </Col>
          </Row>
        </div>
      </Card>

      {/* </Col> */}
    </div>
  );
};

export default Dogcard;
