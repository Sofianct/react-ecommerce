import React, { useEffect, useState } from "react";
import "./products.css";
import { Grid, Text, Row } from "@nextui-org/react";
import ProductCard from "../ProductCard/ProductCard";
import { Toaster } from "react-hot-toast";
import { url } from "../Constants";

const Products = () => {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProd(data);
      });
  }, []);

  return (
    <Grid.Container
      className="gridCont"
      css={{
        width: "80%",
        minHeight: "100vh",
      }}
      gap={2}
      justify="flex-start"
      align="center"
    >
      <Row justify="center" align="center">
        <Text
          h1
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Mechanical Keyboards
        </Text>
      </Row>
      {prod.map((product) => {
        return (
          <Grid xs={6} sm={4} md={3} key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
            />
            {/* Toast "Added to cart" */}
            <Toaster />
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

export default Products;
