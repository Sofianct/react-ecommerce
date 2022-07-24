import React from "react";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart, setCart, id }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Op</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 && (
            <div className="text-center">Cart is empty</div>
          )}
          {cart.map(({ id, title, price, img, qty }) => {
            return (
              <>
                <CartItem
                  key={id}
                  id={id}
                  title={title}
                  img={img}
                  price={price}
                  qty={qty}
                  cart={cart}
                  setCart={setCart}
                />
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Cart;
