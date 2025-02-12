import React, { useState } from "react";

const TitleCaseConverter = () => {
  const [inputText, setInputText] = useState("");
  const [titleCaseText, setTitleCaseText] = useState("");
  const toTitleCase = (text) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const handleConvert = () => {
    setTitleCaseText(toTitleCase(inputText));
  };

  return (
    <div>
      <h2>Each Word  Converter first letter caps</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text here..."
      />
      <button
        onClick={handleConvert}
      >
        Convert
      </button>
      {titleCaseText && (
        <p>Result: {titleCaseText}</p>
      )}
    </div>
  );
};

export default TitleCaseConverter;
