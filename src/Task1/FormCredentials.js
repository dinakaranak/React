import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormCredentials() {
    const [details, setDetails]=useState({
        userName:"",
        email:"",
        password:"",
        mobileNo:"",
    })
    function handleChange(e){
        setDetails({...details,[e.target.name]:e.target.value})
    }
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        navigate("/FormCred", { state: details })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h5>Name:
            <input type='text' name='userName' onChange={handleChange}></input></h5>
            <h5>Email:
            <input type='email' name='email' onChange={handleChange}></input></h5>
            <h5>Password:
            <input type='password' name='pwd' onChange={handleChange}></input></h5>
        <h5>Mobile No:
        <input type='number' name='mobileNo' onChange={handleChange}></input></h5>
            <br></br><button>Click</button>
        </form>


    </div>
  )
}

export default FormCredentials