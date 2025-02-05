import React, { useState } from 'react'

function Task08() {
    const [limit, setLimit] = useState(""); // Store user input
    const [evenNumbers, setEvenNumbers] = useState([]); // Store even numbers

    const generateEvenNumbers = () => {
        const numbers = Array.from({ length: Number(limit) }, (_, i) => i + 1)
                             .filter(num => num % 2 === 0);
        setEvenNumbers(numbers);
    };
  return (
    <div>
          <div>
            <h2>Even Number Generator</h2>
            <input 
                type="number" 
                placeholder="Enter a limit" 
                onChange={(event) => setLimit(event.target.value)}
            />
            <button onClick={generateEvenNumbers}>Generate</button>
            
            <p>
                {evenNumbers.map((num, index) => (
                    <p key={index}>{num}</p>
                ))}
            </p>
        </div>
    </div>
  )
}

export default Task08