import React , {useState}from 'react'
import {Modal,  Button} from 'react-bootstrap'
const AdoptModal = ({ show, onHide, dogs }) => {

   

  return (
    <div>
        <Modal
      show={show} onHide={onHide} size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
         
          <Button  onClick={onHide} variant="primary" > Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AdoptModal