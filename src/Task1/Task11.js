import React, { useState } from "react";

const SentenceCaseConverter = () => {
  const [inputText, setInputText] = useState("");
  const [formattedText, setFormattedText] = useState("");
  const toSentenceCase = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  const handleConvert = () => {
    setFormattedText(toSentenceCase(inputText));
  };

  return (
    <div>
      <h2>Sentence Case Converter</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a sentence" />
      <br />
      <button
        onClick={handleConvert}>
        Convert
      </button>
      {formattedText && (
        <p>
          <strong>Result:</strong> {formattedText}
        </p>
      )}
    </div>
  );
};

export default SentenceCaseConverter;
