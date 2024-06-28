import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AdoptForm.css'; // Import your external CSS file for styling

function AdoptForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    address: '',
    occupation: '',
    phone: '',
    email: '',
    homeType: '',
    adultsInFamily: '',
    childrenInFamily: '',
    petsInHome: '',
    petsname:'',
    species: '',
    breed: '',
    agePreference: '',
    sizePreference: '',
    genderPreference: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your API endpoint for form submission
    const apiUrl = 'https://api.example.com/submit'; // Replace with your actual API endpoint

    // Example POST request using fetch
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Optionally handle success message or redirect
      alert('Form submitted successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error
      alert('Error submitting form. Please try again later.');
    });
  };

  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <h2 style={{textAlign:'center'}}>Pet Adoption Application Form</h2>

      {/* Adopter Information */}
      <h3>Adopter Information</h3>
      <Form.Group className="mb-3" controlId="fullName">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Full Name"
          autoComplete="off"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Age:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Age"
          autoComplete="off"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="gender">
        <Form.Label>Gender:</Form.Label>
        <Form.Control
          as="select"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Address"
          autoComplete="off"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="occupation">
        <Form.Label>Occupation:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Occupation"
          autoComplete="off"
          value={formData.occupation}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Phone Number"
          autoComplete="off"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email Address:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email Address"
          autoComplete="off"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Home and Family Information */}
      <h3>Home and Family Information</h3>
      <Form.Group className="mb-3" controlId="homeType">
        <Form.Label>Type of Home:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Type of Home"
          autoComplete="off"
          value={formData.homeType}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="adultsInFamily">
        <Form.Label>Number of Adults in Family:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Number of Adults"
          autoComplete="off"
          value={formData.adultsInFamily}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="childrenInFamily">
        <Form.Label>Number of Children and Ages:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Number and Ages of Children"
          autoComplete="off"
          value={formData.childrenInFamily}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="petsInHome">
        <Form.Label>Other Pets in Home (Type and Number):</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Other Pets Information"
          autoComplete="off"
          value={formData.petsInHome}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Pet Preferences */}
      <h3>Pet Preferences</h3>
      <Form.Group className="mb-3" controlId="petsname">
        <Form.Label>Pet Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Pet name"
          autoComplete="off"
          value={formData.petsname}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="species">
        <Form.Label>Preferred Species (e.g., Dog, Cat):</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Preferred Species"
          autoComplete="off"
          value={formData.species}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="breed">
        <Form.Label>Preferred Breed (if applicable):</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Preferred Breed"
          autoComplete="off"
          value={formData.breed}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="agePreference">
        <Form.Label>Preferred Age:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Preferred Age"
          autoComplete="off"
          value={formData.agePreference}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="sizePreference">
        <Form.Label>Preferred Size:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Preferred Size"
          autoComplete="off"
          value={formData.sizePreference}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="genderPreference">
        <Form.Label>Preferred Gender:</Form.Label>
        <Form.Control
          as="select"
          value={formData.genderPreference}
          onChange={handleChange}
        >
          <option value="">Select Gender Preference</option>
          <option>Male</option>
          <option>Female</option>
          <option>No Preference</option>
        </Form.Control>
      </Form.Group>

      {/* Pet Care Commitment */}
      <h3>Pet Care Commitment</h3>
      <Form.Group className="mb-3" controlId="timeAvailability">
        <Form.Label>Availability to Care for Pet:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Describe your availability to care for the pet"
          autoComplete="off"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="veterinaryCare">
        <Form.Label>Commitment to Veterinary Care:</Form.Label>
        <Form.Check
          type="checkbox"
          label="I agree to provide regular veterinary care"
          className="form-check"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="indoorOutdoor">
        <Form.Label>Indoor or Outdoor Pet:</Form.Label>
        <Form.Check
          type="checkbox"
          label="I agree to keep the pet indoors"
          className="form-check"
        />
        <Form.Check
          type="checkbox"
          label="I have appropriate outdoor space for the pet"
          className="form-check"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="petSupervision">
        <Form.Label>Supervision and Safety:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Describe how you plan to supervise and ensure the safety of the pet"
          autoComplete="off"
          required
        />
      </Form.Group>

      {/* Agreement and Submit */}
      <Form.Group className="mb-3" controlId="agreement">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions of pet adoption."
          required
        />
      </Form.Group>

      <Button variant="outline-success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AdoptForm;
