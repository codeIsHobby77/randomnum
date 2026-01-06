let randomNumber=parseInt(Math.random()*100+1)
console.log(randomNumber)

const submit = document.querySelector('#subt');
const guessField=document.querySelector('.guessField')
const previousGuesses=document.querySelector('.guesses')
const remainGuess=document.querySelector('.lastResult')
const lowOrHi=document.querySelector(".lowOrHi")
const startOver = document.querySelector('.resultParas');
const p=document.createElement('p')

let previousGuess=[];
let numGuess=0;
let playGame=true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(guessField.value)
    isGuessValid(guess)
  })
}
function isGuessValid(guess){
  if(guess<0){
    alert("Guess is less than 0")
  }else if(guess>100){
    alert("Guess is more than 100")
  }else if(isNaN(guess)){
    alert("it is not a number")
  }
  else{
    previousGuess.push(guess)
    console.log(previousGuess)
    checkResult(guess)
  }
}
function checkResult(guess){
  if(guess>randomNumber){
    displayMessage("Too High",guess)
  }
  else if(guess<randomNumber){
    displayMessage("Too Low",guess) 
  }
  else if(guess===randomNumber){
    displayMessage("Congrats Bro Superb🔥👏 You guessed",guess)
  }
}

function displayMessage(textMessage,guess){
  guessField.value = '';
  previousGuesses.textContent = previousGuess.join(" ")

  showResultHighOrLow(textMessage,guess)
}

function showResultHighOrLow(textMessage,guess){
  lowOrHi.innerHTML=`${textMessage}`
  numGuess++
  remainNum=remainGuess.innerHTML=`${10-numGuess}`
  realNum=parseInt(remainNum)
  endgame(realNum,guess)
}
function endgame(realNum, guess){
  if(realNum === 0){
    startGame();  // reset only if attempts run out
  }
  else if(guess === randomNumber){
    // Show congrats message and stop further guessing
    lowOrHi.innerHTML = "Congrats Bro Superb🔥👏 You guessed";
    previousGuess=[]
    numGuess = 0;
    previousGuesses.textContent = '';
    remainGuess.textContent = '10';

  }
}


  function startGame(){
    previousGuess = [];
    numGuess = 0;
    previousGuesses.textContent = '';
    lowOrHi.textContent = '';
    remainGuess.textContent = '10';
    randomNumber = parseInt(Math.random() * 100 + 1);
    guessField.disabled = false;
    submit.disabled = false;
  }
  
