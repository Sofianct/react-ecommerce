import React, { useContext } from "react";
import { Drawer } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./cart.css";

import { ContextDrawer } from "../Context/DrawerContext";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart, setCart }) => {
  const { open, setOpen } = useContext(ContextDrawer);
  return (
    <>
      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        PaperProps={{ style: { width: "25%" } }}
      >
        {/* Button to close cart from inside drawer */}
        <div className="text-center">
          <p>Cart</p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="text-center">Cart is empty</div>
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
                        cart={cart}
                        setCart={setCart}
                      />
                    );
                  })}
                </tbody>
              </table>
            </Scrollbars>
            <div>
              <div>Total</div>
              <div>$99,99</div>
            </div>
            <button className="btn btn-primary auto">Checkout</button>
          </>
        )}
      </Drawer>
    </>
  );
};

export default Cart;
