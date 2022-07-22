import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <p>Logo</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <a href="">LogIn</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
