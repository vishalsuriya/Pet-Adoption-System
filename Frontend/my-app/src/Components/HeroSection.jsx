import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
    return (
      <Container className="col-xxl-8 px-4 py-5">
        <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
          <Col xs={10} sm={8} lg={6}>
            <Image src="https://i.pinimg.com/736x/dd/78/73/dd7873e58ed62e7fcd52d9efe46c6924.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </Col>
          <Col lg={6}>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button variant="primary" size="lg" className="px-4 me-md-2">Primary</Button>
              <Button variant="outline-secondary" size="lg" className="px-4">Default</Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default HeroSection;
  