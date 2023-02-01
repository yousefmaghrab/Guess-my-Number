"use strict";
// use secretnumber to save the number in variable
var secretNumber =
  //use trunc to convert number to digit
  Math.trunc(
    // use the random to select number between 1 to 20
    Math.random() * 20
  );
var highscore = 0;

// use function to displaymessage
const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// use queryselector to acesse the classnumber in html
document.querySelector(".check").addEventListener("click", function () {
  // use addeventListener to access the button and event it
  var guess = Number(document.querySelector(".guess").value); // use number to convert any words to number
  var score = document.querySelector(".score").textContent;
  // if score between 1 to 20 the prog is true
  if (score > 1) {
    //when the input is empty or no number
    if (!guess) {
      displaymessage("🎇 No number! ");
      score--;
      document.querySelector(".score").textContent = score;
    }
    //when the guess is upper than secretnumber
    else if (guess > secretNumber) {
      displaymessage(" 📈 Too High");
      score--;
      document.querySelector(".score").textContent = score;
    }
    //when the guess is lower than secretnumber
    else if (guess < secretNumber) {
      displaymessage("📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    }
    //when the player is win
    else if (guess == secretNumber) {
      displaymessage("✔👏 Correct number");
      document.querySelector("body").style.backgroundColor = "#60b347"; //change the backgroundcolor
      document.querySelector(".number").style.width = "30rem"; // doublcate th width
      document.querySelector(".number").textContent = secretNumber; // sow the secretNumber in the input
      //compare between the score and highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      } else if (highscore > score) {
        document.querySelector(".highscore").textContent = highscore;
      } else if (highscore == score) {
        document.querySelector("highscore").textContent = highscore;
      }
    }
  }
  // when score < 1 the game end and lose
  else {
    displaymessage("❗ You Lost the Game! ");
    document.querySelector(".score").textContent = 0;
  }
  console.log(guess, score);
});

// use again button to reset the number
document.querySelector(".again").addEventListener("click", function () {
  // new guess
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  displaymessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
