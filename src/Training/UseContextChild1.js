import React, { useContext } from 'react'
import { dataContext } from './UseContextHook'

function UseContextChild1() {
  let {x,skills,sample} = useContext(dataContext)
  console.log(x,skills);
  sample()
  
  return (
    <div>UseContextChild1
      {/* {x.x.name} */}
      {x.name}
    </div>
  )
}

export default UseContextChild1