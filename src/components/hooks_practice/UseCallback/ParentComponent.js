import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button className="bg-sky-500 m-10 p-3" handleClick={incrementAge}>
        Increment Age
      </Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};
export default ParentComponent;

// React.Memo - higher  order component that prevents the component from being re-rendered if its props or state do not change.
// so to use react. memo wrap the component inside react.memo while exporting.
// useCallback (() =>{}, []) []= dependency array when this executes on changing dependency
// useCallback to memoize the function, we optimize performance by preventing unnecessary re-creation of the function on every render unless the dependencies (in this case, count) change.
