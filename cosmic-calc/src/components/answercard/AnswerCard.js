import React from "react";
import NextQButton from "../buttons/NextQButton";

export default function AnswerCard(props) {
  return (
    props.answerVisible && (
      <div>
        <div>
          (<h1>Correct! </h1>
        </div>
        ) : (
        <div>
          <h1>{props.answerValue}</h1>
        </div>
        ){/* <NextQButton onClick={props.handleClick} h1="Next Question!" /> */}
      </div>
    )
  );
}
