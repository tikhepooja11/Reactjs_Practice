//  This example actually implements lifting state up real time functionality.
//  This implemens changing parent's passed props on button click event in child component.

//  Note - This example is similar to one-way-data-binding other example, only the diff here is child is modifying data on button click in child component, which updates the parent method for changing props,
//  so a last flow remains the same from parent -> child to maintain clear and predictable flow in react apps.
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
