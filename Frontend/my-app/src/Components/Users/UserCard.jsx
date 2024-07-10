import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./UserCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [userData, setUserData] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isUser, setIsUser] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        console.log("User data fetched:", res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
        setAlert({
          show: true,
          message: "Error fetching user data",
          variant: "danger",
        });
      });
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login email:", userEmail);
    console.log("Login password:", userPassword);

    console.log("User data for comparison:", userData); // Debug: log user data

    const user = userData.find(
      (user) =>
        user.signupemail === userEmail && user.signuppassword === userPassword
    );
    console.log("Found user:", user);
    if (user) {
      navigate("/home");
    } else {
      setAlert({
        show: true,
        message: "Invalid email or password!",
        variant: "danger",
      });
    }
  };

  const handleSignupChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleLoginPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert({ show: false, message: "", variant: "" });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Signup response:", response.data);
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
      console.error("Error during signup:", error);
      setAlert({
        show: true,
        message: "User Registration Failed!",
        variant: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdmin=(e)=>{
    e.preventDefault();
    setIsUser(true)
    
    
    console.log(isUser)
    navigate('/admin',{ state : {isUser  : isUser}})
  }

  return (
    <div >
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
                <Form className="flip-card__form" onSubmit={handleLoginSubmit}>
                  <Form.Group controlId="formLoginEmail">
                    <Form.Control
                      className="flip-card__input"
                      type="email"
                      name="loginemail"
                      placeholder="Email"
                      value={userEmail}
                      onChange={handleLoginEmailChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formLoginPassword">
                    <Form.Control
                      className="flip-card__input"
                      type="password"
                      name="loginpassword"
                      placeholder="Password"
                      value={userPassword}
                      onChange={handleLoginPasswordChange}
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
                      onChange={handleSignupChange}
                      placeholder="Name"
                      name="signupname"
                    />
                  </Form.Group>
                  <Form.Group controlId="formSignUpEmail">
                    <Form.Control
                      className="flip-card__input"
                      type="email"
                      value={formData.signupemail}
                      onChange={handleSignupChange}
                      name="signupemail"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group controlId="formSignUpPassword">
                    <Form.Control
                      className="flip-card__input"
                      type="password"
                      value={formData.signuppassword}
                      onChange={handleSignupChange}
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
      <Button className="admin_button" style={{marginTop:"330px",marginLeft:"47.1%"}} onClick={handleAdmin}>
                    Admin
                  </Button>
    </div>
  );
};

export default UserCard;
