import React, { useState } from 'react'
import * as yup from "yup"
import { ErrorMessage, Formik } from 'formik'

function ValidationUsingYup() {
    const [details, setDetails] = useState({
        userName:"",
        email:"",
        age:"",
        mobileNo:"",
    })
    const schema = yup.object().shape({
        userName:yup.string().max(20,"the username length must be with in 20 chars").required("you cant leave empty"),
        email:yup.string().email().required(),
        age:yup.number().positive().integer().required(),
        mobileNo:yup.number().min(10).positive().integer().required()

    })
    // function handleChange(e){
    //     setDetails({...details,[e.target.name]:e.target.value})
    // }

    function handleSubmits(v){
        // e.preventDefault()
        console.log(v);
        setDetails(v)
        
    }
   
  return (
    <div>ValidationUsingYup
 <Formik
 initialValues={details}
 enableReinitialize
 validationSchema={schema}
 onSubmit={(values)=>handleSubmits(values)}
 >       
 {({handleSubmit,handleChange,values}) => (
<form onSubmit={handleSubmit}>
    
    <input type='text' name='userName' placeholder='Enter Your Name' onChange={handleChange}></input>
    <ErrorMessage name='userName' /><br></br>
    <input type='text' name='email' placeholder='Enter your Email' onChange={handleChange}></input>
    <ErrorMessage name='email' /><br></br>
    <input type='text' name='age' placeholder='Enter Your Age' onChange={handleChange}></input>
    <ErrorMessage name='age' /><br></br>
    <input type='text' name='mobileNo' placeholder='Enter Your Mobile Number' onChange={handleChange}></input>
    <ErrorMessage name='mobileNo' /><br></br>
    <button >submit</button>
    {values.userName}
</form>
)}

</Formik>
{details.email}<br></br>
{details.mobileNo}

    </div>
  )
}

export default ValidationUsingYup

//npm i formik
//npm i yup