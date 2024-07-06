import React, { useState, useEffect } from 'react';
import Navigationbar from '../Navigationbar';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Dogcard from '../Dogpage/Dogcard';

const DogDetails = () => {
  const [dogData, setDogData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/petdata")
      .then((response) => {
        setDogData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    setDogData(dogData.filter(dog => dog._id !== id));
  };

  return (
    <>
      <Navigationbar />
      <Container>
        <Row>
          {dogData.map((data) => {
            return (
              data.species === "Dog" && (
                <Dogcard
                  key={data._id}
                  dogs={data}
                />
              )
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default DogDetails;
