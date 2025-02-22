import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    setAuth(false);
    navigate("/d");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", display:"flex", justifyContent:"space-around"}}>
      <h2>Welcome to Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;