//PLAN
//Step 1: Get rid of the'next question' button
//Step 2: Introduce new state for number of questions
//Step 3: Introduce function so that game ends when no of Qs = 10
//Step 4: Display game over text when no of Qs = 10
//Step 5: Send patch request to database once game has finished

// import React, { useState } from "react";

// import { timesTableCalculator } from "../components/functions/Functions";

// export default function Game() {
//   const [num1, setNum1] = useState(Math.floor(Math.random() * 12) + 1);
//   const [num2, setNum2] = useState(Math.floor(Math.random() * 12) + 1);
//   const [answer, setAnswer] = useState("");
//   const [result, setResult] = useState("");
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [noOfQuestions, setNoOfQuestions] = useState(0);

//   const checkAnswer = () => {
//     setShowResults(true);

//     if (parseInt(answer) === num1 * num2) {
//       setResult("Correct!");
//       setScore(score + 1);
//       // newQuestion();
//     } else {
//       setResult("Incorrect! The answer is " + num1 * num2 + " cadet!");
//     }
//     setNoOfQuestions(noOfQuestions + 1);
//   };

//   const newQuestion = () => {
//     setNum1(timesTableCalculator(12));
//     setNum2(timesTableCalculator(12));
//     setAnswer("");
//     setResult("");
//     setShowResults(false);
//   };

//   // async function updateScore(score, id) {
//   //   const response = await fetch(`http://localhost:3001/api/***/${id}`, {
//   //     method: "PATCH",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify(score),
//   //   });
//   //   const result = await response.json();
//   // }

//   if (noOfQuestions < 10) {
//     return (
//       <div>
//         <h1>Times Tables Game</h1>
//         <h2>Score: {score}</h2>
//         <h2>
//           What is {num1} x {num2}?
//         </h2>
//         <input
//           type="text"
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//         />

//         {showResults ? (
//           <button onClick={newQuestion}>New Question</button>
//         ) : (
//           <button onClick={checkAnswer}>Check Answer</button>
//         )}
//         <h3>{result}</h3>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Game Over!</h1>
//         <h2>Your final score was {score}</h2>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
export default function Game() {
  let id = 6;
  const [num1, setNum1] = useState(Math.floor(Math.random() * 12) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 12) + 1);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [nextQButtonVisible, setNextQButtonVisible] = useState(false);
  const [noOfQuestions, setNoOfQuestions] = useState(0);
  const checkAnswer = () => {
    if (parseInt(answer) === num1 * num2) {
      setResult("Correct!");
      setScore(score + 1);
      // setAnswerVisible(false);
      setNoOfQuestions(noOfQuestions + 1);
      newQuestion();
    } else {
      setResult("Incorrect! The answer is " + num1 * num2);
      setAnswerVisible(true);
      setNextQButtonVisible(true);
    }
  };
  const newQuestion = () => {
    setNum1(Math.floor(Math.random() * 12) + 1);
    setNum2(Math.floor(Math.random() * 12) + 1);
    setAnswer("");
    setResult("");
    setAnswerVisible(false);
  };

  async function updateScore(score, id) {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(score),
    });
    const result = await response.json();
    console.log(`Patch request sent! Score was ${score} and id was ${id}`);
  }

  if (noOfQuestions < 10) {
    return (
      <div>
        <h1>Times Tables Game</h1>
        <h2>Score: {score}</h2>
        <h2>
          What is {num1} x {num2}?
        </h2>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
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
    updateScore({ total_score: score }, id);
    return (
      <div>
        <h1>Game Over!</h1>
        <h2>Your final score was {score}</h2>
      </div>
    );
  }
}
