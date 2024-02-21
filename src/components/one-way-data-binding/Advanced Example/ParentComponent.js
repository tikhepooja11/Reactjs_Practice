//  Note - This example is similar to lifting the state up advanced example. There as button click action in child component
//  needs to communicate to parent component, so we are listing it to lifting the state up category, as child state mst be available for the parent to be known.

//  While here as parent only changing props on button click action, so it maintains one way data binding.

import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [propsToPass, setPropsToPass] = useState("Atul");

  const changeProps = () => {
    setPropsToPass("Pooja");
  };

  return (
    <div>
      <h1> Parent</h1>
      <button onClick={changeProps}> Change Props </button>
      <ChildComponent propsToPass={propsToPass} />
    </div>
  );
};

export default ParentComponent;
