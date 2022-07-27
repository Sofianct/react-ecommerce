import React from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import { Grid, GRID } from "@nextui-org/react";
// import Banner from "../Banner/Banner";

function HomePage({ cart, setCart, open, setOpen }) {
  return (
    <Grid.Container justify="center">
      {/* <Banner /> */}
      <Cart cart={cart} setCart={setCart} open={open} setOpen={setOpen} />
      <Products cart={cart} setCart={setCart} open={open} setOpen={setOpen} />
    </Grid.Container>
  );
}

export default HomePage;
