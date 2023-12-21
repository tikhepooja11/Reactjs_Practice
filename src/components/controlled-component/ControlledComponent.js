import React, { useState } from "react";

const ControlledComponent = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        name="inputText"
        value={inputText}
        onChange={(e) => {
          console.log("rendering page");
          return setInputText(e.target.value);
        }}
        placeholder="enter any input"
        className="justify-center text-center border-4 border-black m-5 p-5"
      />
    </div>
  );
};

export default ControlledComponent;

//  controlled component is a form elemne twhose value is controlled by the state variable in react component.
//  so that once any inpujt will update that state variable thus component re-rendered with updated value.
