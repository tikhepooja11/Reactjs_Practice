import React, { createContext, useContext } from "react";
const MyContext = createContext();
const MyProvider = ({ children }) => {
  const globalData = {
    name: "Pooja Bhosale",
    age: 25,
  };

  return <MyContext.Provider value={globalData}>{children}</MyContext.Provider>;
};

const ContextHook = () => {
  const globalData = useContext(MyContext);
  if (!globalData) return <h1>No global data found</h1>;
  const { name, age } = globalData;
  return (
    <div>
      <h1>Displaying context data</h1>
      <p>
        {name}- {age}
      </p>
    </div>
  );
};

export { MyProvider, ContextHook };
