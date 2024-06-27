import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
