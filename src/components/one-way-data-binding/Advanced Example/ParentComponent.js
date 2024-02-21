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
    <div className="w-4/12 mx-auto m-2 p-3 my-36 bg-pink-200 text-center rounded-lg  hover:border border-4 border-blue-500">
      <h1 className="font-bold"> Example of One way data binding</h1>

      <h1> Parent</h1>
      <button onClick={changeProps} className="bg-red-500 m-3 p-3 rounded-md">
        {" "}
        Change Props{" "}
      </button>
      <ChildComponent propsToPass={propsToPass} />
    </div>
  );
};

export default ParentComponent;
