#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetingUser, progressionGap,
} from '../src/index.js';

const user = greetingUser();

console.log('What number is missing in the progression?');

let counter = 0;

const game = () => {
  while (counter !== 3) {
    const answer = progressionGap();
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
