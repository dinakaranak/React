import React, { useState } from "react";
import Swal from "sweetalert2";
import './Common.css'
const Login = ({ switchToSignup }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve stored user details
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Invalid email format.");
    } else if (form.email === storedEmail && form.password === storedPassword) {
         Swal.fire({
                  title: "Login Successfully!",
                  icon: "success",
                  draggable: true
                });
      setError(""); // Clear error message
    } else {
         Swal.fire({
                    title: "incorrect email or password",
                    icon: "error",
                    draggable: true
                  });
    //   setError("Incorrect Email or Password ❌");
    }
  };

  return (
    <div>
        <div className="log">
      <h1>Login</h1>
      <form onSubmit={handleLogin} noValidate style={{ display: "inline-block", textAlign: "left" }}>
        <div className="iv-1">
          <label>Email:</label>
          <input className="inp-1" type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="iv-1">
          <label>Password:</label>
          <input className="inp-2" type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <button className="btn-2" type="submit">Login</button>
        <p style={{ color: "red" }}>{error}</p>
      </form>
      <p>
        Don't have an account? <button onClick={switchToSignup}>Signup</button>
      </p></div>
    </div>
  );
};

export default Login;
