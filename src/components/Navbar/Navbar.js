import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <p>Logo</p>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="Products">Products</a>
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
