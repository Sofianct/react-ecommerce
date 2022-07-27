import React from "react";
import "./navbar.css";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Header({ open, setOpen }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link to="/products">Products</Nav.Link>
            <Button variant="info" onClick={() => setOpen(true)}>
              Cart
            </Button>
            {/* <div style={{ color: "white" }}>{ cartQty }</div> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
