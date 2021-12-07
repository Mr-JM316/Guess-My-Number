'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number Selected!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener
    ('click', function () {
        console.log(document.querySelector('.guess').value);
        const guesss = Number(document.querySelector('.guess').value);
        console.log(guesss, typeof guesss);
        if (!guesss) {
            document.querySelector('.message').textContent = 'No Number';
        } else if (guesss == number) {
            document.querySelector('.message').textContent = 'Correct Number Selected!';
            document.querySelector('.number').textContent = number;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '100rem';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if (guesss > number) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too High';
                score--;
                document.querySelector('.score').textContent = score;
            }

            else {
                document.querySelector('.message').textContent = 'You lost the game';
            }
        }
        else if (guesss < number) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too Low';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'You lost the game';

            }
        }

    });
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing....';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '20rem';




});