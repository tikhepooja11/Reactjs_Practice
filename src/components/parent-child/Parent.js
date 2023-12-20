import React from "react";
import Child from "./Child";

const Parent = () => {
  const parentMessage = "hello from parent";
  return (
    <div className="justify-center">
      <h1 className="p-2 m-2 bg-pink-300 w-1/3 text-center">
        Inside Parent component
      </h1>
      <Child name="Pooja Tikhe" profession="software developer" />
      <Child name="Aarti Tikhe" profession="DevOps Engineer" />
    </div>
  );
};

export default Parent;
