import React, { useContext } from "react";
import { Drawer } from "@mui/material";
import "./cart.css";
import { Link } from "react-router-dom";

import { ContextDrawer } from "../../context/DrawerContext";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/Cartcontext";
import { Text, Button } from "@nextui-org/react";

const CartDrawer = () => {
  const { open, setOpen } = useContext(ContextDrawer);
  const { cart } = useContext(CartContext);

  const total = (arr) => {
    const itemsPrice = arr.reduce((a, c) => a + c.qty * c.price, 0);
    return itemsPrice;
  };

  return (
    <Drawer
      open={open}
      anchor="right"
      PaperProps={{ style: { width: "30%" } }}
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
        <div className="text-center mt-5">Cart is empty</div>
      ) : (
        <div className="checkoutBtn">
          <table className="table table-sm ">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
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
          <div>
            <hr className="my-4" />
            <Link to="/checkout">
              <Button
                size="lg"
                color="secondary"
                onClick={() => setOpen(false)}
                auto
              >
                Checkout · &nbsp; <span>{total(cart)},00 €</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Drawer>
  );
};

export default CartDrawer;
