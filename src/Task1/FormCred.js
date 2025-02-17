import React from 'react'
import { useLocation } from 'react-router-dom';

function FormCred() {
    const location = useLocation();
    const {  email, password } = location.state || {};
  
  return (
    <div>FormCred
         <h5>Email:
            <input type='email' name='email'></input></h5>
            <h5>Password:
            <input type='password' name='pwd'></input></h5>
            <button>Click</button>
    </div>
  )
}

export default FormCred