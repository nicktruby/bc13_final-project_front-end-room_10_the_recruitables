function RandNumGen(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function timesTableCalculator(max) {
  const randNumber = RandNumGen(max);
  return randNumber;
}

export function multiply(arr) {
  return arr[0] * arr[1];
}

export function checkAnswer(values, answer) {
  return multiply(values) === answer;
}

function valueChooser(chances) {
  const valuesEasy = [0, 1, 2, 3, 5, 10];
  const valuesMedium = [4, 6, 9, 11];
  const valuesHard = [7, 8, 12];
  const randomDifficulty = Math.random();
  if (randomDifficulty < chances[0]) {
    const randomIndex = Math.floor(Math.random() * valuesEasy.length);
    return valuesEasy[randomIndex];
  } else if (randomDifficulty < chances[1]) {
    const randomIndex = Math.floor(Math.random() * valuesMedium.length);
    return valuesMedium[randomIndex];
  } else {
    const randomIndex = Math.floor(Math.random() * valuesHard.length);
    return valuesHard[randomIndex];
  }
}

export function timesTableAdaptive(rank) {
  let chances;
  if (rank <= 1.75) {
    chances = [0.6, 0.9]; // The first value is the chance of receiving easy values, the second is the chance of receiving easy or medium values
  } else if (rank < 3.25) {
    chances = [0.3, 0.9];
  } else {
    chances = [0.1, 0.6];
  }
  let chosenValues = [];
  for (let i = 0; i < 1; i++) {
    chosenValues.push(valueChooser(chances));
  }
  return chosenValues;
}