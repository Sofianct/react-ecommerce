import React from "react";
import products from "../../products";
import { Grid, Card, Text, Row, Button } from "@nextui-org/react";

const Products = (props) => {
  const { onAdd } = props;
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
      {products.map((product) => (
        <Grid
          alignContent="center"
          xs={6}
          sm={6}
          md={4}
          lg={3}
          key={product.id}
        >
          <Card>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                css={{ p: 0 }}
                showSkeleton
                src={product.img}
                objectFit="cover"
                alt={product.title}
              />
            </Card.Body>
            <Card.Footer
              css={{
                justifyItems: "flex-start",
                backgroundColor: "#7828C8",
                p: 0,
              }}
            >
              <Row wrap="wrap" justify="space-around" align="center">
                <Text
                  b
                  css={{
                    color: "$accents2",
                    fontWeight: "$semibold",
                    fontSize: "$sm",
                    p: 0,
                  }}
                >
                  {product.title}
                </Text>
                <Text
                  css={{
                    color: "$accents4",
                    fontWeight: "$semibold",
                    fontSize: "$md",
                  }}
                >
                  {product.price},00 €
                </Text>
                <Button
                  // onClick={() => onAdd(product)}
                  auto
                  color="secondary"
                  rounded
                  flat
                >
                  Add to cart
                  {/* Create cart component and call it right here */}
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Products;

/* <h1>Products</h1>
  {products.map((product) => (
    <ProductCard key={product.id}>
      <div>{product.title}</div>
      <div>{product.price},00 €</div>
      <img className="product__img" src={product.img} alt={product.title} />
    </ProductCard>
  ))} */
