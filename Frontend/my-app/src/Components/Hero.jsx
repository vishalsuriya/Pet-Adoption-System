import { Card, Button, Carousel } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="my-5 position-relative p-5 text-center text-muted ">
       <Carousel controls={false} indicators={false} style={{ height: "300px", width: "100%" }} className="mt-1"> 
      <Carousel.Item interval={2500}>
      <img
          src="https://i.pinimg.com/564x/30/6b/20/306b20828bd03a2f36a85d8fe99ff3ce.jpg"
          className="d-block w-100 h-100"
          alt="..."
          style={{ maxHeight: "300px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <img
          src="https://i.pinimg.com/564x/fa/ed/5c/faed5cd36e9d7622ad2d640b7a0d61cc.jpg"
          className="d-block w-100"
          alt="..."
          style={{ maxHeight: "300px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <img
          src="https://i.pinimg.com/564x/06/ca/98/06ca985e66acefc2b0d35745ea27691c.jpg"
          className="d-block w-100"
          alt="..."
          style={{ maxHeight: "300px" }}
        />
      </Carousel.Item>
    </Carousel>
       
      
        <Card.Title className="text-body-emphasis mt-4">Placeholder jumbotron</Card.Title>
        <Card.Text className="col-lg-6 mx-auto mb-4">
          This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
        </Card.Text>
        <Button className="btn btn-primary px-5 mb-5" type="button">
          Call to action
        </Button>
    </div>
  );
};

export default Hero;
