import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ColorSchemesExample() {
  const navigate = useNavigate();
  const data = JSON.parse(sessionStorage.getItem("userData"));
  const [userData, setUserData] = useState(data);

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    setUserData(null);
  };

  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          {userData ? (
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="outline-light" onClick={handleNavigate}>
              Login
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
