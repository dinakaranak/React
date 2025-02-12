import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Routing() {

    let nav = useNavigate()

    function handleNavigation(){
        console.log('navigating....');

        nav('/task4')
        
    }
    function handleNav(){
        nav('/task8')
    }
    function task11(){
        nav('/task11')
    }

  return (
    <div>Routing
        <Link to="/task1">
        <button >task1</button>
        </Link>
        <a href='/task3'>task3</a>
        <button onClick={handleNavigation}>task4</button>
        <div>
            <Link to="/task5">
            <button>task5</button>
            </Link>
            <a href='/task6'>task6</a>
            <button onClick={handleNav}>task8</button>
        </div>
        <div>
            <a href='/task9'>task9</a>
            <Link to="/task10">
            <button>task10</button></Link>
            <button onClick={task11}>task11</button>
        </div>
        <div>
            <Link to='task12'>
            <button>task12</button></Link>
        </div>

    </div>
  )
}

export default Routing