import React from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  //   const globalData = "Pooja";
  const globalData = {
    name: "Pooja Tikhe",
    age: 20,
  };

  return <MyContext.Provider value={globalData}>{children}</MyContext.Provider>;
};

export default MyProvider;
