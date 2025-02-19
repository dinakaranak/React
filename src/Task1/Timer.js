import { useState, useEffect } from "react";

function Timer() {
    const [time, setTime]=useState()
    const [targetDate, setTargetDate] = useState()
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
   
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  function TimeSet(){
    console.log(typeof time);
    
    const target= new Date(time).getTime(); 
    setTargetDate(target)
  }


  useEffect(() => {
    const timer = setInterval(() => {
        
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [targetDate]);

  return (
    <div>
      <h2>Countdown to 21st Feb 2025</h2>
      <input type='datetime-local' onChange={(e)=>setTime(e.target.value)}></input>
      <button onClick={TimeSet}>click</button>
      <p>
         {timeLeft.days} days {timeLeft.hours}hrs : {timeLeft.minutes}mins : {timeLeft.seconds} sec
        </p>
    </div>
  );
}

export default Timer;
