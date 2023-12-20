import React from "react";

const Child = (props) => {
  const { name, profession } = props;
  return (
    <div className="p-2 m-2 bg-green-300 text-center w-1/3">
      Child Information - Name : {name}, profession: {profession}
    </div>
  );
};

export default Child;
