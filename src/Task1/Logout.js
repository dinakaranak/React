import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "dinakaranak001@gmail.com" && password === "dina212004") {
      setAuth(true);
      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Page</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Logout;