let randomNumber=Math.floor(Math.random()*100)+1
console.log(randomNumber)
let para=document.getElementById('p')
let lowOrHi=document.getElementById('lowOrHi')
let guessRemain=document.getElementById('guessremain')
let prevguess=document.getElementById('prevGuess')

array=[]

let lastArray



input=document.getElementById('subt')
let guessNumber=10
let guess
value=input.addEventListener('click',function(e){
    e.preventDefault()
    guessField=document.getElementById('guessField').value
    guess=parseInt(guessField)
    array.push(guess)

    newNum=array.filter(value=>{
        return value

    })
    
   lastArray= prevguess.innerHTML=`${newNum}`
   lastArray++
 
    newGuess=guessNumber--
    guessRemain.innerHTML=`${newGuess}`
    check()
})

let isPlaying=true;

function check(){
    if (guess<0 || guess>100 || isNaN(guess)){
        lowOrHi.innerHTML=`Invalid credential because guess i.e  is invalid`
        restart()
    }
    else{
        result()
    }
}
function result(){
    if(newGuess===0){
          lowOrHi.innerHTML=`Sorry You lose random Number was ${randomNumber}`
    }
   else if (guess<randomNumber) {
            lowOrHi.innerHTML=`Tooo Low Try Again` 
    }
    else if(guess>randomNumber){
                 lowOrHi.innerHTML=`Tooo High Try Again` 
    }
    else if(guess==randomNumber){
          lowOrHi.innerHTML="Correct Congrats Superb🩵🩵"
          restart()
            guessNumber=10
    }
 if( newGuess==0){
    restart()
}

  
}
function restart(){
    guessNumber=10
    document.getElementById('guessField').value=""
    randomNumber=Math.floor(Math.random()*100)+1
   array=[]
}


