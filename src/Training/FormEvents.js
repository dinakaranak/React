import React, { useState } from 'react'

function FormEvents() {
    const [details, setDetails] = useState({
        userName:"",
        pwd:"",
        num:"",
        gender:""
    })
    const [isChecked, setIsChecked] = useState(false)

    function handleChange(e){
        console.log({...details});
        
        setDetails({...details,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(details, isChecked);
        
    }

  return (
    <div>FormEvents
        <form onSubmit={handleSubmit}>
        <input type='text' name='userName' onChange={handleChange} />
        <input type='password' name='pwd' onChange={handleChange} />
        <select onChange={handleChange} name='num'>
            <option>one</option>
            <option>two</option>
            <option>three</option>
            <option>four</option>
        </select>
        <input type='radio' name='gender' onChange={handleChange} value='male'></input>
        <label>Male</label>
        <input type='radio' name='gender' onChange={handleChange} value="female"></input>
        <label>female</label>
        <input type='checkbox' checked={isChecked} onChange={() => {setIsChecked(! isChecked)}}/>
        <label>agree</label>
        <button >click</button>
        </form>
    </div>
  )
}

export default FormEvents