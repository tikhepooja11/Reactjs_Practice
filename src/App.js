import logo from "./logo.svg";
import Header from "./components/header";
import "./App.css";
import ClassCounter from "./components/hooks_practice/ClassCounter";
import HooksCounter from "./components/hooks_practice/HooksCounter";
import UseStateObject from "./components/hooks_practice/useStateObject";
import UseStateArray from "./components/hooks_practice/UseStateArray";
import UseEffectBasic from "./components/hooks_practice/UseEffect/UseEffectBasic";
import FetchDataWithUseEffect from "./components/hooks_practice/UseEffect/FetchDataWithUseEffect";
import FetchDataSinglePost from "./components/hooks_practice/UseEffect/FetchDataSinglePost";
import FetchDataOnButtonClick from "./components/hooks_practice/UseEffect/FetchDataOnButtonClick";
import MyProvider from "./components/hooks_practice/UseContext/MyProvider";
import MyComponent from "./components/hooks_practice/UseContext/MyComponent";
import UseReducerHook from "./components/hooks_practice/UseReducer/UseReducerHook";
import ComponentA from "./components/hooks_practice/UseReducer/ReducerWithContext/ComponentA";
import ComponentB from "./components/hooks_practice/UseReducer/ReducerWithContext/ComponentB";
import ComponentC from "./components/hooks_practice/UseReducer/ReducerWithContext/ComponentC";

import React, { useReducer, createContext } from "react";
import DataFetchingWithUseState from "./components/hooks_practice/UseReducer/DataFetchingWithUseReducer/DataFetchingWithUseState";
import DataFetchingWithUseReducer from "./components/hooks_practice/UseReducer/DataFetchingWithUseReducer/DataFetchingWithUseReducer";
import UseMemoExample from "./components/hooks_practice/UseMemo/UseMemoExample";
import SecondExampleCounter from "./components/hooks_practice/UseMemo/SecondExampleCounter";
import ParentComponent from "./components/hooks_practice/UseCallback/ParentComponent";

function App() {
  return (
    <div>
      {/* <h1> Welcome to your React Hooks practice</h1>
      <p> My shopping cards</p>
      <Header name="Pooja Tikhe" title="first card"></Header>
      <hr></hr>
      <Header name="Aarti Tikhe" title="last card"></Header>
      <hr></hr>

      <ClassCounter />
      <hr></hr>

      <HooksCounter />
      <hr></hr>

      <UseStateObject />
      <hr></hr>

      <UseStateArray />
      <hr></hr>

      <UseEffectBasic />
      <hr></hr>

      <FetchDataWithUseEffect />
      <hr></hr>

      <FetchDataSinglePost />
      <hr></hr>

      <FetchDataOnButtonClick />
      <hr></hr>

      <MyProvider>
        <MyComponent />
      </MyProvider>
      <hr></hr>

      <UseReducerHook />
      <hr></hr>
      
      <h2>Comparison between useState & useReducer</h2>
      <DataFetchingWithUseState />
      <DataFetchingWithUseReducer />
      <hr></hr>

      <UseMemoExample />
      <hr></hr>

      <SecondExampleCounter />
      <hr></hr>*/}

      <ParentComponent />
    </div>
  );
}

export default App;
