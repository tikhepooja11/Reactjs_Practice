//  In this example, we have counter application in which state count is lifted up to a common ancestor "CounterApp".
//  And both DisplayCounter and IncrementButton components accepts count state  & its updating function IncrementCount as props respectively.

// CounterApp
import React, { useState } from 'react';
import DisplayCounter from './DisplayCounter';
import IncrementButton from './IncrementButton';

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


// DisplayCounter
import React from 'react';

const DisplayCounter = ({ count }) => {
  return <p>Count: {count}</p>;
};

export default DisplayCounter;



// IncrementButton
import React from 'react';

const IncrementButton = ({ onIncrement }) => {
  return <button onClick={onIncrement}>Increment</button>;
};

export default IncrementButton;
