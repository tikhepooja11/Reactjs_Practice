//  Lifting a state up -> It means lifting a state up to a common ancestor or higher level component, so that it can be shared with all the child components
//  who needs to access it.

//  Purpose - It is used when multiple components need access to the same piece of state.
//  By lifting the state to a common ancestor, you avoid duplicating state in multiple components.

//  In this example, we have counter application in which state count is lifted up to a common ancestor "CounterApp".
//  And both DisplayCounter and IncrementButton components accepts count state  & its updating function IncrementCount as props respectively.

// CounterApp
import React, { useState } from "react";
import DisplayCounter from "./DisplayCounter";
import IncrementButton from "./IncrementButton";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <DisplayCounter count={count} />
      <IncrementButton onIncrement={incrementCount} />
    </div>
  );
};

export default CounterApp;
