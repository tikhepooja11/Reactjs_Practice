// b. Variables Derived from State:


import React, { useState } from 'react';

const DerivedVariableExample = () => {
  const [count, setCount] = useState(0);

  // Derived variable: square
  const square = count * count;

  return (
    <div>
      <p>Count: {count}</p>
      <p>Square of Count: {square}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default DerivedVariableExample;
