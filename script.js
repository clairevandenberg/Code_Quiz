//importing questions from Questions.js//
import * as SelectQuestion from "./Questions.js";
var questions = SelectQuestion.myQuestions

//setting the timer//

var timer = document.querySelector("#time");
var initialAdder = document.querySelector("#initials")
var secondsLeft = 60;
var questionOneFunc= document.querySelector("#questionOne")
var startQuizFun= document.querySelector("#beginQuiz")
var questionTwoFunc= document.querySelector("#questionTwo")
var questionThreeFunc= document.querySelector("#questionThree")
var questionFourFunc= document.querySelector("#questionFOur")
var questionFiveFunc= document.querySelector("#questionFive")
var highestScore= document.querySelector("#highScore")
var submitAnswer= document.querySelector("#submitAnswerBtn")
var endTimer= document.querySelector("#endTimer")



//Timer/
function setTimer () {
  var timerInterval = setInterval(function() {
  secondsLeft--;
  timer.textContent = secondsLeft + "time left";

//when timer ends//
if (secondsLeft === 0) {
  timer.textContent = "";
   clearInterval(timerInterval)
    sendMessage ();
}
}, 1000);
}
//timer has ended message//
function sendMessage() {
timer.textContent = "Your Time is Up";
}

setTimer ();


//Clicking buttons//
document.getElementById("nextButton").addEventListener("click", displayQuestions)

function displayQuestions () {
  document.getElementById("nextButton").innerHTML = questionOne (); 
}

//Make Question Visble//
//document.getElementById("nextButton").style.visibility ="visible";




//toggling with css questions so when one question is asked the previous question disappears//

function startQuizFun() {
  if (startQuiz.style.display === "none") {
    startQuiz.style.display = "block";
  } else {
    startQuiz.style.display = "none";
  }
}

function questionOneFunc() {
  if (questionOne.style.display === "none") {
    questionOne.style.display = "block";
  } else {
    questionOne.style.display = "none";
  }
}

function questionTwoFunc() {
  if (questionTwo.style.display === "none") {
    questionTwo.style.display = "block";
  } else {
    questionTwo.style.display = "none";
  }
}

function questionThreeFunc() {
  if (questionThree.style.display === "none") {
    questionThree.style.display = "block";
  } else {
    questionThree.style.display = "none";
  }
}

function questionFourFunc() {
  if (questionFour.style.display === "none") {
    questionFour.style.display = "block";
  } else {
    questionFour.style.display = "none";
  }
}

function questionFiveFunc() {
  if (questionFive.style.display === "none") {
    questionFive.style.display = "block";
  } else {
    questionFive.style.display = "none";
  }
}
