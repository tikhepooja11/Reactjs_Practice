import React, { useReducer, useState } from "react";
import reducer from "./reducer";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

const UseReducerHook = () => {
  const initialValue = 0;
  // const[count, setCount] = useState(0)
  const [count, dispatch] = useReducer(reducer, initialValue); //   const[newState, dispatch]
  return (
    <div style={{ background: "orange" }}>
      <h2>Example of UseReducerHook</h2>
      <button onClick={() => dispatch({ type: "INC" })}>
        Increment : <BiPlusMedical className="icon" />
      </button>

      <button onClick={() => dispatch({ type: "DEC" })}>
        Decrement : <FaMinus className="icon" />
      </button>

      <h1>{count}</h1>
    </div>
  );
};

export default UseReducerHook;

// another way ->

// import React, {useReducer} from 'react'
// const initialState=0
// const reducer= (state, action) =>{
//   switch(action) {
//       case 'increment':
//         return state + 1
//       case 'decrement':
//         return state 1
//       case 'reset':
//         return initialState
//       default:
//         return state
//   }
// }
// function CounterOne() {

//     const [count, dispatch] = useReducer (reducer, initialState)
//     return (
//       <div> dispatch(value: any): void
//           <div>Count - {count}</div>
//           <button onClick={() => dispatch('increment')}>Increment</button>
//           <button onclick={()=> dispatch('decrement')}>Decrement</button>
//           <button onclick={() =>dispatch('reset')}>Reset</button>
//         </div>
//     )
//   }
