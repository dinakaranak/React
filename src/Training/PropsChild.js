import React from 'react'
import PropsChild2 from './PropsChild2';

function PropsChild(props) {
    console.log(props);

    let user1={
        userName:"test",
        mail:"test@gmail.com"
    }

    let arr = [45,67]
    
  return (
    <div>PropsChild
        {/* {props.a} */}
        <h1>
        {props.user.userName}
        </h1>
        <PropsChild2  user1={user1}  arr={arr}/>
    </div>
  )
}

export default PropsChild