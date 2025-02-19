import { useState, useEffect } from "react";

function StopWatch() {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setTimeout(() => {
        setTime((prevTime) => prevTime + 10); // Increment by 10ms
      }, 10);
    }

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [time, isRunning]); // Runs whenever 'time' or 'isRunning' changes

  // Convert milliseconds into hh:mm:ss.ms format
  const formatTime = (milliseconds) => {
    const hrs = Math.floor(milliseconds / 3600000);
    const mins = Math.floor((milliseconds % 3600000) / 60000);
    const secs = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10); // Show only two digits of ms

    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}.${ms.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h2> Stopwatch</h2>
      <h1>{formatTime(time)}</h1>
      <button onClick={() => setIsRunning(true)} >
        Start
      </button>
      {/* <button onClick={() => setIsRunning(false)} >
        Pause
      </button> */}
    
     <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Resume"}
      </button>
      <button onClick={() => { setIsRunning(false); setTime(0); }}>
        Reset
      </button>
    </div>
  );
}

export default StopWatch;
