//  Derived state means deriving the values based on existing state or props  to avoid unnecessary duplication and optimize performance as well.

// This can be achive by three ways ->
    // 1.  Using single state to manage similar data
    // 2.  Variables derived from existing state
    // 3.  useMemo to optimise performance.


// 1.  Using single state to manage similar data

import React, { useState } from 'react';

const ComponentWithSingleState = () => {
  const [data, setData] = useState({
    value1: 'Some value',
    value2: 'Another value',
  });

  const updateValue1 = () => {
    setData((prevData) => ({
      ...prevData,
      value1: 'Updated value',
    }));
  };

  return (
    <div>
      <p>Value 1: {data.value1}</p>
      <p>Value 2: {data.value2}</p>
      <button onClick={updateValue1}>Update Value 1</button>
    </div>
  );
};

export default ComponentWithSingleState;
