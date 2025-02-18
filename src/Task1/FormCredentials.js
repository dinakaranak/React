import React, { useState } from "react";
import Swal from "sweetalert2";
const FormCredentials = () => {
  const [page, setPage] = useState("signup"); // "signup" or "login"
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", form.email);
    localStorage.setItem("userPassword", form.password);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SignUp Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    // alert("Signup Successful! Now go to Login.");
    // setPage("login");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (form.email === storedEmail && form.password === storedPassword) {
        Swal.fire({
            title: "Login Successfully!",
            icon: "success",
            draggable: true
          });
    } else {
        Swal.fire({
            title: "incorrect email or password",
            icon: "error",
            draggable: true
          });
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{page === "signup" ? "Sign Up" : "Login"} Form</h1>
      <form onSubmit={page === "signup" ? handleSignup : handleLogin} style={{ display: "inline-block", textAlign: "left" }}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <button type="submit">{page === "signup" ? "Sign Up" : "Login"}</button>
      </form>
      {page === "signup" ? (
        <p>
          Already have an account?{" "}
          <button onClick={() => setPage("login")}>Go to Login</button>
        </p>
      ) : (
        <p>
          Don't have an account?{" "}
          <button onClick={() => setPage("signup")}>Go to Signup</button>
        </p>
      )}
    </div>
  );
};

export default FormCredentials;
