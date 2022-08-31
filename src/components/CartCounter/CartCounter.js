import React from "react";
import { Button } from "@nextui-org/react";

import "./cartCounter.css";

const CartCounter = ({ addValue, substractValue, counter }) => {
  return (
    <Button.Group size="xs">
      <Button className="counterBtn" onClick={substractValue}>
        -
      </Button>
      <Button disabled>{counter}</Button>
      <Button className="counterBtn" onClick={addValue}>
        +
      </Button>
    </Button.Group>
  );
};

export default CartCounter;
