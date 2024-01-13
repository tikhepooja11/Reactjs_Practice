// Parent Component
//  data flows from parent to child

const ParentComponent = () => {
  const dataToPass = "Hello from parent!";
  return <ChildComponent message={dataToPass} />;
};

// Action handleOnclick also flows from Parent to child - 2
//  In this example, the child communicates with the parent by calling the provided callback function (handleChildClick).

// const ParentComponent = () => {
//   const handleChildClick = () => {
//     console.log("Child component clicked!");
//   };

//   return <ChildComponent onClick={handleChildClick} />;
// };

// Conclusion -> This means that changes in the parent component can affect the child components, but not vice versa.
