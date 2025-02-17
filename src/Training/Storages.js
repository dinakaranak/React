import React from 'react'

function Storages() {
    localStorage.setItem("name","Dinakaran")
    sessionStorage.setItem("name", "Dinakaran")

  return (
    <div>Storages

        <button onClick={() => localStorage.removeItem("name")}>remove</button>
        <button onClick={() => localStorage.clear()}>remove</button>
        {sessionStorage.getItem("name")}
        
    </div>
  )
}

export default Storages