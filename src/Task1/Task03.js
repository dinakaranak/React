import React, { useState } from 'react'

function Task03() {
     let [height, setHeight] = useState()
        let [weight, setWeight] = useState()
        let [calculate, setCalculate] = useState()
        function bmiCalc() {
            calculate = weight / (height * height);
            if (calculate <= 18.5) {
                setCalculate(`${calculate} is underweighted`)
            }
            else if (calculate <= 25 && calculate > 18.5) {
                setCalculate(`${calculate} is Normal`)
            }
            else if (calculate > 25 && calculate <= 30) {
                setCalculate(`${calculate} is Overweighted`)
            }
            else {
                setCalculate(`${calculate} is Obesity`)
            }
        }
  return (
    <div>
            <div>
                <h1>BMI CALCULATOR</h1>
                <input type='text' placeholder='Height' onChange={(event) => { setHeight(event.target.value) }} /><br></br>
                <input type='text' placeholder='Weight' onChange={(event) => { setWeight(event.target.value) }} /><br></br>
                <button onClick={bmiCalc}>calculate</button>
                <p>{calculate}</p>
            </div>
    </div>
  )
}

export default Task03