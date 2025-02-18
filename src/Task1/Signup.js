import React, { useState } from "react";
import Swal from "sweetalert2";
import './Common.css'
const Signup = ({ switchToLogin }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "", mobile: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!/^[a-zA-Z\s]{3,}$/.test(form.name)) tempErrors.name = "Name must be at least 3 letters.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) tempErrors.email = "Invalid email format.";
    if (!/^(?=.*\d)[A-Za-z\d]{6,}$/.test(form.password))
      tempErrors.password = "Password must be at least 6 characters & contain a number.";
    if (!/^\d{10}$/.test(form.mobile)) tempErrors.mobile = "Mobile number must be 10 digits.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("userName", form.name);
      localStorage.setItem("userEmail", form.email);
      localStorage.setItem("userPassword", form.password);
      localStorage.setItem("userMobile", form.mobile);

     Swal.fire({
           position: "top-end",
           icon: "success",
           title: "SignUp Successfully",
           showConfirmButton: false,
           timer: 1500
         });
      switchToLogin();
    }
  };

  return (
    <div>
        <div className="form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup} noValidate style={{ display: "inline-block", textAlign: "left" }}>
        <div className="name">
          <label>Name:</label>
          <input className="box-1" type="text" name="name" value={form.name} onChange={handleChange} required />
          <span style={{ color: "red" }}>{errors.name}</span>
        </div>
        <div className="name">
          <label>Email:</label>
          <input className="box-2" type="email" name="email" value={form.email} onChange={handleChange} required />
          <span style={{ color: "red" }}>{errors.email}</span>
        </div>
        <div className="name">
          <label>Password:</label>
          <input className="box-3" type="password" name="password" value={form.password} onChange={handleChange} required />
          <span style={{ color: "red" }}>{errors.password}</span>
        </div>
        <div className="name">
          <label>Mobile:</label>
          <input className="box-4" type="tel" name="mobile" value={form.mobile} onChange={handleChange} required />
          <span style={{ color: "red" }}>{errors.mobile}</span>
        </div>
        <button type="submit" className="btn-1">Sign Up</button>
      </form>
      <p>
        Already have an account? <button onClick={switchToLogin}> Login</button>
      </p></div>
    </div>
  );
};

export default Signup;
