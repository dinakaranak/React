import React from 'react'
import { useParams } from 'react-router-dom'

function UseParamsHook() {
    let {id,name} = useParams()
    console.log(id,name);
    
  return (
    <div>UseParamsHook
        {name}
    </div>
  )
}

export default UseParamsHook