import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UseEffectWithAPI() {

    const [todosData,setTodosData] = useState()

    function getall(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            console.log(res.data);
            setTodosData(res.data)
            
        })
    }


    useEffect(()=>{getall()},[])
  return (
    <div>UseEffectWithAPI
        {todosData && todosData.map(i =>(
            <li>{i.title}
            {i.id}
            </li>
        ))}
    </div>
  )
}

export default UseEffectWithAPI
//npm i axios