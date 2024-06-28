import React , {useState}from 'react'
import {Modal,  Button} from 'react-bootstrap'
const DogModal = ({ show, onHide, dogs }) => {

   

  return (
    <div>
        <Modal
      show={show} onHide={onHide} size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>{dogs.petName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                                <ul id={dogs.id}>
                                    <li>Breed : {dogs.breed}</li>
                                    <li>Age : {dogs.age}</li>
                                    <li>Gender : {dogs.gender}</li>
                                    <li>Species : {dogs.species}</li>
                                    <li>Special Characteristics : {dogs.specialCharacteristics}</li>
                                    <li>Weight : {dogs.weight}</li>
                                    <li>Temperamant : {dogs.temperament}</li>
                                    <li>Coat and Colour : {dogs.coat}</li>
                                    <li>Life Span : {dogs.lifeSpan}</li>
                                    {/* <li>Special Characteristics : {dogs.specialCharacteristics}</li> */}

                                </ul>
        </Modal.Body>
        <Modal.Footer>
         
          <Button  onClick={onHide} variant="primary" > Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default DogModal