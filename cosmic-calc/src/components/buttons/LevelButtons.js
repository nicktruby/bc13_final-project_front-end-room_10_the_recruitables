import React from "react";
import "./levelButtons.css";

function LevelButtons({ ButtonNumber, clickToGame }) {
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

export default LevelButtons;
