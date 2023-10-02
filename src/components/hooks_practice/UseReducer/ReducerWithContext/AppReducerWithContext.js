import ComponentA from "./components/hooks_practice/UseReducer/ReducerWithContext/ComponentA";
import ComponentB from "./components/hooks_practice/UseReducer/ReducerWithContext/ComponentB";
import ComponentC from "./components/hooks_practice/UseReducer/ReducerWithContext/ComponentC";
import React, { useReducer, createContext } from "react";

export const CountContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      state = state + 1;
      return state;
    case "DEC":
      let newState = 0;
      state >= 1 ? (newState = state - 1) : (newState = 0);
      return newState;
    case "RESET":
      state = 0;
      return state;
    default:
      return state;
  }
};
const AppReducerWithContext = () => {
  const initialValue = 0;
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        Count : {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
};

export default AppReducerWithContext;
