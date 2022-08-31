import React, { useContext, useState, useEffect } from "react";
import "./productCard.css";
import { Card, Text, Row } from "@nextui-org/react";
import toast from "react-hot-toast";
import { ContextDrawer } from "../../context/DrawerContext";
import { CartContext } from "../../context/Cartcontext";
import Button from "react-bootstrap/Button";

// function simulateNetworkRequest() {
//   return new Promise((resolve) => setTimeout(resolve, 1000));
// }

const ProductCard = ({ id, title, img, price }) => {
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (isLoading) {
  //     simulateNetworkRequest().then(() => {
  //       setLoading(false);
  //     });
  //   }
  // }, [isLoading]);

  // const handleClick = () => setLoading(true);

  const { cart, setCart } = useContext(CartContext);
  const { setOpen } = useContext(ContextDrawer);
  const addProduct = () => {
    const prodExist = cart.find((e) => e.id === id);

    const Toast = () => {
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
    };

    if (prodExist) {
      setCart(
        cart.map((e) =>
          e.id === id ? { ...prodExist, qty: prodExist.qty + 1 } : e
        )
      );
      //Toast

      Toast();
    } else {
      setCart([
        ...cart,
        { id: id, title: title, price: price, img: img, qty: 1 },
      ]);
      //Toast
      Toast();
    }
  };
  const itemPrice = (price) => {
    return "$" + price.toFixed(2);
  };

  return (
    <>
      <Card isPressable className="card">
        <Card.Body>
          <Card.Image showSkeleton src={img} objectFit="cover" alt={title} />
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
              {itemPrice(price)}
            </Text>
            <Row wrap="wrap" justify="center" align="center">
              <div className="d-grid gap-2">
                <Button className="addToCartBtn" onClick={addProduct}>
                  Add to cart
                </Button>
              </div>

              {/* <Button
                variant="secondary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Add to cart"}
              </Button> */}
            </Row>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProductCard;
