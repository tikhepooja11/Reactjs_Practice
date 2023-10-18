import React, { useMemo, useState } from "react";
import { findPrime } from "./helperfun";

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log("rendering");
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const getThemeClasses = () => {
    return isDarkTheme
      ? " m-10 p-2 w-96 h-96 border border-black bg-gray-800 text-white"
      : " m-10 p-2 w-96 h-96 border border-black bg-white text-black";
  };

  const prime = useMemo(() => findPrime(number), [number]);
  return (
    <div className={getThemeClasses()}>
      <button className="bg-sky-400 m-11 p-3 " onClick={toggleTheme}>
        Toggle Theme
      </button>
      <hr></hr>
      <label>Enter the number to find nth prime</label>

      <input
        className=" m-3 p-3 border border-black"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <p>nth prime : {prime}</p>
    </div>
  );
};

export default UseMemoExample;

//  Every time i toggles the theme, the component re-renders by setIsDarkTheme().
//  It is ok to re-render but during re-renders its again and again calling findPrime function which can be heavy if i pass bigger number through that function
//  So, this might lead to website might gets handged due to tis heavy operation again and again on every render & degrades performance of page
//  i.e On toggling the theme it should just change the theme, why it is calculating prime number (executing that heavy operation ) again and again to make my screen freeze
//  sol solution is we have to cache the result of calculation between re-rendering of components using useMemo
//  so useMemo takes a function which does the caculation as input and returns a value to be memoized
// memoized it / remember it and just change its value when text input number changes, for this pass second argument as dependency in square brackets to change memoized value
