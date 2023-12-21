import React from "react";

const ArrayToListRender = ({ itemsArray }) => {
  return (
    <div>
      <h1>List rendering example</h1>
      {itemsArray ? (
        <ul>
          {itemsArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        "No Items Array Provided"
      )}
    </div>
  );
};

export default ArrayToListRender;

//  Note - Covers two topics list-Rendering  + Conditional Rendering
