import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import axios from "axios";

const Navigationbar1 = () => {
  const [pets, setPets] = useState([]);

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
    <Nav justify>
      <Nav.Item>
        <Dropdown className="bg-success">
          <Dropdown.Toggle className="button bg-success border-success">
            Dogs and Puppies
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{ marginLeft: "300px" }}
            className="dropdown-content"
          >
            {pets
              .filter((pet) => pet.species === "Dog")
              .map((data) => (
                <Dropdown.Item
                  key={data._id}
                  as={Link}
                  to={`/dogs/${data._id}`}
                >
                  {data.breed}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
      <Nav.Item>
        <Dropdown className="bg-success">
          <Dropdown.Toggle className="button bg-success border-success">
            Cats and Kittens
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{ marginLeft: "300px" }}
            className="dropdown-content"
          >
            {pets
              .filter((pet) => pet.species === "Cat")
              .map((data) => (
                <Dropdown.Item
                  key={data._id}
                  as={Link}
                  to={`/cats/${data._id}`}
                >
                  {data.breed}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </Nav>
  );
};

export default Navigationbar1;
