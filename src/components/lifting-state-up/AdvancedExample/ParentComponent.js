//  This example actually implements lifting state up real time functionality.
//  This implemens changing parent's passed props on button click event in child component.

import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [propsToPass, setPropsToPass] = useState("Atul");
  const updateProps = (newProps) => {
    setPropsToPass(newProps);
  };
  return (
    <div className="bg-pink-200 mx-auto my-10 w-6/12 p-5 text-center left-0 right-0">
      <h1>ParentComponent - {propsToPass} passed as props</h1>
      <ChildComponent myProps={propsToPass} updateProps={updateProps} />
    </div>
  );
};

export default ParentComponent;
