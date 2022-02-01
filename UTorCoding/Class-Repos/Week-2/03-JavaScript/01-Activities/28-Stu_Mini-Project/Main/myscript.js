// // during class time the below was how I thought it could work but the loop creates issues and now it's reallly broken from trying to fix those issues.
// let playerResults = {
//     wins: 0,
//     losses: 0,
//     ties: 0,
// };

// let choices = ["rock", "paper", "scissors"];
// let compPick = [];

// function playRPS() {

//     let userChoice = window.prompt("Enter rock, paper, or scissors");

//     if (!userChoice) {
//       return;
//     }

//     if ((userChoice !== "rock") && (userChoice !== "paper") && (userChoice !== "scissors")) {
//         window.prompt("Please! enter: rock, paper, or scissors");
//     }

//     window.alert(`The computer chose ${compPlays(choices)}`);

//     for (let x = 0; x < choices.length; x++) {
//         if (choices[x] === compPick[x]) {
//             playerResults.ties++;
//             window.alert("It's a tie!");
//         }
//         if (choices[x] !== compPick[x]) {
//             if ((choices[x] === "rock" && compPick[x] === "scissors") ||
//             (choices[x] === "paper" && compPick[x] === "rock") ||
//             (choices[x] === "scissors" && compPick[x] === "paper")) {
//                 playerResults.wins++;
//                 window.alert("You win!");
//             } else {
//                 playerResults.losses++;
//                 window.alert("You lost!");
//             }
//         }
//         let playAgain = window.confirm("Play again?");
//         if (playAgain) {
//             playRPS();
//         }
        
//         if(!playAgain) {
//           return;  
//         }
//     }
//     window.alert(`Stats:\n${playerResults.wins} wins XD\n${playerResults.losses} losses :(\n${playerResults.ties} ties :|`);   
// };

// function compPlays(arr) {
    
//     let index = Math.floor(Math.random() * arr.length);
//     compPick.push(arr[index]);
//     return compPick;
// };

// playRPS();