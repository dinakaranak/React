import React, { useState } from "react";

const RandomChange = () => {
  const [bgColor, setBgColor] = useState("rgb(255, 255, 255)");
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomColor = () => {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Set new background color
    setBgColor(`rgb(${r}, ${g}, ${b})`);
    
    // Generate a random number between 1 and 100
    // setRandomNumber(Math.floor(Math.random() * 255) + 1);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease",
      }}
    >
      <h1>Random Number: {randomNumber}</h1>
      <button
        onClick={generateRandomColor}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
     Change Color
      </button>
    </div>
  );
};

export default RandomChange;
