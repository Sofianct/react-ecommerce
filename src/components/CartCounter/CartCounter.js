import React from "react";
import Button from "react-bootstrap/Button";

import "./cartCounter.css";

const CartCounter = ({ addValue, substractValue, counter, removeFromCart }) => {
  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          onClick={substractValue}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button type="button" disabled className="btn btn-light btn-sm">
          {counter}
        </button>
        <button
          type="button"
          onClick={addValue}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      </div>
      <Button variant="link" onClick={removeFromCart}>
        remove
      </Button>
    </>
  );
};

export default CartCounter;
