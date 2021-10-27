#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const user = readlineSync.question('May I have your name? ');
console.log(`Hello, ${user}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;

const randomNumber = () => Math.floor((Math.random() * 100));

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
