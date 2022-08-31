import React from "react";
import { Button } from "@nextui-org/react";

import "./cartCounter.css";

const CartCounter = ({ addValue, substractValue, counter }) => {
  return (
    <Button.Group size="xs">
      <Button onClick={substractValue}>-</Button>
      <Button disabled>{counter}</Button>
      <Button onClick={addValue}>+</Button>
    </Button.Group>
  );
};

export default CartCounter;
