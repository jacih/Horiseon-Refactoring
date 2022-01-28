//parent function isWinner will check players input against computer
let playerChoice = {
    wins: 0,
    losses: 0,
    ties: 0,
    rounds: 0,
};

let playerChoices = ["rock", "paper", "scissors"];

let choice = prompt("rock, paper, scissors");
let choiceCount = 0;

function isWinner(string1, string2) {
    
// function to check playerChoice versus CPU
}

function cpuAnswers() {
//function to generate random CPU choice
let num = Math.floor(Math.random() * playerChoices.length);
let compChoice = "";
    if (num === 0) {
        compChoice = "rock";
    } else if (num === 1) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
return compChoice;
}

//output 