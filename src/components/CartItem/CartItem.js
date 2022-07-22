import React from "react";

const CartItem = ({ id, title, price, qty }) => {
  return (
    <>
      <div style={{ fontSize: "10px" }}>
        - {title}{" "}
        <strong>
          {price},00$ x {qty}
        </strong>
      </div>
    </>
  );
};

export default CartItem;
