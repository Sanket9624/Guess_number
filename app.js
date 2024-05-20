let randomNmber = parseInt(Math.random()*100 + 1);

const guessNumber = document.getElementById('username')
const submit = document.getElementById('btn')
const guesses = document.querySelector('.guessResult')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.startOver')
const lowOrHi = document.querySelector('.lowOrHi')

const p = document.createElement('p')

let prevGuess = [];

let numGuess = 1;

let playGame =true

if(playGame){
submit.addEventListener('click',function(e){
            e.preventDefault()
            const guess = parseInt(guessNumber.value)
            console.log(guess);
            validateGuess(guess);
})
}

function validateGuess(guess) {
            if(isNaN(guess)){
                        alert("Enter a Valid Number")
            }
            else if(guess<0 || guess>100){
                        alert('Please Enter the Number Between 1 to 100')
            }
            else{
                        prevGuess.push(guess)
                        if(numGuess === 11){
                                    displayGuess(guess)
                                    displayMessage(`Game Over, Random Number was ${randomNmber}`)
                                    endGame()
                        }
                        else{
                                    displayGuess(guess)
                                    checkGuess(guess)
                        }
            }
}

function checkGuess(guess) {
            if(guess === randomNmber){
                        displayMessage("You guessed it right")
                        endGame()
            }
            else if(guess < randomNmber){
                        displayMessage("Number is lower than randomnumber")
            }
            else if(guess > randomNmber ){
                        displayMessage("Nmber is greater than randomNumber")
            }
}

function displayGuess(guess){
            guessNumber.value = ''
            guesses.innerHTML += `${guess},`
            numGuess++;
            remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message) {
            lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
            guessNumber.value = '';
            guessNumber.setAttribute('disabled','');
            p.innerHTML = `<h2 id = "newGame">Start the New Game </h2>`;
            startOver.appendChild(p);
            playGame = false;
            newGame();
}

function newGame() {
            const newGameButton = document.querySelector('#newGame')
            newGameButton.addEventListener('click', function(a) {
                        randomNmber = parseInt(Math.random()*100 + 1);
                        prevGuess = [];
                        numGuess = 1;
                        guesses.innerHTML = '';
                        remaining.innerHTML =`${11-numGuess}`;
                        guessNumber.removeAttribute('disabled')
                        startOver.removeChild(p)
                        playGame = true

            })
}