import React from "react";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart, setCart }) => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    // console.log("closed");
  };
  return (
    <>
      {cart.length === 0 && <div>Cart is empty</div>}
      {cart.map(({ id, title, price, img }) => {
        return (
          <>
            <CartItem
              key={id}
              id={id}
              title={title}
              img={img}
              price={price}
              cart={cart}
              setCart={setCart}
              visible={visible}
              setVisible={setVisible}
              handler={handler}
              closeHandler={closeHandler}
            />
          </>
        );
      })}
    </>
  );
};

export default Cart;
