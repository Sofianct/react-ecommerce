import React from "react";
import "./products.css";
import products from "../../products";
import { Grid, Text, Row } from "@nextui-org/react";
import ProductCard from "../ProductCard/ProductCard";
import { Toaster } from "react-hot-toast";

const Products = ({ cart, setCart }) => {
  return (
    <Grid.Container
      css={{
        width: "60%",
        minHeight: "100vh",
      }}
      gap={2}
      justify="flex-start"
      align="center"
    >
      <Row>
        <Text
          b
          css={{
            color: "Black",
            fontWeight: "$semibold",
            fontSize: "$xl",
          }}
        >
          Keyboards
        </Text>
      </Row>
      {products.map((product) => {
        return (
          <Grid xs={6} sm={4} md={3} key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
              cart={cart}
              setCart={setCart}
            />
            {/* Message "Added to cart" */}
            <Toaster />
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

export default Products;
