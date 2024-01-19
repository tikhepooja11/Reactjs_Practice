// c. Use useMemo() to Optimize Performance:


import React, { useState, useMemo } from 'react';

const MemoizedExample = () => {
  const [count, setCount] = useState(0);

  const squaredValue = useMemo(() => {
    console.log('Expensive computation');
    return count * count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Square of Count (Memoized): {squaredValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MemoizedExample;
