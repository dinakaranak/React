import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const [detail, setDetail]=useState({
        userName:"",
        email:"",
        pwd:"",
        gender:"",
        mobileNo:"",

    })
    function handleChange(e){
        setDetail({...detail,[e.target.name]:e.target.value})
    }
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        console.log(detail);
        navigate("/Out", { state: detail });
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h5>Name:</h5>
            <input type='text' name='userName' onChange={handleChange}></input>
            <h5>Email:</h5>
            <input type='email' name='email' onChange={handleChange}></input>
            <h5>Password:</h5>
            <input type='password' name='pwd' onChange={handleChange}></input>
            <h5>Gender:</h5>
            <input type='radio' name='gender' onChange={handleChange} value='male'></input>
          
        <label>Male</label>
        <input type='radio' name='gender' onChange={handleChange} value="female"></input>
        <label>female</label>
        <h5>Mobile No:</h5>
        <input type='number' name='mobileNo' onChange={handleChange}></input>
            <br></br><button>Click</button>
        </form>
    </div>
  )
}

export default SignIn