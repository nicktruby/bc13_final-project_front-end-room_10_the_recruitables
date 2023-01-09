import React, { useState } from "react";
export default function Game() {
  let id = 6;
  const [num1, setNum1] = useState(Math.floor(Math.random() * 12) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 12) + 1);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);
  // const [nextQButtonVisible, setNextQButtonVisible] = useState(false);
  const [noOfQuestions, setNoOfQuestions] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [payload, setPayload] = useState({});

// get request to get total_score
  const getScore = async (id) => {
    const response = await fetch(`http://localhost:3001/api/users/${id}`);
    const data = await response.json();
    console.log(data.payload.total_score);
    setPayload(data.payload);
    setTotalScore(data.payload.total_score);
    return data.payload.total_score;
  };


  const checkAnswer = () => {
    setNoOfQuestions(noOfQuestions + 1);
    if (parseInt(answer) === num1 * num2) {
      setResult("Correct!");
      setScore(Number(score) + 1);
      // setAnswerVisible(false)
      newQuestion();
    } else {
      setResult("Incorrect! The answer is " + num1 * num2);
      setAnswerVisible(true);
      // setNextQButtonVisible(true);
    }
  };
  const newQuestion = () => {
    setNum1(Math.floor(Math.random() * 12) + 1);
    setNum2(Math.floor(Math.random() * 12) + 1);
    setAnswer("");
    setResult("");
    setAnswerVisible(false);
  };
  
  const updateScore = async (payload, score, id) => {
    console.log("total", totalScore)
    console.log("data", payload)
    console.log("score", (score.total_score))
    console.log("type of score", typeof(score))
    let newTotal = score.total_score + totalScore;
    console.log("newScore", newTotal)
    console.log(typeof(totalScore))
    console.log("id", id)
    const response = await fetch(`http://localhost:3001/api/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTotal),

    });
    const data = await response.json();
    console.log(data);
  };
  if (noOfQuestions < 4) {
    return (
      <div>
        <h1>Times Tables Game</h1>
        <h2>Score: {score}</h2>
        <h2>
          {noOfQuestions}. {num1} x {num2}=
        </h2>
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            console.log(e);
            if (e.key === "Enter") {
              checkAnswer();
            }
          }}
        />
        <button onClick={checkAnswer}>Check Answer</button>
        <h3>{result}</h3>
        <button
          onClick={newQuestion}
          style={{ visibility: answerVisible ? "visible" : "hidden" }}
        >
          Next Question
        </button>
      </div>
    );
  } else {
    getScore(id);
    updateScore(payload, { total_score: score }, id);
    return (
      <div>
        <h1>Game Over!</h1>
        <h2>Your final score was {score}</h2>
        <button onClick={newQuestion}>Play Again</button>
      </div>
    );
  }
}

