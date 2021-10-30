import readlineSync from 'readline-sync';

export const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

export const randomNumber = () => Math.floor((Math.random() * 100));

export const randomSign = () => {
  const sign = ['+', '-', '*'];
  return sign[Math.floor((Math.random() * 3))];
};

export const calculateNumber = (firstNumber, secondNumber, sign) => {
  if (sign === '+') {
    return firstNumber + secondNumber;
  }
  if (sign === '-') {
    return firstNumber - secondNumber;
  }
  if (sign === '*') {
    return firstNumber * secondNumber;
  }
  return false;
};

export const calculateNod = (firstNumber, secondNumber) => {
  let counter = 0;
  if (firstNumber <= secondNumber) {
    counter = firstNumber;
  } else {
    counter = secondNumber;
  }
  while (counter > 0) {
    if (firstNumber % counter === 0 && secondNumber % counter === 0) {
      return counter;
    }
    counter -= 1;
  }
  return false;
};

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const progression = (startnumber, stepProgression) => {
  const result = [startnumber];
  while (result.length < 10) {
    result.push(result[result.length - 1] + stepProgression);
  }
  return result;
};

export const progressionGap = () => {
  const prog = progression(getRandomInRange(1, 100), getRandomInRange(1, 9));
  const randomNum = getRandomInRange(1, 9);
  const answer = prog[randomNum];
  prog[randomNum] = '..';
  console.log(`Question: ${prog.join(' ')}`);
  return answer;
};

export const primeOrNoPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
