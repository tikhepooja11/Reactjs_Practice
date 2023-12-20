import React, { useEffect, useState } from 'react';

const MyComponent = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title with the current count and a prop value
    document.title = `Count: ${count} | ${props.title}`;
  }, [count, props.title]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default MyComponent;


//  The effect runs whenever count or props.title changes.
//  It updates the document title with a combination of the current count and the title prop.
