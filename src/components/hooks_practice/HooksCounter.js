import React, { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

const HooksCounter = () => {
  const [count, setCount] = useState(0);
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };

  //If we want to increment a value based on previous value always pass function with previous state as an argument
  return (
    <div style={{ background: "lightgreen" }}>
      <h2>Example of HooksCounter</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment : <BiPlusMedical className="icon" />
      </button>

      <button onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
        Decrement : <FaMinus className="icon" />
      </button>

      <button onClick={incrementByFive}>Increment by 5 </button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h1>{count}</h1>
    </div>
  );
};

export default HooksCounter;

//  checking for change
