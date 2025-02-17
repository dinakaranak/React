import React, { useState } from "react";

const choices = ["Stone", "Paper", "Scissors"];

const StonePaper = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("It's a Draw!");
    } else if (
      (choice === "Stone" && randomChoice === "Scissors") ||
      (choice === "Paper" && randomChoice === "Stone") ||
      (choice === "Scissors" && randomChoice === "Paper")
    ) {
      setResult("You Win! 🎉");
      setScore((prev) => ({ ...prev, user: prev.user + 1 }));
    } else {
      setResult("Computer Wins! 😢");
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1> Paper Scissors</h1>
      <h2>Choose your move:</h2>
      {choices.map((choice) => (
        <button
          key={choice}
          onClick={() => playGame(choice)}
          style={{
            margin: "10px",
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          {choice}
        </button>
      ))}

      <h3>User Choice: {userChoice}</h3>
      <h3>Computer Choice: {computerChoice}</h3>
      <h2>{result}</h2>

      <h2>Score:</h2>
      <p>User: {score.user} | Computer: {score.computer}</p>
    </div>
  );
};

export default StonePaper;
