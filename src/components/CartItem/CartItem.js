import React, { useState, useContext } from "react";
import { CartContext } from "../../context/Cartcontext";
import CartCounter from "../CartCounter/CartCounter";
import Button from "react-bootstrap/Button";

const CartItem = ({ id, title, description, price, img, qty }) => {
  const { cart, setCart } = useContext(CartContext);
  //added a counter to change the qty prop
  const [counter, setCounter] = useState(qty);

  /* Checking if the product exists in the cart. */
  const prodExist = cart.find((e) => e.id === id);
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
  const roundPrice = (price, qty) => {
    const itemPrice = price * qty;
    return "$" + itemPrice.toFixed(2);
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
    <div className="cartContainer">
      <section className="cartContainer--cart">
        <img className="cartImg" src={img} alt={title} />
        <section className="cartContainer--section">
          <p className="cartContainer--title">
            {title}
            <span>{description}</span>
          </p>
          <article className="cartContainer--counter">
            <CartCounter
              counter={counter}
              setCounter={setCounter}
              addValue={addValue}
              substractValue={substractValue}
            />
            <Button variant="link" onClick={removeFromCart}>
              remove
            </Button>
          </article>
        </section>
        <p className="cartContainer--price">
          <span>{roundPrice(price, qty)}</span>
        </p>
      </section>
    </div>
  );
};

export default CartItem;
