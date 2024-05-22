const againButton = document.querySelector('.again');
const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const checkButton =document.querySelector('.check');
const highscoreLabel = document.querySelector('.highscore');
let score = 20;
let highscore = 0;
highscoreLabel.textContent = highscore;
scoreLabel.textContent = score;
let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);
const checkFunction = function(){
    let guessNumber = Number(document.querySelector('.guess').value);
        if(score > 1)
            {
                if(!guessNumber)
                    {
                        message.textContent = 'Please enter the number between 1 to 20.';
                    }
                else if(guessNumber > secretNumber)
                    {
                        message.textContent = 'Too High';
                        score --;
                        scoreLabel.textContent = score;
                    }
                else if(guessNumber < secretNumber)
                    {
                        message.textContent = 'Too Low';
                        score --;
                        scoreLabel.textContent = score;
                    }    
                else if(guessNumber === secretNumber)
                    {
                        message.textContent = 'Hurray You Won the Game 🏆';
                        scoreLabel.textContent = score;
                        checkButton.disabled = true;
                        document.removeEventListener("keydown", enter);
                        document.querySelector('body').style.background="green";
                            if(score > highscore)
                                {
                                    highscore = score;
                                    highscoreLabel.textContent = highscore;
                                }
                            // else
                            //     {
                            //         highscoreLabel.textContent = highscore;
                            //     }
                    }
            }
        else{
            checkButton.disabled = true;
            message.textContent = "Game Over 🥲";
            document.removeEventListener("keydown", enter);
            highscoreLabel.textContent = 0;
        }
};

const againFunction = function(){
    secretNumber = Math.trunc(Math.random()*20) + 1;
    console.log(secretNumber);
    score = 20;
    message.textContent = 'Start guessing...';
    scoreLabel.textContent = score;
    highscoreLabel.textContent = highscore;
    document.querySelector('body').style.background = "#222";
    checkButton.disabled = false;
    document.addEventListener('keydown',enter);
    document.querySelector('.guess').value = '';

};
const enter = function(e){
    if(e.key === "Enter")
        {
            checkFunction();
        }
    }
checkButton.addEventListener('click', checkFunction);
againButton.addEventListener('click', againFunction);
document.addEventListener('keydown',enter);
