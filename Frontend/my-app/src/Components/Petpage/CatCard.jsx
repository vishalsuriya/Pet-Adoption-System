import React from 'react'
import {Card,Row, Col} from 'react-bootstrap'
const CatCard = ({cats}) => {
  return (
    <div>
        <Card>
            <Row>
                <Col>
                    <Card.Title>{cats.name}</Card.Title>
                    <Card.Body>
                        <ul id={cats.id}>
                            <li>Breed : {cats.breed}</li>
                            <li>Age : {cats.age}</li>
                            <li>Gender : {cats.gender}</li>
                            <li>Species : {cats.species}</li>

                            {/* <li>Origin : {cats.origin}</li> */}
                            {/* <li>Size : {cats.size}</li> */}
                            {/* <li>Temperament : {cats.temperament}</li> */}
                            {/* <li>Coat : {cats.coat}</li> */}
                            {/* <li>Special Characteristics : {cats.characteristics}</li> */}

                        </ul>
                    </Card.Body>
                </Col>
                <Col>
                    <Card.Img src={cats.img} style={{height:'250px', width:'250px'}}></Card.Img>
                </Col>
            </Row>
        </Card>
    </div>
  )
}

export default CatCard