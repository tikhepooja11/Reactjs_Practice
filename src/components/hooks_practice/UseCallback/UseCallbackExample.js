//  The useCallback hook in React is used to memoize functions, preventing unnecessary re-creation of the function on each render. It is particularly useful when passing functions as props to child components to optimize performance

import React, { useState, useCallback } from "react";
const App = () => {
  const [count, setCount] = useState(0);

  // Without useCallback: a new function is created on every render
  const handleClickWithoutUseCallback = () => {
    console.log("re-creates on every render cycle");
    setCount(count + 1);
  };

  // With useCallback: the function is memoized and only re-created when dependencies change
  const handleClick = useCallback(() => {
    console.log("useCallback function called");
    setCount(count + 1);
  }, [count]); // Dependency array specifies when the function should be re-created

  return (
    <div className="text-center mx-auto w-4/12 my-36 p-2 m-2 bg-green-300">
      <h1>Click Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleClickWithoutUseCallback}>Increment</button>
      <br></br>
      <ClickCounter onClick={handleClick} />
    </div>
  );
};

export default App;

const ClickCounter = ({ onClick }) => {
  console.log("ClickCounter component rendering");

  return <button onClick={onClick}>Click me</button>;
};

//   Without using useCallback, a new function would be created on every render of the App component.
//  By wrapping it with useCallback and specifying [count] as a dependency array, the function is memoized and only re-created when the count state changes.
//  This can be beneficial in scenarios where the function is passed down as a prop to child components to avoid unnecessary re-renders.
