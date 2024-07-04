import React, { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import AdoptModal from "../Modal/DogModal";
import "../Dogpage/dogStyle.css";
import CatModal from "../Modal/CatModal";
import { MdDeleteOutline } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
const CatCard = ({ cats }) => {
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
                {cats.petName}
              </Card.Title>
              <Card.Body>
                <ul id={cats.id}>
                  <li>Breed : {cats.breed}</li>
                  <li>Age : {cats.age}</li>
                  <li>Gender : {cats.gender}</li>
                  <li>Species : {cats.species}</li>

                  <li>
                    Special Characteristics : {cats.specialCharacteristics}
                  </li>
                </ul>
              </Card.Body>
            </Col>
            <Col>
              <Card.Img
                src={cats.img}
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
                <GrUpdate/>
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
              <CatModal show={showModal} onHide={handleClose} cats={cats} />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default CatCard;
