import React, { createContext, useReducer, useState } from 'react'
import TodoContextChild from './TodoContextChild'


export let dataContext = createContext()
function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
           
        return state.filter((_, index) => index !== action.payload);    
        default:
            return state;
    }
}
function TodoContextHook() {
      const [todos, dispatch] = useReducer(reducer, []);
       const [input, setInput] = useState("");
  return (
    <dataContext.Provider value={{ todos, dispatch }}>
    <div>
    <h2>Todo List</h2>
    <input 
                type='text' 
                placeholder='Type Here.....'
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => {
                if (input.trim() !== "") {
                    dispatch({ type: "add", payload: input });
                    setInput(""); // Clear input after adding
                }
            }}>Add</button>

    </div>
    <TodoContextChild />
    </dataContext.Provider>
  )
}

export default TodoContextHook