import React, { useState } from "react";

const CelToFah = () => {
  const [temperature, setTemperature] = useState("");
  const [conversionType, setConversionType] = useState("CtoF");
  const [result, setResult] = useState("");

  const convertTemperature = () => {
    let convertedTemp;
    if (conversionType === "CtoF") {
      convertedTemp = (parseFloat(temperature) * 9) / 5 + 32;
      setResult(`${convertedTemp.toFixed(2)} °F`);
    } else {
      convertedTemp = ((parseFloat(temperature) - 32) * 5) / 9;
      setResult(`${convertedTemp.toFixed(2)} °C`);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Temperature Converter</h1>
      
      <input
        type="number"
        placeholder="Enter Temperature"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px",
          fontSize: "16px",
          width: "200px",
        }}
      />

      <select
        value={conversionType}
        onChange={(e) => setConversionType(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        <option value="CtoF">Celsius to Fahrenheit</option>
        <option value="FtoC">Fahrenheit to Celsius</option>
      </select>

      <button
        onClick={convertTemperature}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Convert
      </button>

      {result && <h2>Converted Temperature: {result}</h2>}
    </div>
  );
};

export default CelToFah;
