import React from "react";
// import HomeProducts from "../HomeProducts/HomeProducts";
import { Grid } from "@nextui-org/react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeProducts from "../HomeProducts/HomeProducts";
import { Toaster } from "react-hot-toast";
// import Products from "../Products/Products";

function HomePage() {
  return (
    <Grid.Container justify="center">
      <HomeBanner />
      <HomeProducts />
      <Toaster />
    </Grid.Container>
  );
}

export default HomePage;
