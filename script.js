const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
let score = 20; 
let highScore =0;
 

const displayMessage = function(message){
    return document.querySelector(".message").textContent = message; 
}
const generateSecretNumber = function(min, max){
    return Math.floor(Math.random()*(max-min +1) + min);
}
let secretNumber = generateSecretNumber(1,20); 

const bgColor = function(color){
    return document.querySelector("body").style.backgroundColor = color;
}
const displayHighScore =function(hScore){
    document.querySelector(".highscore").textContent = hScore;
}
const displayScore =function(score){
    document.querySelector(".score").textContent = score;
}
const displaySecretNUmber = function(num){
    document.querySelector(".number").textContent = num;
}

checkBtn.addEventListener("click", function(){
    const inputNum = Number(document.querySelector(".guess").value);
    
    if(!inputNum){
        displayMessage("Please enter a Number...");
    } if(inputNum === secretNumber){
        displayMessage("Wow!! It's a correct Number..");
        displayScore(score) 
        bgColor("#389c1f"); 
        displaySecretNUmber(secretNumber); 
        if(score > highScore){
            highScore = score; 
            displayHighScore(score);
        }
    } else if(inputNum !== secretNumber){
        if(score > 1){
            score--; 
        bgColor("#ffb405");
        displayScore(score); 
        displayMessage(inputNum > secretNumber ? "Too High!!" : "Too Low !!")
        } else {
            displayMessage("Sorry, You lost the game!!");
        }
    } 
})

againBtn.addEventListener("click", function(){
    secretNumber = generateSecretNumber(1,20);
    score= 20; 
    displayScore(score);
    displayMessage("Start guessing...");
    displaySecretNUmber("?");
    bgColor("#222"); 
})

