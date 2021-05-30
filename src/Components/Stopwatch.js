import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
      return () => clearInterval(interval); 
    }
  }, [isRunning, seconds]);

  const handleIsRunningChange = () => setIsRunning(prevState => !prevState);
  const handleReset = () => setSeconds(0);

  return ( 
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{ seconds }</span>
      <button onClick={handleIsRunningChange}>
        { isRunning ? 'Stop' : 'Start' }
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>    
  );
};

export default Stopwatch;