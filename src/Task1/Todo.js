import React, { useReducer, useState } from 'react';

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

function Todo() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [input, setInput] = useState("");

    return (
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
            <p>
                {todos.map((todo, index) => (
                    <p key={index} style={{marginTop:"20px"}}>{todo} 
                  <button onClick={() => dispatch({ type: "delete", payload: index })} style={{marginLeft:"50px"}}>Delete</button>
                  </p>
                ))}
            </p>
        </div>
    );
}

export default Todo;
