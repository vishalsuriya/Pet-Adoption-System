import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./AdoptForm.css";

function AdoptForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    address: "",
    occupation: "",
    phone: "",
    email: "",
    homeType: "",
    adultsInFamily: "",
    childrenInFamily: "",
    petsInHome: "",
    petsname: "",
    species: "",
    breed: "",
    agePreference: "",
    sizePreference: "",
    genderPreference: "",
    timeAvailability: "", // Added default empty string
    veterinaryCare: false, // Added default value for checkbox
    indoorOutdoor: "", // Assuming this will be handled as string for options
    petSupervision: "", // Added default empty string
  });
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    // For checkboxes, handle checked state
    const newValue = type === "checkbox" ? (checked ? value : "") : value;

    // Update state using spread operator
    setFormData({ ...formData, [id]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Check formData in console

    try {
      const response = await axios.post(
        "http://localhost:5000/api/adopts",
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Ensure correct content type
          },
        }
      );
      console.log("Response:", response.data); // Log response data
    } catch (error) {
      console.log("Error:", error.response); // Log response error
    }
  };

  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center" }}>Pet Adoption Application Form</h2>

      {/* Adopter Information */}
      <h3>Adopter Information</h3>
      <Form.Group className="mb-3" controlId="fullName">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          autoComplete="off"
          value={formData.fullName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Age:</Form.Label>
        <Form.Control
          type="number"
          name="age"
          placeholder="Enter Age"
          autoComplete="off"
          value={formData.age}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="gender">
        <Form.Label>Gender:</Form.Label>
        <Form.Control
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address:</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="Enter Address"
          autoComplete="off"
          value={formData.address}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="occupation">
        <Form.Label>Occupation:</Form.Label>
        <Form.Control
          type="text"
          name="occupation"
          placeholder="Enter Occupation"
          autoComplete="off"
          value={formData.occupation}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone:</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          autoComplete="off"
          value={formData.phone}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email Address:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter Email Address"
          autoComplete="off"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Home and Family Information */}
      <h3>Home and Family Information</h3>
      <Form.Group className="mb-3" controlId="homeType">
        <Form.Label>Type of Home:</Form.Label>
        <Form.Control
          type="text"
          name="homeType"
          placeholder="Enter Type of Home"
          autoComplete="off"
          value={formData.homeType}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="adultsInFamily">
        <Form.Label>Number of Adults in Family:</Form.Label>
        <Form.Control
          type="number"
          name="adultsInFamily"
          placeholder="Enter Number of Adults"
          autoComplete="off"
          value={formData.adultsInFamily}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="childrenInFamily">
        <Form.Label>Number of Children and Ages:</Form.Label>
        <Form.Control
          type="text"
          name="childrenInFamily"
          placeholder="Enter Number and Ages of Children"
          autoComplete="off"
          value={formData.childrenInFamily}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="petsInHome">
        <Form.Label>Other Pets in Home (Type and Number):</Form.Label>
        <Form.Control
          type="text"
          name="petsInHome"
          placeholder="Enter Other Pets Information"
          autoComplete="off"
          value={formData.petsInHome}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Pet Preferences */}
      <h3>Pet Preferences</h3>
      <Form.Group className="mb-3" controlId="petsname">
        <Form.Label>Pet Name:</Form.Label>
        <Form.Control
          type="text"
          name="petsname"
          placeholder="Enter Pet name"
          autoComplete="off"
          value={formData.petsname}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="species">
        <Form.Label>Preferred Species (e.g., Dog, Cat):</Form.Label>
        <Form.Control
          type="text"
          name="species"
          placeholder="Enter Preferred Species"
          autoComplete="off"
          value={formData.species}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="breed">
        <Form.Label>Preferred Breed (if applicable):</Form.Label>
        <Form.Control
          type="text"
          name="breed"
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
          name="agePreference"
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
          name="sizePreference"
          placeholder="Enter Preferred Size"
          autoComplete="off"
          value={formData.sizePreference}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="genderPreference">
        <Form.Label>Preferred Gender:</Form.Label>
        <Form.Control
          type="text"
          name="genderPreference"
          value={formData.genderPreference}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>

      {/* Pet Care Commitment */}
      <h3>Pet Care Commitment</h3>
      <Form.Group className="mb-3" controlId="timeAvailability">
        <Form.Label>Availability to Care for Pet:</Form.Label>
        <Form.Control
          as="textarea"
          name="timeAvailability"
          placeholder="Describe your availability to care for the pet"
          autoComplete="off"
          value={formData.timeAvailability}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="veterinaryCare">
        <Form.Check
          type="checkbox"
          name="veterinaryCare"
          label="I agree to provide regular veterinary care"
          checked={formData.veterinaryCare}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="indoorOutdoor"
        name="indoorOutdoor"
      >
        <Form.Check
          type="checkbox"
          label="I agree to keep the pet indoors"
          checked={formData.indoorOutdoor === "indoors"}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          label="I have appropriate outdoor space for the pet"
          checked={formData.indoorOutdoor === "outdoors"}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="petSupervision">
        <Form.Label>Supervision and Safety:</Form.Label>
        <Form.Control
          as="textarea"
          name="petSupervision"
          placeholder="Describe how you plan to supervise and ensure the safety of the pet"
          autoComplete="off"
          value={formData.petSupervision}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Agreement and Submit */}
      <Form.Group className="mb-3" controlId="agreement">
        <Form.Check
          type="checkbox"
          name="agreement"
          label="I agree to the terms and conditions of pet adoption."
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="outline-success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AdoptForm;
