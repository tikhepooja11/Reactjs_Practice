import React, { useEffect, useState } from "react";

const UseEffectBasic = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = count; //  sets this title only on changing count value.
  }, [count]);
  return (
    <div style={{ background: "lightpink" }}>
      <h2>Basic example of useEffect</h2>
      <input type="text" name="username" placeholder="Enter name here"></input>
      <button onClick={() => setCount(count + 1)}>
        Increment count: {count}
      </button>
    </div>
  );
};

export default UseEffectBasic;
