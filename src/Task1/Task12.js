import React, { useState } from "react";

const InitialsExtractor = () => {
  const [names, setNames] = useState([]);
  const [initials, setInitials] = useState([]);
  const [inputText, setInputText] = useState("");
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  };
  const handleAddName = () => {
    if (inputText.trim() !== "") {
      setNames([...names, inputText]);
      setInputText("");
    }
  };
  const handleExtract = () => {
    setInitials(names.map(getInitials));
  };

  return (
    <div>
      <h2>Initials Extractor</h2>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Enter a name..."/>
      <button onClick={handleAddName} >
        Add Name
      </button>
      <p>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </p>
      <button onClick={handleExtract}>
        Extract Initials
      </button>
      {initials.length > 0 && (
        <p >
          {initials.map((initial, index) => (
            <p key={index}>{initial}</p>
          ))}
        </p>
      )}
    </div>
  );
};
export default InitialsExtractor;
