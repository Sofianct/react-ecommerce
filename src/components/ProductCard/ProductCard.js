import React from "react";
import { Grid, Card, Text, Row, Button } from "@nextui-org/react";

const ProductCard = ({ id, title, img, price, cart, setCart }) => {
  const addProduct = () => {
    const prodExist = cart.find((e) => e.id === id);

    if (prodExist) {
      setCart(
        cart.map((e) =>
          e.id === id ? { ...prodExist, qty: prodExist.qty + 1 } : e
        )
      );
    } else {
      setCart([
        ...cart,
        { id: id, title: title, price: price, img: img, qty: 1 },
      ]);
    }
  };
  //add counter

  //make a copy of cart, filter out the element, then setcart to the original with the e out🐽

  return (
    <>
      <Grid alignContent="center" xs={6} sm={3}>
        <Card>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              css={{ p: 0 }}
              showSkeleton
              src={img}
              objectFit="cover"
              alt={title}
            />
          </Card.Body>
          <Card.Footer
            css={{
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
                {title}
              </Text>
              <Text
                css={{
                  color: "$accents4",
                  fontWeight: "$semibold",
                  fontSize: "$md",
                }}
              >
                {price},00 €
              </Text>
              <Button onClick={addProduct} auto color="secondary" rounded flat>
                Add to cart
              </Button>
              {/* <Button onClick={removeFromCart}>Remove from cart</Button> */}
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
