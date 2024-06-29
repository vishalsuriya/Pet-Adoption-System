import React, { useState, useEffect } from 'react'
import Navigationbar from '../Navigationbar'
import { Container, Row, Col, Card } from 'react-bootstrap'
import axios from 'axios'
import Dogcard from '../Dogpage/Dogcard'
const DogDetails = () => {

    const [dogData, setdogData] = useState([])
    useEffect(() => {
        axios
          .get("http://localhost:8000/api/petdata")
          .then((response) => {
            setdogData(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

  return (
    <>
        <Navigationbar/>
        <Container>
            <Row>
               
                {dogData.map((data) => {
                        return (
                          data.species === "Dog" &&
                        <Dogcard
                          key={data.id}
                          dogs = {data}
                        />
                    )
                })}
               
               
            </Row>
        </Container>
    </>
  )
}

export default DogDetails;