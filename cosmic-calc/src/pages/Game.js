import React, { useState } from "react";
import QuestionCard from "../components/questioncard/QuestionCard";
import AnswerCard from "../components/answercard/AnswerCard";
import AnswerInput from "../components/input/AnswerInput";
import NavBar from "../components/navBar/NavBar";

import {
  timesTableCalculator,
  multiply,
  checkAnswer,
} from "../components/functions/Functions";

export default function Game() {
  const [questionValueArray, setQuestionValueArray] = useState([]);
  const [answerInput, setAnswerInput] = useState();
  const [answerVisible, setAnswerVisible] = useState(false);

  const newQuestionValues = timesTableCalculator(12);

  console.log(`newQuestionValues=${newQuestionValues}`);
  // function handleClick() {
  //   setQuestionValueArray(newQuestionValues);
  // }

  const answerValue = multiply(newQuestionValues);
  console.log(`answerValue=${answerValue}`);

  function onChangeInput(e) {
    const answerInputNumber = Number(e.target.value);
    console.log(answerInputNumber);
    return answerInputNumber;
  }

  function handleSubmitAnswer(answerInputNumber) {
    timesTableCalculator(12);
    setAnswerInput(answerInputNumber);
    //setAnswerVisible(true);
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <QuestionCard questionValues={newQuestionValues} />
        <AnswerInput onChange={onChangeInput} />
        <button onClick={handleSubmitAnswer}>Submit Answer</button>
      </div>

      {/* {checkAnswer(newQuestionValues, answerInput) && ( */}
      <div>
        <AnswerCard answerValue={answerValue} answerVisible={answerVisible} />
      </div>
      {/* )} */}
    </div>
  );
}
