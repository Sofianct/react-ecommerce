import React, { useContext } from "react";
import { Drawer } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./cart.css";

import { ContextDrawer } from "../../context/DrawerContext";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/Cartcontext";

const Cart = () => {
  const { open, setOpen } = useContext(ContextDrawer);
  const { cart } = useContext(CartContext);

  /**
   * It takes an array of objects, and returns the sum of the price of each object multiplied by its
   * quantity.
   * @param arr - the array of objects
   * @returns The total price of all items in the cart.
   */
  const total = (arr) => {
    const itemsPrice = arr.reduce((a, c) => a + c.qty * c.price, 0);
    return itemsPrice;
  };

  // const totalTax =
  //   Math.round((total(cart) * 0.21 + Number.EPSILON) * 100) / 100;

  // const totalPrice =
  //   Math.round((total(cart) + totalTax + Number.EPSILON) * 100) / 100;

  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={() => setOpen(false)}
      PaperProps={{ style: { width: "25%" } }}
    >
      <div className="text-center">
        <p>Cart</p>
        <button
          type="button"
          className="btn m-2"
          onClick={() => setOpen(false)}
        >
          <i className="fa fa-close"></i>
        </button>
      </div>
      {cart.length === 0 ? (
        <div className="text-center mt-5">Cart is empty</div>
      ) : (
        <>
          <Scrollbars autoHide style={{ height: 600 }}>
            <table className="table table-sm table-responsive">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Op</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {/* Mapping through the cart array and returning a CartItem component
          for each item in the cart array.  */}
                {cart.map(({ id, title, price, img, qty }) => {
                  return (
                    <CartItem
                      key={id}
                      id={id}
                      title={title}
                      img={img}
                      price={price}
                      qty={qty}
                    />
                  );
                })}
              </tbody>
            </table>
          </Scrollbars>
          <div>
            <p>
              Total: <span>{total(cart)},00 €</span>
            </p>
            {/* <p>Iva: {totalTax}</p>
            <p>Total: {totalPrice}</p> */}
          </div>
          <button className="btn btn-primary auto">Checkout</button>
        </>
      )}
    </Drawer>
  );
};

export default Cart;
