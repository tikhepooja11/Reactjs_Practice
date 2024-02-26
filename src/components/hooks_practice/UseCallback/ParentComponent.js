import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback: a new function is created on every render
  // const handleItemClick = (item) => {
  //   console.log(`Item "${item}" clicked`);
  //   setCount(count + 1);
  // };

  // With useCallback: the function is memoized and only re-created when dependencies change
  const handleItemClick = useCallback(
    (item) => {
      console.log(`Item "${item}" clicked`);
      setCount((prevCount) => prevCount + 1);
    },
    [setCount]
  ); // Dependency array specifies when the function should be re-created

  return (
    <div>
      <h1>Click Counter</h1>
      <p>Count: {count}</p>
      <ul>
        {/* Render a list of items with buttons */}
        {["Item 1", "Item 2", "Item 3"].map((item) => (
          <ChildComponent
            key={item}
            item={item}
            onItemClick={handleItemClick}
          />
        ))}
      </ul>
    </div>
  );
};
export default ParentComponent;

// React.Memo - higher  order component that prevents the component from being re-rendered if its props or state do not change.
// so to use react. memo wrap the component inside react.memo while exporting.
// useCallback (() =>{}, []) []= dependency array when this executes on changing dependency
// useCallback to memoize the function, we optimize performance by preventing unnecessary re-creation of the function on every render unless the dependencies (in this case, count) change.
