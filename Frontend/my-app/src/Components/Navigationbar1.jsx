import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';

const  Navigationbar1=()=> {
  return (
    <Nav justify>
      <Nav.Item>
      <Dropdown >
      <Dropdown.Toggle >Dogs and Puppies</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>List1</Dropdown.Item>
        <Dropdown.Item>List1</Dropdown.Item>
        <Dropdown.Item>List1</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Nav.Item>
      <Nav.Item>
      <Dropdown >
      <Dropdown.Toggle >Cats and Kittens</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>List1</Dropdown.Item>
        <Dropdown.Item>List1</Dropdown.Item>
        <Dropdown.Item>List1</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>



      </Nav.Item>
     
    </Nav>
  );
}


    
 
export default Navigationbar1;