import React from "react";

const CartCounter = ({ addValue, substractValue, counter }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={addValue}
      >
        +
      </button>
      <div>{counter}</div>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={substractValue}
      >
        -
      </button>
    </>
  );
};

export default CartCounter;
