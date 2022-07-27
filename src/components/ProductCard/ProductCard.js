import React from "react";
import "./productCard.css";
import { Card, Text, Row, Button } from "@nextui-org/react";
import toast from "react-hot-toast";

const ProductCard = ({ id, title, img, price, cart, setCart, setOpen }) => {
  const addProduct = () => {
    const prodExist = cart.find((e) => e.id === id);

    if (prodExist) {
      setCart(
        cart.map((e) =>
          e.id === id ? { ...prodExist, qty: prodExist.qty + 1 } : e
        )
      );
      //Toast
      toast.custom(
        <div
          style={{ borderRadius: "10px" }}
          className="p-2 mb-2 bg-success text-white"
        >
          <button
            onClick={() => setOpen(true)}
            className="badge badge-success scale-up-center"
          >
            Added to cart
          </button>
        </div>
      );
    } else {
      setCart([
        ...cart,
        { id: id, title: title, price: price, img: img, qty: 1 },
      ]);
      //Toast
      toast.custom(
        <div
          style={{ borderRadius: "10px" }}
          className="p-2 mb-2 bg-success text-white scale-up-center"
        >
          <button onClick={() => setOpen(true)} className="badge badge-success">
            Added to cart
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <Card className="card">
        <Card.Body>
          <Card.Image
            showSkeleton
            src={img}
            objectFit="cover"
            height={100}
            alt={title}
          />
        </Card.Body>
        <Card.Footer
          css={{
            p: 0,
          }}
        >
          <Row wrap="wrap" justify="center" align="center">
            <Text
              b
              css={{
                color: "#11181C",
                fontWeight: "$semibold",
                fontSize: "$sm",
                margin: "15px",
              }}
            >
              {title}
            </Text>
            <Text
              css={{
                color: "#363636",
                fontWeight: "$semibold",
                fontSize: "$md",
                margin: "15px",
              }}
            >
              {price},00 €
            </Text>
            <Row wrap="wrap" justify="center" align="center">
              <Button onPress={addProduct} color="success" auto ghost>
                Add to cart
              </Button>
            </Row>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProductCard;
