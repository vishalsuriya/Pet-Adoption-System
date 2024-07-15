import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const Navigationbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isUser } = location.state || {};

  const handleAddClick = () => {
    navigate("/petAddform");
  };

  const handleDeleteClick = () => {
    navigate("/viewPetDetails");
  };

  const handleLogoutClick = () => {
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/home">PetPals Connect</Navbar.Brand>

        <div className="d-flex justify-content-end">
          {isUser && (
            <>
              <Button
                onClick={handleAddClick}
                style={{ marginRight: "20px" }}
              >
                Pet_Add
              </Button>

              <Button onClick={handleDeleteClick}>
                Pet_Details
              </Button>
            </>
          )}
          <Button onClick={handleLogoutClick}>
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
