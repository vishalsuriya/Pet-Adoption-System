import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PetList() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="d-grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(12rem, 1fr))' }}>
            <Card className="text-center">
              <Card.Img variant="top" src="https://i.pinimg.com/236x/64/5e/0b/645e0be4aff7e52fd112b2a157ce76cc.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="d-grid">
                  <Button >Dogs</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="text-center">
              <Card.Img variant="top" src="https://i.pinimg.com/236x/64/5e/0b/645e0be4aff7e52fd112b2a157ce76cc.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="d-grid">
                  <Button >Cats</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PetList;
