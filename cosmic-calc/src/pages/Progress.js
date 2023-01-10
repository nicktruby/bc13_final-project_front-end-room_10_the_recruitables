import React from "react";
import { useState } from "react";
import LevelButtons from "../components/buttons/LevelButtons";
import "./progress.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";

// icon/image array to be used instead/aswell as buttons. Passed as a prop to levelButtons.
// const icons = ["😀", "😁", "😂", "🤣", "😃", "😆", "😎", "👽", "👾", "🤖"];

export const Progress = () => {
  // state for score count of player
  const [score, setScore] = useState(0);
  // count for array of levels. New level pushed into array ever X amount of points. Then mapped below to return a new button each time score level reached.
  const [levels, setLevels] = useState([1]);
  const [lockLevels, setLockLevels] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [payload, setPayload] = useState([]);
  const [totalScore, setTotalScore] = useState();
  let planets = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // handles bringing in new buttons when the score increases. Set to new button every 5 points. Added button to manually increase score in the mean time - will remove later.

  function handleScoreIncrease() {
    // get request to get total_score
    const getScore = async (id) => {
      const response = await fetch(`http://localhost:4000/api/users/${id}`);
      const data = await response.json();
      console.log(data.payload.total_score);
      setPayload(data.payload);
      setTotalScore(data.payload.total_score);
      return data.payload.total_score;
    };

    getScore(6);

    switch (Math.round(totalScore / 100) * 100) {
      case 100:
        setLevels([1, 2]);
        break;
      case 200:
        setLevels([1, 2, 3]);
        break;
      case 300:
        setLevels([1, 2, 3, 4]);
        break;
      case 400:
        setLevels([1, 2, 3, 4, 5]);
        break;
      case 500:
        setLevels([1, 2, 3, 4, 5, 6]);
        break;
      case 600:
        setLevels([1, 2, 3, 4, 5, 6, 7]);
        break;
      case 700:
        setLevels([1, 2, 3, 4, 5, 6, 7, 8]);
        break;
      case 800:
        setLevels([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        break;
      case 900:
        setLevels([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        break;
      case 1000:
        setLevels([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        break;
      default:
        // Handle other cases here or do nothing
        break;
    }
  }
  // every 100 points or more new planet
  // set up the navigation variables and function
  const navigate = useNavigate();
  const navigateToGame = () => {
    navigate("/game");
  };

  // onClick event handler to pass to buttons. If need to go depending on levels can add conditions based on button index 1-10
  function handleGotoLevel(level) {
    navigateToGame();
  }

  // JSX below returns a grid container.
  // then maps over the levels array which returns a button for each new item in the array. Array increases depending on score. New item every 5 points = new button returned.
  return (
    <div className="progress-page">
      <NavBar />
      <button onClick={handleScoreIncrease}>MANUAL SCORE INCREASE</button>
      <div className="grid-container">
        {levels.map((levels, index) => (
          <LevelButtons
            clickToGame={handleGotoLevel}
            key={levels.level}
            ButtonNumber={index + 1 + "-unlock"}
          />
        ))}
        {lockLevels.map((level, index) => (
          <LevelButtons key={levels.level} ButtonNumber={index + 1 + "-lock"} />
        ))}
      </div>
    </div>
  );
};

export default Progress;
