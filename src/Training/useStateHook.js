import React, { useState } from 'react'


function UseStateHook() {
    // useState hook is used to handle the states with in a component. 
    // let [stateName,setFunction] = useState(initialValue)
    // setFunction is used to assign or update a value to state

    let [num, setNum] = useState(6)
    let [facto, setFacto] = useState()

    function AssignValue(){
        // setNum("hello")
        let fact =1
        for(let i=1;i<=num;i++){
            fact*=i
        }
        setFacto(fact)
    }
    return (
    <div><h1>useStateHook</h1>
        <input type='text' onChange={(event) => {setNum(event.target.value)}} />
        {/* <button onClick={() => {setNum(67)}}>cick</button> */}
        <button onClick={AssignValue}>click</button>
        {/* <h1>{num}</h1> */}
        {facto}

    </div>
  )
}


export default UseStateHook

// leap year or non leap year
// grade calculator
// bmi, emi, age calculator
// convert the sentence into title case
// convert first letter of each word into caps
// extract initials from given array of names