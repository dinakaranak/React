import React from 'react'

function PropsChild2({user1,arr}) {  // destructuring:
    console.log(user1);
    console.log(arr);
    
    
  return (
    <div>PropsChild2</div>
  )
}

export default PropsChild2