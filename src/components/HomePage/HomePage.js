import React from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import { Grid } from "@nextui-org/react";
// import Banner from "../Banner/Banner";

function HomePage() {
  return (
    <Grid.Container justify="center">
      {/* <Banner /> */}
      <Cart />
      <Products />
    </Grid.Container>
  );
}

export default HomePage;
