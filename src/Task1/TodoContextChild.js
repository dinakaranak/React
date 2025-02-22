import React, { useContext  } from 'react'
import { dataContext } from './TodoContextHook';

function TodoContextChild() {
     const {todos, dispatch} = useContext(dataContext);
       
  return (
    <div>
            <p>
                {todos.map((todo, index) => (
                    <p key={index} style={{marginTop:"20px"}}>{todo} 
                  <button onClick={() => dispatch({ type: "delete", payload: index })} style={{marginLeft:"50px"}}>Delete</button>
                  </p>
                ))}
            </p>
    </div>
  )
}

export default TodoContextChild