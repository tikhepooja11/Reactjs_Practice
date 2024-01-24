//    useState -> use to remember state of the component each nd every time though the same component is called multiple times
//   incrementByFive() - when state updates depend on the previous state, it's generally safer to use the functional form of setCount to ensure correct behavior.
//   functional form of setCount - function with prevCount argument / fun that receives the previous state

//Asynchronous Nature:
// Due to the asynchronous nature of state updates in React, the actual state updates may not happen immediately. React batches state updates for performance reasons.
// Resulting State:
// After the loop completes, React will process the state updates, and the count variable will be incremented by 5. The final state value will be count + 5.

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

  // or const incrementByFive = () => (setCount((prevCount) => prevCount + 5)); but not or const incrementByFive = () => (setCount(count+ 5))


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

//  checking for change through  secondB

