import React, { useEffect, useState } from "react";

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

//  The dependencies array (second argument to useEffect) is optional,
//  but adding dependencies helps ensure the effect runs when specific values change.

// Example 2 ------------------------------------------------------>

// import React, { useState, useEffect } from "react";

// const MyComponent = () => {
//   const [variable1, setVariable1] = useState("Initial Value 1");
//   const [variable2, setVariable2] = useState("Initial Value 2");

//   // useEffect with two variables as dependencies
//   useEffect(() => {
//     // This code will run when either variable1 or variable2 changes

//     // For demonstration purposes, let's log the values to the console
//     console.log("Variable 1:", variable1);
//     console.log("Variable 2:", variable2);

//     // You can perform other side effects or asynchronous operations here

//     // Make sure to clean up any resources if needed in a cleanup function

//     // The dependencies array (second argument to useEffect) is optional,
//     // but adding dependencies helps ensure the effect runs when specific values change.

//     // If you want an effect to run only once (similar to componentDidMount in class components),
//     // pass an empty dependencies array: useEffect(() => { /* effect code */ }, []);
//   }, [variable1, variable2]); // Dependencies array

//   return (
//     <div>
//       <p>Variable 1: {variable1}</p>
//       <p>Variable 2: {variable2}</p>

//       <button onClick={() => setVariable1("New Value 1")}>
//         Change Variable 1
//       </button>

//       <button onClick={() => setVariable2("New Value 2")}>
//         Change Variable 2
//       </button>
//     </div>
//   );
// };

// export default MyComponent;
