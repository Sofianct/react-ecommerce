import React, { useContext } from "react";
import { Drawer } from "@mui/material";
import "./cart.css";
import { Link } from "react-router-dom";

import { ContextDrawer } from "../../context/DrawerContext";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/Cartcontext";
import { Text, Button } from "@nextui-org/react";

const Cart = () => {
  const { open, setOpen } = useContext(ContextDrawer);
  const { cart } = useContext(CartContext);

  const total = (arr) => {
    const itemsPrice = arr.reduce((a, c) => a + c.qty * c.price, 0);
    return "$" + itemsPrice.toFixed(2);
  };

  return (
    <Drawer
      open={open}
      anchor="right"
      // PaperProps={{ style: { width: "30%" } }}
      onClose={() => setOpen(false)}
    >
      <div className="flexContainer">
        <div className="flexContainer1">
          <i className="fa-solid fa-cart-shopping ml-4"></i>
          <Text
            align="center"
            css={{
              color: "text",
              fontWeight: "$semibold",
              fontSize: "$sm",
              ml: 4,
            }}
          >
            Cart
          </Text>
        </div>
        <div>
          <Button auto light onClick={() => setOpen(false)}>
            <i className="fa fa-close"></i>
          </Button>
        </div>
      </div>
      {cart.length === 0 ? (
        <div className="centerText">
          <div className="text-center mt-5 mb-5" style={{ width: "22rem" }}>
            Cart is empty
          </div>
          <Button size="lg" color="secondary" onClick={() => setOpen(false)}>
            Continue shopping
          </Button>
        </div>
      ) : (
        <>
          {cart.map(({ id, title, description, price, img, qty }) => {
            return (
              <CartItem
                key={id}
                id={id}
                title={title}
                description={description}
                img={img}
                price={price}
                qty={qty}
              />
            );
          })}

          <div className="checkoutBtn">
            <hr className="my-4" />
            <Link to="/checkout">
              <Button
                size="lg"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Checkout · &nbsp; <span>{total(cart)}</span>
              </Button>
            </Link>
          </div>
        </>
      )}
    </Drawer>
  );
};

export default Cart;
