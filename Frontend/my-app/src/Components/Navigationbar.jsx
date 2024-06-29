import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import { Button } from "react-bootstrap";
import '../index.css'
import {useNavigate} from 'react-router-dom'
const Navigationbar = () => {

  const navigate = useNavigate()
  const handleAddClick = () =>{
    navigate('petAddform')
  } 
  const handleDeleteClick = () =>{
    navigate('viewPetDetails')

  } 



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">PetPals Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="brandname" />
        {/* <SearchBar /> */}
        <div >
          <Button id="gen-btn" onClick={handleAddClick} style={{borderRadius:'10px', marginRight:'10px'}}>Pet_Add</Button>
          <Button id="gen-btn" onClick={handleDeleteClick} style={{borderRadius:'10px', marginRight:'10px'}}>Pet_Details</Button>

        </div>
        
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
