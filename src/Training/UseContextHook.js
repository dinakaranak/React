import React, { createContext } from 'react'
import UseContextChild from './UseContextChild'

export let dataContext = createContext()
function UseContextHook() {

    let x = {
        name:"Dhinakaran",
        age:20
    }
 let skills = ["HTML","JS"]
 function sample(){
    console.log("samle functin");
    
 }
  return (
    <dataContext.Provider value={{x,skills,sample}}>
    <div>UseContextHook</div>
    <UseContextChild />
    </dataContext.Provider>
  )
}

export default UseContextHook