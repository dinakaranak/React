import React, { useState } from 'react'

function Task09() {
    const [limit, setLimit] = useState(""); 
    const [primes, setPrimes] = useState([]); 
   
     const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const generatePrimes = () => {
        const numbers = Array.from({ length: Number(limit) }, (_, i) => i + 1)
                       .filter(isPrime);
                             
        setPrimes(numbers);
    };
  return (
    <div>  <div>
    <h2>Prime Number Generator</h2>
    <input 
        type="number" 
        placeholder="Enter a limit" 
        onChange={(event) => setLimit(event.target.value)}/>
    <button onClick={generatePrimes}>Generate</button>
    
    <p>
        {primes.map((num, index) => (
            <p key={index}>{num}</p>
        ))}
    </p>
</div></div>
  )
}

export default Task09