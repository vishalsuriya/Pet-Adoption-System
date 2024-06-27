import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';

const Navigationbar =()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Brand Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="brandname" />
        <SearchBar/>
      </Container>
    </Navbar>
    
  );
}

export default Navigationbar;