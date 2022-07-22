import React from "react";
import products from "../../products";
import { Grid, Text, Row } from "@nextui-org/react";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ cart, setCart }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
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
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.img}
            price={product.price}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </Grid.Container>
  );
};

export default Products;
