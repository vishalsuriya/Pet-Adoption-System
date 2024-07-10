import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./UserCard.css"; // Create a UserCard.css file for custom styles
import axios from "axios";

const UserCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const [formData, setFormData] = useState({
    signupname: "",
    signupemail: "",
    signuppassword: "",
  });

  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert({ show: false, message: "", variant: "" });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAlert({
        show: true,
        message: "User Registered Successfully!",
        variant: "success",
      });
      setFormData({
        signupname: "",
        signupemail: "",
        signuppassword: "",
      });
    } catch (error) {
      setAlert({
        show: true,
        message: "User Registration Failed!",
        variant: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
        <div className="card-switch">
          <label className="switch">
            <input
              type="checkbox"
              className="toggle"
              checked={isChecked}
              onChange={handleToggle}
            />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className={`flip-card__inner ${isChecked ? "rotate" : ""}`}>
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <Form className="flip-card__form">
                  <Form.Group controlId="formLoginEmail">
                    <Form.Control
                      className="flip-card__input"
                      type="email"
                      name="loginname"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group controlId="formLoginPassword">
                    <Form.Control
                      className="flip-card__input"
                      type="password"
                      name="loginpassword"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Button className="flip-card__btn" type="submit">
                    Log in
                  </Button>
                </Form>
              </div>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <Form className="flip-card__form" onSubmit={handleSubmit}>
                  <Form.Group controlId="formSignUpName">
                    <Form.Control
                      className="flip-card__input"
                      type="text"
                      value={formData.signupname}
                      onChange={handleChange}
                      placeholder="Name"
                      name="signupname"
                    />
                  </Form.Group>
                  <Form.Group controlId="formSignUpEmail">
                    <Form.Control
                      className="flip-card__input"
                      type="email"
                      value={formData.signupemail}
                      onChange={handleChange}
                      name="signupemail"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group controlId="formSignUpPassword">
                    <Form.Control
                      className="flip-card__input"
                      type="password"
                      value={formData.signuppassword}
                      onChange={handleChange}
                      placeholder="Password"
                      name="signuppassword"
                    />
                  </Form.Group>
                  <Button
                    className="flip-card__btn"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Registering..." : "Register"}
                  </Button>
                </Form>
              </div>
            </div>
          </label>
        </div>
      </Container>
      <div className="admin_button">
        <Button>Admin</Button>
      </div>
    </>
  );
};

export default UserCard;
