//  refs are a way to reference a React element or a class component instance created by React.createRef(). 
//  They provide a way to interact with the DOM directly or access the methods and properties of a class component.
//  used for tasks like focusing on an input element, triggering imperative animations, or accessing child component methods.

// There are two main types of refs in React: string refs (legacy) and callback refs. 


// Callback Refs:
import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const myInputRef = useRef(null);

  useEffect(() => {
    // Access the DOM or class component instance using the ref
    myInputRef.current.focus();
  }, []);

  return <input ref={myInputRef} />;
};
// In this example, useRef is used to create a myInputRef object, which can be assigned to the ref attribute of an element. The useEffect hook then uses this ref to focus on the input element when the component mounts.

// Forward Refs:
// The forwardRef function allows you to forward the ref from a parent component to a child component, even if the child component is a functional component.


import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const localRef = useRef();

  // Expose a method to the parent component using useImperativeHandle
  useImperativeHandle(ref, () => ({
    focus: () => {
      localRef.current.focus();
    },
    // Other methods or properties to expose
  }));

  return <input ref={localRef} />;
});

const ParentComponent = () => {
  const childRef = useRef();

  const handleClick = () => {
    // Access the exposed method in the child component
    childRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Focus on Child Input</button>
    </div>
  );
};
// In this example, forwardRef is used to create a higher-order component that can forward the ref to its child component (ChildComponent). The useImperativeHandle hook is then used to expose specific methods or properties of the child component to the parent component.
