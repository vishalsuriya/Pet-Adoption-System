import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../NewPet/PetAddFormStyle.css';

function PetAddForm() {
  const [formData, setFormData] = useState({
    petName: '',
    breed: '',
    species: '',
    age: '',
    gender: '',
    origin: '',
    size: '',
    weight: '',
    temperament: '',
    coat: '',
    lifeSpan: '',
    specialCharacteristics: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0] 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:5000/api/pets', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pet-add-form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Pet Name</Form.Label>
          <Form.Control
            type="text"
            name="petName"
            placeholder="Enter Name"
            value={formData.petName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            type="text"
            name="breed"
            placeholder="Enter Breed"
            value={formData.breed}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Species</Form.Label>
          <Form.Control
            type="text"
            name="species"
            placeholder="Enter Species"
            value={formData.species}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            name="gender"
            placeholder="Enter Gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Origin</Form.Label>
          <Form.Control
            type="text"
            name="origin"
            placeholder="Enter Origin"
            value={formData.origin}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Size</Form.Label>
          <Form.Control
            type="text"
            name="size"
            placeholder="Enter Size"
            value={formData.size}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="text"
            name="weight"
            placeholder="Enter Weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Temperament</Form.Label>
          <Form.Control
            type="text"
            name="temperament"
            placeholder="Enter Temperament"
            value={formData.temperament}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Color and CoatType</Form.Label>
          <Form.Control
            type="text"
            name="coat"
            placeholder="Enter Color and CoatType"
            value={formData.coat}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Life-Span</Form.Label>
          <Form.Control
            type="text"
            name="lifeSpan"
            placeholder="Enter Life Span"
            value={formData.lifeSpan}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Special Characteristics</Form.Label>
          <Form.Control
            type="text"
            name="specialCharacteristics"
            placeholder="Enter Special Characteristics"
            value={formData.specialCharacteristics}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Pet Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add New Pet
        </Button>
      </Form>
    </div>
  );
}

export default PetAddForm;
