import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/LoginOut/${formData.name}`);
  };

  return (
    <div>
      <h2>User Form</h2>
      {id && <p>Editing User ID: {id}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
