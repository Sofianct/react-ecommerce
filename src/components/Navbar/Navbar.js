import React, { useContext } from "react";
import { ContextDrawer } from "../../context/DrawerContext";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Cartcontext";

function Header() {
  const { setOpen } = useContext(ContextDrawer);
  const { cart } = useContext(CartContext);
  const cartQty = cart.reduce(
    (total, currentValue) => (total = total + currentValue.qty),
    0
  );
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/login">
              Log In
            </Link>
            <button className="btnn" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <div className="cartQty"> {cartQty}</div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
