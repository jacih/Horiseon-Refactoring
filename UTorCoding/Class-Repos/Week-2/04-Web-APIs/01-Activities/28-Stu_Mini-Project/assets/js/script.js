//eventlistener start button click

//eventlistener reset button click

//this code can be leveraged for the seconds remaining counter

// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');

// var message =
//   'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// var words = message.split(' ');
// //console.log(words);

// function countdown() {
//   let timeLeft = 5;

//   // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   let timeInterval = setInterval(function () {
//     timeLeft--;
//     timerEl.textContent = timeLeft + " seconds remaining";

//     if(timeLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timeInterval);
//       timerEl.textContent = "";
//       displayMessage();
//     }
//   }, 1000);
// }

// // Displays the message one word at a time
// function displayMessage() {
//   let wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   let msgInterval = setInterval(function () {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 1000);
// }

// countdown();

// this is the code we can leverage and repurpose for the wins + losses counter
// let count = 0;
// let incrementEl = document.querySelector("#increment");
// let decrementEl = document.querySelector("#decrement");
// let countEl = document.querySelector("#count");

// function setCounterText() {
//   countEl.textContent = count;
// }

// // TODO: Add event listener to increment button
// incrementEl.addEventListener("click", function() {
//     count++;
//     //set count attribute to new count value
//     setCounterText();
// });

// // TODO: Add event listener to decrement button 
// decrementEl.addEventListener("click", function() {
//   if (count > 0) {
//     count--;
//     //set count attribute to new count value
//     setCounterText();
//   }
// });

//localstorage for storing wins and losses

startButton = document.querySelector("#start-button");
gameOverText = document.querySelector("#game-over-text");
winCounter = document.querySelector("#win-count");
lossCounter = document.querySelector("#loss-count");

winCount = winCounter.textContent
lossCount = winCounter.textContent

let timeLeft = 10;

function countdown() {
    let timeInterval = setInterval(function() {
        timeLeft--;
        countdownNumber.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

startButton.addEventListener ("click", countdown);