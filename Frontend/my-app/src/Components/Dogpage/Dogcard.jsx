import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'

const Dogcard = ({dogs}) => {


  return (  
    <div>
        {/* <Col> */}
        <Card>
            <Row>
                <Col>
                    <Card.Title>{dogs.name}</Card.Title>
                    <Card.Body>
                        <ul id={dogs.id}>
                            <li>Breed : {dogs.breed}</li>
                            <li>Age : {dogs.age}</li>
                            <li>Gender : {dogs.gender}</li>
                            <li>Species : {dogs.species}</li>

                            {/* <li>Origin : {dogs.origin}</li> */}
                            {/* <li>Size : {dogs.size}</li> */}
                            {/* <li>Temperament : {dogs.temperament}</li> */}
                            {/* <li>Coat : {dogs.coat}</li> */}
                            {/* <li>Special Characteristics : {dogs.characteristics}</li> */}

                        </ul>
                    </Card.Body>
                </Col>
                <Col>
                    <Card.Img src={dogs.img} style={{height:'250px', width:'250px'}}></Card.Img>
                </Col>
            </Row>
        </Card>
       
        {/* </Col> */}
    </div>
  )
}

export default Dogcard