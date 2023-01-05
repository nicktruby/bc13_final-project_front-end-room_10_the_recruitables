import React from "react";

export default function QuestionCard(props) {
  return (
    <div>
      <h1>
        What is {props.questionValues[0]} × {props.questionValues[1]}?
      </h1>
    </div>
  );
}
