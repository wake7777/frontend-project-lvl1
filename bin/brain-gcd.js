#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetingUser, randomNumber, calculateNod,
} from '../src/index.js';

const user = greetingUser();

console.log('Find the greatest common divisor of given numbers.');

let counter = 0;

const game = () => {
  while (counter !== 3) {
    const randomNumberOne = randomNumber();
    const randomNumberTwo = randomNumber();
    console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
    const answer = calculateNod(randomNumberOne, randomNumberTwo);
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
