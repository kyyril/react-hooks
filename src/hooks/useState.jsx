// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";

const UseState = () => {
  const [state, setState] = useState({ count: 0, name: "wahyu" });
  const { count, name } = state;

  const handleDecrement = () => {
    const newCount = count - 1;
    setState({ ...state, count: newCount });
  };
  const handleIncrement = () => {
    setState((previousState) => {
      return { ...previousState, count: previousState.count + 1 };
    });
  };

  return (
    <div className="container">
      <div className="hooks">UseState</div>
      <button onClick={handleDecrement}>- decrement</button>
      <div>{count}</div>
      <div>{name}</div>
      <button onClick={handleIncrement}>+ increment</button>
    </div>
  );
};

export default UseState;
