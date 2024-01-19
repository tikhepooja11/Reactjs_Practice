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



// --------------------------------------------   Another Example   ----------------------------------
// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [numArray, setNumArray] = useState([]);
//   const addNum = () => {
//     setNumArray([...numArray, numArray.length + 1]);
//   };
//   return (
//     <div className="App">
//       <h1>Example of useState with array</h1>
//       <button onClick={addNum}>Add number in array</button>
//       {numArray.length > 0 && (
//         <button onClick={() => setNumArray([])}>clear array</button>
//       )}
//       {numArray.length >= 0
//         ? numArray.map((num, index) => <li key={index}>{num}</li>)
//         : "Array is empty"}
//     </div>
//   );
// }

