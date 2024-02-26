import React from "react";

const ChildComponent = ({ item, onItemClick }) => {
  console.log(`ChildComponent for ${item} rendering`);

  return (
    <li>
      {/* Button triggers the action without unnecessary re-creation of the callback */}
      <button onClick={() => onItemClick(item)}>Click me ({item})</button>
    </li>
  );
};
export default ChildComponent;
