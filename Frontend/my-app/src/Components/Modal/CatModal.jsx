import React , {useState}from 'react'
import {Modal,  Button} from 'react-bootstrap'

const CatModal = ({ show, onHide, cats }) => {
  return (
    <div>
        <Modal
      show={show} onHide={onHide} size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>{cats.petName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                                <ul id={cats.id}>
                                    <li>Breed : {cats.breed}</li>
                                    <li>Age : {cats.age}</li>
                                    <li>Gender : {cats.gender}</li>
                                    <li>Species : {cats.species}</li>
                                    <li>Special Characteristics : {cats.specialCharacteristics}</li>
                                    <li>Weight : {cats.weight}</li>
                                    <li>Temperamant : {cats.temperament}</li>
                                    <li>Coat and Colour : {cats.coat}</li>
                                    <li>Life Span : {cats.lifeSpan}</li>
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

export default CatModal