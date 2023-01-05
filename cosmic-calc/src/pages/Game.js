import React, { useState } from "react";
import QuestionCard from "../components/questioncard/QuestionCard";
import AnswerCard from "../components/answercard/AnswerCard";
import Input from "../components/input/Input";
import {
  timesTableCalculator,
  multiply,
  checkAnswer,
} from "../components/functions/Functions";

// Import Navbar
export default function Game() {
  const [questionValueArray, setQuestionValueArray] = useState();
  const [answerInput, setAnswerInput] = useState(Number);
  const newQuestionValues = timesTableCalculator(12);

  function handleClick() {
    setQuestionValueArray(newQuestionValues);
  }
  
  const answerValue = multiply(newQuestionValues);

  function onChangeInput(e) {
    const answerInputNumber = Number(e.target.value);
    setAnswerInput(answerInputNumber);
  }

  return (
    <div>
      <div>
        <QuestionCard questionValues={questionValueArray} />
        <Input onChange={onChangeInput} />
      </div>

      {checkAnswer(newQuestionValues, answerInput) && (
        <div>
          <AnswerCard answerValue={answerValue} handleClick={handleClick} />
        </div>
      )}
    </div>
    // Navbar
    // Question Card
    // Answer Input box
    // Answer feedback
    // Next question button
  );
}
