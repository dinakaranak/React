import React, { useReducer } from 'react'

function reducer(state,task){
    switch(task.type){
        case "inc":
            return {count:state.count+task.input}
        case "dec":
            return {count:state.count-task.input}
        case "reset":
            return {count:0}
    }


}

function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer,{count:0})
  return (
    <div>
        <button onClick={() => {dispatch({type:"inc", input:2})}}>+</button>
        {state.count}
        <button onClick={() => dispatch({type:"dec", input:3})}>-</button>
        <button onClick={() => {dispatch({type:"reset"})}}>reset</button>
        
    </div>
  )
}

export default UseReducerHook

// todo list
