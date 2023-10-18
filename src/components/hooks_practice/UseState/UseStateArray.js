import React, { useState } from "react";

const UseStateArray = () => {
  const [numArray, setNumArray] = useState([]);
  const addNum = () => {
    setNumArray([
      ...numArray,
      { id: numArray.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div style={{ background: "yellow" }}>
      <h2>Example of UseStateArray</h2>
      <p>Printing random array numbers</p>
      <button onClick={addNum}>Add new random number</button>
      <ul>
        {numArray.map((item) => (
          <li key={item.id}> {item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateArray;
