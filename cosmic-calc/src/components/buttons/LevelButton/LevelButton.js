import React from "react";
import "./levelButton.css";

function LevelButton({ ButtonNumber, clickToGame }) {
  return (
    <div className="levelButton">
      <button
        className={"levelButtons"}
        onClick={clickToGame}
        id={`levelButton-${ButtonNumber}`}
      >
        {/* BUTTON {ButtonNumber} */}
      </button>
    </div>
  );
}

export default LevelButton;
