import React, { useContext, useState } from "react";
import { ContextDrawer } from "../../context/DrawerContext";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Cartcontext";
import LoginForm from "../LoginForm/LoginForm";
import { LoginContext } from "../../context/LoginContext";

function Header() {
  const { setOpen } = useContext(ContextDrawer);
  const { cart } = useContext(CartContext);
  const cartQty = cart.reduce(
    (total, currentValue) => (total = total + currentValue.qty),
    0
  );
  const [modalShow, setModalShow] = useState(false);
  const { logged } = useContext(LoginContext);

  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://pbs.twimg.com/profile_images/1384768556504543233/UHH5FX--_400x400.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{ borderRadius: "50%" }}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
            <Link
              to="#"
              className="nav-link"
              onClick={() => setModalShow(true)}
            >
              {logged ? "Logged in" : "Login"}
            </Link>
            <button className="btnn" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <div className="cartQty"> {cartQty}</div>
          </Nav>
        </Container>
      </Navbar>

      <LoginForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Header;
