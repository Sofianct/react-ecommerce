import React from "react";

const CartCounter = ({
  qty,
  addValue,
  substractValue,
  counter,
  setCounter,
  cart,
  setCart,
}) => {
  //   const [counter, setCounter] = useState(qty);
  //   const addValue = () => {
  //     setCounter(counter + 1);
  //   };

  //   const substractValue = () => {
  //     setCounter(counter - 1);
  //   };
  //   const cartQty = () => {
  //     setCart(counter);
  //     //code...
  //   };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={addValue}
      >
        +
      </button>
      <div>{counter}</div> {/*{ counter } */}
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
