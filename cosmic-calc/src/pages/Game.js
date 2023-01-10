import React, { useState, useEffect } from "react";
import "./game.css";

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
  // const getScore = async (id) => {
  //   const response = await fetch(`http://localhost:3000/api/users/${id}`);
  //   const data = await response.json();
  //   console.log(data.payload.total_score);
  //   setPayload(data.payload);
  //   setTotalScore(data.payload.total_score);
  //   return data.payload.total_score;
  // };

  useEffect(() => {
    if (noOfQuestions === 4) {
      updateScore(score, id);
    }
  }, [noOfQuestions, score, id]);

  const checkAnswer = () => {
    setNoOfQuestions(noOfQuestions + 1);
    if (parseInt(answer) === num1 * num2) {
      setResult("Correct!");
      setScore(Number(score) + 1);
      // setAnswerVisible(false)
      newQuestion();
    } else {
      setResult(num1 * num2);
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

  const updateScore = async (score, id) => {
    // console.log("total", totalScore);
    // console.log("data", payload);
    // console.log("score", score.total_score);
    // console.log("type of score", typeof score);
    // let newTotal = score.total_score + totalScore;
    // console.log("newScore", newTotal);
    // console.log(typeof totalScore);
    // console.log("id", id);
    const response = await fetch(
      `http://localhost:3000/api/users/${id}/updateTotalScore`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ total_score: score }),
      }
    );
    const data = await response.json();
    console.log(data);
  };
  if (noOfQuestions < 4) {
    return (
      <div className="gameDiv">
      <div className="answerDiv" style={{ visibility: answerVisible ? "visible" : "hidden" }}>
      <div className="statementDiv" style={{ visibility: answerVisible ? "visible" : "hidden" }}>
        <h3 className="h3ResultGame">The correct answer is:  </h3>
       <h3 className="h3ResultAnswerGame">{result}</h3>
       </div>
        <button className="newQuestionGame"
          onClick={newQuestion}
          style={{ visibility: answerVisible ? "visible" : "hidden" }}
        >
          Next Question
        </button>
        </div>
        <div className="questionDiv">
        <h2 className="h2QuestionGame">
          {noOfQuestions + ")  "}
        </h2>
        <h2 className="h2QuestionGame">
        {num1} x {num2} =
        </h2>
        <input className="inputGame"
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
        <button className="buttonGame" onClick={checkAnswer}>Check Answer</button>
        </div>
        <div className="scoreDiv">
        <h2 className="h2ScoreGame">Score: {score}</h2>
        </div>
      </div>
    );
  } else {
    //getScore(id);


    return (
      <div>
        <h1>Game Over!</h1>
        <h2>Your final score was {score}</h2>
        <button onClick={newQuestion}>Play Again</button>
      </div>
    );
  }
  );
}
