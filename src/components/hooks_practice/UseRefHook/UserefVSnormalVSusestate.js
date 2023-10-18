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
