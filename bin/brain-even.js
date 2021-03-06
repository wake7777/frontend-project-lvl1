#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingUser, randomNumber } from '../src/index.js';

const user = greetingUser();

console.log('Answer "yes" if the number is even, otherwise answer "no"');

let counter = 0;

const game = () => {
  while (counter !== 3) {
    const randomNumberFunc = randomNumber();
    let answer = '';
    console.log(`Question: ${randomNumberFunc}`);
    if (randomNumberFunc % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
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
