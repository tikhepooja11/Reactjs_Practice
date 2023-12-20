import React, { useState, useEffect } from "react";

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setMilliseconds(milliseconds + 100);
    }, 100);

    return () => clearInterval(timerInterval);
  }, [milliseconds]);

  const handleReset = () => {
    setMilliseconds(0);
  };

  const formatTime = (time) => {
    console.log(time);

    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const centiseconds = Math.floor((time % 1000) / 10);

    return `${minutes}m ${seconds}s ${centiseconds}ms`;
  };

  return (
    <div>
      <div className="bg-sky-200 h-50 w-50 text-center p-5 m-5">
        <h1 className="font-bold">Timer: {formatTime(milliseconds)}</h1>
        <button
          className="bg-green-500  p-4 mx-auto mt-8  rounded-lg"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
