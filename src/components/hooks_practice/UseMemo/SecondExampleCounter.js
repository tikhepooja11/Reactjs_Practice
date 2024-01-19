import React, { useMemo, useState } from "react";

const SecondExampleCounter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 9999999999) i++;
    // for (let i = 0; i < 9999999999999; i++) {}
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h1 className="text-center text-xl">Second example of useMemo</h1>
      <div>
        <button className="bg-sky-500 m-5 p-3" onClick={incrementOne}>
          CounterOne : {counterOne}
        </button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div>
        <button className="bg-sky-500 m-10 p-3" onClick={incrementTwo}>
          CounterTwo : {counterTwo}
        </button>
      </div>
    </div>
  );
};

export default SecondExampleCounter;

//  useMemo() can be used to memoize the result of a computation and only recompute it when the dependencies change. 
//  This can be beneficial for optimizing performance when dealing with expensive computations.

//  everytime counterOne updated isEven function gets called, which is a heavy operation -> preventing unnecessary recalculations when the component re-renders.
// i.e isEven function has dependent on counterone value, but it has nothing to do with counterOne then why counterTwo value should be changes slowly becase of it.
// so we need to memoised the value of iseven value on changing counterone  with passing dependency as counterONe value, so willl not show any effect in incrementing counterTwo.
