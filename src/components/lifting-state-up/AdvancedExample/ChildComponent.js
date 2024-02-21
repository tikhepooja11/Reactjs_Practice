import React from "react";

const ChildComponent = ({ myProps, updateProps }) => {
  const handleChangeProps = () => {
    const newValue = "Pooja";
    updateProps(newValue);
  };
  return (
    <div>
      <div className="bg-green-200 w-6/12 my-20 mx-auto left-0 right-0 p-5 text-center">
        <h1> child component - {myProps} received as props </h1>

        <button
          onClick={handleChangeProps}
          className="bg-green-500 border-black m-5 p-2 h-auto w-auto "
        >
          change props
        </button>
      </div>
    </div>
  );
};

export default ChildComponent;
