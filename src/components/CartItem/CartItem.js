import React, { useState } from "react";
import CartCounter from "../CartCounter/CartCounter";

const CartItem = ({ id, title, price, qty, cart, setCart }) => {
  //added a counter to change the qty prop
  const [counter, setCounter] = useState(qty);
  const prodExist = cart.find((e) => e.id === id);
  const addValue = () => {
    setCounter(counter + 1);

    setCart(
      cart.map((e) =>
        e.id === id ? { ...prodExist, qty: prodExist.qty + 1 } : e
      )
    );
    //try to access to the qty and set that prop to the counter value
  };

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

  const removeFromCart = () => {
    let cartCopy = [...cart];
    cartCopy = cartCopy.filter((cartItem) => cartItem.id !== id);
    setCart(cartCopy);
  };

  return (
    <>
      <tr>
        <td>{title}</td>
        <td>
          <CartCounter
            counter={counter}
            setCounter={setCounter}
            addValue={addValue}
            substractValue={substractValue}
            cart={cart}
            setCart={setCart}
          />
        </td>
        <td>{price},00 €</td>
        <td>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={removeFromCart}
          >
            X
          </button>
        </td>
        <td>{qty * price},00 €</td>
      </tr>
    </>
  );
};

export default CartItem;
