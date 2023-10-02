import React, { useContext } from "react";
import MyContext from "./MyContext";

const MyComponent = () => {
  const contextData = useContext(MyContext);
  const { name, age } = contextData;
  return (
    <div>
      <h2>Displaying global data provided by provider to context</h2>
      <label>Name : {name}</label>
      <br></br>
      <label>Age : {age}</label>
    </div>
  );
};

export default MyComponent;
