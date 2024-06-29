import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import {useEffect, useState} from 'react'
import axios from 'axios'
const Navigationbar1 = () => {

  const [pets, setPets] = useState([])
  useEffect(() => {
      axios
        .get("http://localhost:8000/api/petdata")
        .then((response) => {
          setPets(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);


  return (
    <Nav justify >
      <Nav.Item>
        <div className="Paste-button">
          <Dropdown className="bg-success">
            <Dropdown.Toggle className="button bg-success border-success">Dogs and Puppies</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-content">
              {pets.map((data)=>{
               return ( data.species === 'Dog' &&
                            <Dropdown.Item>{data.breed}</Dropdown.Item>
               )
              })}
              
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Nav.Item>
      <Nav.Item>
        <div className="Paste-button">
          <Dropdown className="bg-success">
            <Dropdown.Toggle className="button bg-success border-success">Cats and Kittens</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-content">
            {pets.map((data)=>{
               return ( data.species === 'Cat' &&
                        <Dropdown.Item>{data.breed}</Dropdown.Item>
               )
              })}
              
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Nav.Item>
    </Nav>
  );
};

export default Navigationbar1;
