#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetingUser, primeOrNoPrime, getRandomInRange,
} from '../src/index.js';

const user = greetingUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let counter = 0;

const game = () => {
  while (counter !== 3) {
    const number = getRandomInRange(1, 100);
    console.log(`Question: ${number}`);
    const answer = primeOrNoPrime(number);
    const answerUser = readlineSync.question('Your answer: ');
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
