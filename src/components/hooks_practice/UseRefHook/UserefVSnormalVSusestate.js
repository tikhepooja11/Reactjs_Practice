import React, { useState, useRef } from "react";

//  differentiates between normal JS variable , state variable and useRef variable & indicates the need of useref
const UserefVSnormalVSusestate = () => {
  let normalJS = 1;

  const [stateVar, setStateVar] = useState(1);
  console.log("rendering...");
  console.log("StateVar : " + stateVar);

  const useRefVar = useRef(1);
  console.log("useRef var :" + useRefVar.current);

  return (
    <div className="flex">
      <h1 className=" mt-40 font-bold text-center">
        Example of UserefVSnormalVSusestate
      </h1>
      <div className="m-10 p-5 bg-green-100 border border-black w-96 h-96">
        <button
          className="bg-green-400 m-2 p-3"
          onClick={() => {
            normalJS = normalJS + 1;
            console.log("normalJS :" + normalJS);
          }}
        >
          Increment Normal JS var : {normalJS}
        </button>
      </div>

      <div className="m-10 p-5 bg-orange-100 border border-black w-96 h-96">
        <button
          className="bg-orange-400 m-2 p-3"
          onClick={() => {
            setStateVar(stateVar + 1);
          }}
        >
          Increment state var : {stateVar}
        </button>
      </div>

      <div className="m-10 p-5 bg-sky-100 border border-black w-96 h-96">
        <button
          className="bg-sky-400 m-2 p-3"
          onClick={() => {
            useRefVar.current = useRefVar.current + 1;
            console.log("Increment useRef Var :", useRefVar.current);
          }}
        >
          Increment useRef Var : {useRefVar.current}
        </button>
      </div>
    </div>
  );
};

export default UserefVSnormalVSusestate;

// useRef -> If we want to change the variable value like useState (using setFun) but dont want to re-render the component after updating the value. ie. unlike the useState.

// scenario with normal behaviour ->
// If we have two variables first is normal js variable declared using let & react state variable created using useState.
// & If I updated the value of normal variable on button click it updates i  background but never updated the UI as does not re-renders the page unlike the state variable
// after sometime if i updates the state variable using setfun then on every re-render component loads freshly so that normal variable gets updated with initial value it has assigned with.

// Use of useRef ->
// If we dont want our normal variable to be resetted on updating state variable using setfun then we need to use useRef.
// but after increasing ref variable it increases in background but does not updates the UI on its own, we need to re-render the page by incrementing state variable so that react
// remembers the last updated value of ref variable and immediately displays on UI.

// syntax - const ref = useRef(initialValue)
// console.log(ref) // {current : initialValue}

// i.e when we creates variable with useRef then in actual it creates an object with current key setted to initial value.
