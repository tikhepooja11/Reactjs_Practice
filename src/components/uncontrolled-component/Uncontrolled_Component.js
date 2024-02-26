//  An uncontrolled component in React is a component where the state is not managed by React. 
//  Instead, the state is directly controlled by the DOM. Uncontrolled components are often used when you want to integrate React with non-React code

//  if we use useRef for inputs and let dom control the form elements unlike the form input to control the dom in controlled component
//  It will change the value as per input form element but will not re-render the component unlike on state variable change
import React, { useRef } from 'react';

const UncontrolledComponentExample = () => {
  const inputRef = useRef();

  const handleButtonClick = () => {
    alert('Uncontrolled Input Value: ' + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />

      <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  );
};

export default UncontrolledComponentExample;
