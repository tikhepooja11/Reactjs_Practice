// import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

// const UseLayoutExample = () => {
//   const [width, setWidth] = useState(200);
//   const boxRef = useRef(null);

//   // useEffect to update state asynchronously
//   useEffect(() => {
//     console.log("useEffect: Updated width asynchronously");
//   }, [width]);

//   // useLayoutEffect to measure the width synchronously after DOM mutations
//   useLayoutEffect(() => {
//     console.log("useLayoutEffect: Measuring width synchronously");
//     const newWidth = boxRef.current.offsetWidth;
//     setWidth(newWidth);
//   }, [width]);

//   const handleResize = () => {
//     setWidth((prevWidth) => prevWidth + 10);
//   };

//   let updatedWidth = `${width}px`;
//   return (
//     <div className="text-center mx-auto my-36 w-4/12 m-3 p-3 bg-green-200">
//       <h2>Resizable Box</h2>
//       <div
//         ref={boxRef}
//         className="border border-black p-4"
//         style={{
//           width: `${width}px`,
//           height: "100px",
//         }}
//       >
//         Resizable Content
//       </div>
//       <button onClick={handleResize}>Resize</button>
//     </div>
//   );
// };

// export default UseLayoutExample;
