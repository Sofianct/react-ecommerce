import React, { useContext } from "react";
import { Drawer } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./cart.css";

import { ContextDrawer } from "../../context/DrawerContext";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/Cartcontext";

const CartItems = () => {
  const { open, setOpen } = useContext(ContextDrawer);
  const { cart } = useContext(CartContext);

  /* Checking if the product exists in the cart. */
  const prodExist = cart.find((e) => e.id === id);

  const total = (arr) => {
    const itemsPrice = arr.reduce((a, c) => a + c.qty * c.price, 0);
    return itemsPrice;
  };

  //added a counter to change the qty prop
  const [counter, setCounter] = useState(cart.map((e) => e.qty));

  /**
   * If the id of the product in the cart matches the id of the product that was clicked, then add 1 to
   * the quantity of that product.
   */
  const addValue = () => {
    setCounter(counter + 1);

    setCart(
      cart.map((e) =>
        e.id === id ? { ...prodExist, qty: prodExist.qty + 1 } : e
      )
    );
  };

  /**
   * If the product quantity is greater than 1, then subtract 1 from the quantity. If the product
   * quantity is less than 1, then remove the product from the cart.
   */
  const substractValue = () => {
    setCounter(counter - 1);

    if (prodExist.qty <= 1) {
      let cartCopy = [...cart];
      cartCopy = cartCopy.filter((cartItem) => cartItem.id !== id);
      setCart(cartCopy);
    } else {
      setCart(
        cart.map((e) =>
          e.id === id ? { ...prodExist, qty: prodExist.qty - 1 } : e
        )
      );
    }
  };
  /**
   * It creates a copy of the cart array, filters out the item with the id that matches the id of the
   * item that was clicked, and then sets the cart to the filtered array.
   */

  const removeFromCart = () => {
    let cartCopy = [...cart];
    cartCopy = cartCopy.filter((cartItem) => cartItem.id !== id);
    setCart(cartCopy);
  };

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

export default CartItems;
