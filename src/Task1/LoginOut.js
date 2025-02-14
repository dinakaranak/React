import React from "react";
import { useParams, useLocation } from "react-router-dom";

const LoginOut = () => {
  const { id } = useParams();
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div>
      <h2>Submitted Data</h2>
      {id && <p><strong>User ID:</strong> {id}</p>}
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default LoginOut;
