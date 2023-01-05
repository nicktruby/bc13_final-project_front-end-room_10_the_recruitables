function RandNumGen(max) {
    return Math.floor(Math.random() * (max + 1));
}

export function timesTableCalculator(max) {
    const randNum1 = RandNumGen(max);
    const randNum2 = RandNumGen(max);
    const randNumArr = [randNum1, randNum2];
    return randNumArr;
}

export function multiply(arr) {
    return arr[0] * arr[1];
}

export function checkAnswer(values, answer) {
    return multiply(values) === answer;
}