import React from "react";

const ChildComponent = ({ propsToPass }) => {
  return (
    <div>
      <h1>Child </h1>
      <h1>Props received from parent - {propsToPass}</h1>
    </div>
  );
};

export default ChildComponent;
