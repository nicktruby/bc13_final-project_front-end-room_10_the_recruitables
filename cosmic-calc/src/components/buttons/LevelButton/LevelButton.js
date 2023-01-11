import React from "react";
import "./levelButton.css";

function LevelButton({ buttonNumber, clickToGame }) {
  return (
    <div className="levelButton">
      <button
        className={"levelButtons"}
        onClick={clickToGame}
        id={`levelButton-${buttonNumber}`}
      >
        BUTTON {buttonNumber}
      </button>
    </div>
  );
}

export default LevelButton;
