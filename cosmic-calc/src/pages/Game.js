//PLAN 
//Step 1: Get rid of the'next question' button
//Step 2: Introduce new state for number of questions
//Step 3: Introduce function so that game ends when no of Qs = 10
//Step 4: Display game over text when no of Qs = 10
//Step 5: Send patch request to database once game has finished

import React, { useState } from "react";

import { timesTableCalculator } from "../components/functions/Functions";

export default function Game() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 12) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 12) + 1);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [noOfQuestions, setNoOfQuestions] = useState(0);

  const checkAnswer = () => {
    setShowResults(true);
    setNoOfQuestions(noOfQuestions + 1);
    if (parseInt(answer) === num1 * num2) {
      setResult("Correct!");
      setScore(score + 1);
    } else {
      setResult("Incorrect! The answer is " + num1 * num2 + " cadet!");
    }
  };

  const newQuestion = () => {
    setNum1(timesTableCalculator(12));
    setNum2(timesTableCalculator(12));
    setAnswer("");
    setResult("");
    setShowResults(false);
  };

  // async function updateScore(score, id) {
  //   const response = await fetch(`http://localhost:3001/api/***/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(score),
  //   });
  //   const result = await response.json();
  // }

  return (
    <div>
      <h1>Times Tables Game</h1>
      <h2>Score: {score}</h2>
      {if (noOfQuestions<10) {<h2>
       return() What is {num1} x {num2}?
      </h2>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      {showResults ? (
        <button onClick={newQuestion}>New Question</button>
      ) : (
        <button onClick={checkAnswer}>Check Answer</button>
      )}
      <h3>{result}</h3>}  }
      
    </div>
  );
}
