import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PetList = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <div
            className="d-grid gap-4 bg"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(12rem, 1fr))",
            }}
          >
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/236x/fe/de/cc/fedecc5f7c08330b01c1088d8f98c0c3.jpg"
              />
              <Card.Body>
                <Card.Title>Dogs and Puppies</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text> */}
                <div className="d-grid">
                  <Button id="gen-btn" variant="outline-success">
                    Dogs
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/236x/a3/a2/98/a3a2981c812d1873cf25ff393babde00.jpg"
              />
              <Card.Body>
                <Card.Title>Cats and Kittens</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text> */}
                <div className="d-grid">
                  <Button id="gen-btn" variant="outline-success">
                    Cats
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PetList;
