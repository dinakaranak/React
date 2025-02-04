import React from 'react'


function Basic() {
    let x=67
    let name = "Dinakaran"
    let active = true
    let arr = [23,45,67,89]

    let obj = {
        name:"Dhinakaran",
        course:"React"
    }
    function display(){
        let a=90
        return "Welcme to react js"
    }
    function factorial(num){
        let fact=1;
        for(let i=1; i<=num; i++){
            fact*=i;
        }
        return fact
    }
   factorial(5)

  return (
    <div>Basic
        {x}
        <h1>{name}</h1>
        {active.toString()}
        <div>{arr.map(i => (
            <li>{i}</li>
        ))}</div>
        <div>{obj.name},{obj.course}</div>
        <div>{display()}</div>
        <div>{display()}</div>
        <div>{factorial(5)}</div>
        <div>
            <button>click</button>
        </div>
       
    </div>
  )
}

export default Basic