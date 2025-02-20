import React, { useReducer, useState } from 'react'

function reducer(todo,task){
    switch(task.type){
        case "add":
            return {listItems:[...todo.listItems,task.input]};
            case "delete":
           
            return {listItems:[todo.listItems.filter((_, index) => index !== task.input)]};     
        default:
            return todo;    
    }
}

function TodoList() {
    const[todo, dispatch]=useReducer(reducer,{listItems:[]})
    const[list, setList]=useState("")
    function handleAdd(){
        {dispatch({ type :"add", input:list})}
        setList("")
    }

  return (
    <div>TodoList
        <input type='text' value={list} onChange={(e)=>setList(e.target.value)}></input>
        
        <button onClick={handleAdd}>Add</button>
      {/* <p> {todo.listItems}</p>  */}
         <p>
                {todo.listItems.map((too, index) => (
                    <p key={index}>{too} <button onClick={() => dispatch({ type: "delete", input: index})} style={{marginLeft:"50px"}}>Delete</button>  </p>
                   
                ))}
                
            </p> 
    


    </div>
  );
}

export default TodoList