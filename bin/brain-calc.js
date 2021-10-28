#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetingUser, randomNumber, randomSign, calculateNumber,
} from '../src/index.js';

const user = greetingUser();

console.log('What is the result of the expression?');

let counter = 0;

const game = () => {
  while (counter !== 3) {
    const randomNumberOne = randomNumber();
    const randomNumberTwo = randomNumber();
    const randomSignNumber = randomSign();
    console.log(`Question: ${randomNumberOne} ${randomSignNumber} ${randomNumberTwo}`);
    const answer = calculateNumber(randomNumberOne, randomNumberTwo, randomSignNumber);
    const answerUser = Number(readlineSync.question('Your answer: '));
    if (answer === answerUser) {
      console.log('Correct!');
      counter += 1;
    }
    if (answer !== answerUser) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.
Let's try again, ${user}!`);
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${user}!`);
      break;
    }
  }
};
game();
