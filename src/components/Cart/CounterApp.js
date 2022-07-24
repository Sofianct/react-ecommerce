import React from "react";
import { Button } from "@nextui-org/react";

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const substractValue = () => {
    setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter((value = 0));
  };

  // const handleAdd = () => {
  //   console.log(value++);
  // }

  return (
    <>
      <Button auto onClick={addValue}>
        +
      </Button>
      <div>{counter}</div>
      <Button auto onClick={substractValue}>
        -
      </Button>
    </>
  );
};

export default CounterApp;
