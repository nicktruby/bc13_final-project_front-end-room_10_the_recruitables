import React from "react";
import "./levelButtons.css";

function LevelButtons({ ButtonNumber, icon, clickToGame }) {
  return (
    <div className="levelButton">
      <button onClick={clickToGame} id={`levelButton-${ButtonNumber}`}>
        BUTTON {ButtonNumber} {icon}
      </button>
    </div>
  );
}

export default LevelButtons;
