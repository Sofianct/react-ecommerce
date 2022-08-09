import React from "react";
import Products from "../Products/Products";
import { Grid } from "@nextui-org/react";
import HomeProducts from "../HomeProducts/HomeProducts";
// import Banner from "../Banner/Banner";

function HomePage() {
  return (
    <Grid.Container justify="center">
      {/* <Banner /> */}
      <HomeProducts />
      <Products />
    </Grid.Container>
  );
}

export default HomePage;
