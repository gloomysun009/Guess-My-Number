'use strict';
const guess = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const againLabel = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() *20)+1;
let score = 20;
let highscore = 0;
const scoreLabel = document.querySelector('.score');
const highscoreLabel = document.querySelector('.highscore');
highscoreLabel.textContent = highscore;
scoreLabel.textContent = score;
const checkFunction = function()
{
    let guessNumber = Number(guess.value);
if(score >1)
    {
        if(! guessNumber)
            {
                message.textContent = 'Please enter the value between 1 and 20;';
                console.log(e);
            }
        else if(guessNumber === secretNumber)
            {
                --score;
                scoreLabel.textContent = score;
                highscore = score;
                message.textContent = 'You Won 🏆';
                checkButton.disabled = true;
                    if(score > highscore)
                        {
                            highscoreLabel.textContent = score;
                            highscore = score;
                        }
                    else
                        {
                            highscoreLabel.textContent = highscore;
                        }
                document.querySelector('body').style.background = "green";
            }
        else if(guessNumber < secretNumber && guessNumber <= 20)
            {
                message.textContent = 'Too low 📉';
                score--;
                scoreLabel.textContent = score;
            }
        else if(guessNumber > secretNumber && guessNumber <= 20)
            {
                message.textContent = 'Too High 📈';
                score--;
                scoreLabel.textContent = score;
            }
        else if (guessNumber > 20)
            {
                message.textContent = 'Please enter the value between 1 and 20;';
            }
    }
    else
        {
            message.textContent = 'You Lost the game 🥲';
            scoreLabel.textContent = 0;
            checkButton.disabled = true;
        }
}
const againFunction = function()
    {
        secretNumber = Math.trunc(Math.random() *20)+1;
        checkButton.disabled = false;
        score = 20;
        message.textContent = 'Start guessing...';
        scoreLabel.textContent = score;
        guess.value ='';
        document.querySelector('body').style.background = "#222";
    }
checkButton.addEventListener('click',checkFunction);
document.addEventListener('keydown', function (e){
    console.log(e);
    if(e.key === 'Enter')
        {
            checkFunction();
        }
});
againLabel.addEventListener('click', againFunction);
