import React from "react";
import { useLocation } from "react-router-dom";

const Out = () => {
  const location = useLocation();
  const { userName, email } = location.state || {};

  return (
    <div>
      <h2>Submitted Data</h2>
      <p><strong>Name:</strong> {userName}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Out;
