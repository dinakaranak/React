import React, { useEffect, useState } from 'react'

function UseEffectHook() {  
    // useEffect hook is used for managing side effects or life cycles.
    // useEffect(function,[])
    // if we give [], the useeffect will run at initial rendering

    const [state, setState] = useState(false)
    const [num, setNum] = useState(0)
    useEffect(() => {
        console.log("executing");
        setTimeout(() => {
            setNum(num+1)
        },1000)
     
        
    },[])

  return (
    <div>UseEffectHook
        <button onClick={() => setNum(num+1)}>click</button>
        <button onClick={() => setState(! state)}>change</button>
        {num}
        <div>{state.toString()}</div>
    </div>
  )
}

export default UseEffectHook

// timer
