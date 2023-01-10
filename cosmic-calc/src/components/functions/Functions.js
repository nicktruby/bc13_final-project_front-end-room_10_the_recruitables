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
