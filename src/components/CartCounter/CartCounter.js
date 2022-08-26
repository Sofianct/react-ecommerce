import React from "react";
import "./cartCounter.css";

const CartCounter = ({ addValue, substractValue, counter, removeFromCart }) => {
  return (
    <div className="btn-group shadow-0" role="group">
      <button
        type="button"
        className="btn btn-secondary btn-masmenos btn-minus btn-sm"
        onClick={substractValue}
      >
        -
      </button>
      <input
        type="text"
        value={counter}
        className="form-control form-control-sm"
        disabled
        style={{ width: "1.5rem" }}
      />
      <button
        type="button"
        className="btn btn-secondary btn-masmenos btn-plus btn-sm"
        onClick={addValue}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-masmenos btn-sm"
        onClick={removeFromCart}
      >
        X
      </button>
    </div>
  );
};

export default CartCounter;
