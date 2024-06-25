import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container className="my-5 position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
      
       
        <svg className="bi mt-5 mb-3" width="48" height="48">
          <use xlinkHref="#check2-circle"></use>
        </svg>
        <Card.Title className="text-body-emphasis">Placeholder jumbotron</Card.Title>
        <Card.Text className="col-lg-6 mx-auto mb-4">
          This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
        </Card.Text>
        <Button className="btn btn-primary px-5 mb-5" type="button">
          Call to action
        </Button>
    </Container>
  );
};

export default Hero;
