import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Task01() {
    let [leap, setLeap] = useState()
    let [result, setResult] = useState()
    let location = useLocation()
    console.log(location.state);
    
    function leapYear() {
        if (leap % 4 == 0 && leap % 100 !== 0 || leap % 400 == 0) {
            setResult(`${leap} is leap year `)
        }
        else {
            setResult(`${leap} is not leap year`)
        }
    }
    return (
        <div>
            <div>
                <h1>LEAP YEAR OR NOT</h1>
                <input type='text' placeholder='Enter Year' onChange={(event) => { setLeap(event.target.value) }} /><br></br>
                <button onClick={leapYear}>Click</button>
                <p>{result}</p>
            </div>

        </div>
    )
}

export default Task01