import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="container">
        <h2>Counter Value :{count}</h2>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
};
export default Counter;
