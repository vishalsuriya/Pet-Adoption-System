import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "../index.css";
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
          {isUser && 
          <>
          <Button
            id="gen-btn"
            onClick={handleAddClick}
            style={{ marginRight: "20px" }}
          >
            Pet_Add
          </Button>

          <Button id="gen-btn" onClick={handleDeleteClick}>
            Pet_Details
          </Button>
          </>}
          <Button id="gen-btn" onClick={handleLogoutClick}>
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
