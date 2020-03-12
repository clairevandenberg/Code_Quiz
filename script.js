//setting the timer//

var timer = document.querySelector("#time");

var secondsLeft = 60;

function setTime() {
var timerInterval =setInterval(function() {
secondsLeft--;
timer.textContent = secondsLeft + "time left";
console.log(secondsLeft)

//when timer ends//
if (secondsLeft === 0) {
    clearInterval(timerInterval)
    sendMessage ();
}
console.log(secondsLeft)

}, 1000);
}
//timer has ended message//
function sendMessage() {
    timer.textContent = "Your Time is Up";
}

setTime ();

//toggling with css questions so when one question is asked the previous question disappears//

function startQuizFun() {
    var x = document.getElementById("startQuiz");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function questionOneFunc() {
    var x = document.getElementById("questionOne");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function questionTwoFunc() {
    var x = document.getElementById("questionTwo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function questionThreeFunc() {
    var x = document.getElementById("questionThree");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function questionFourFunc() {
    var x = document.getElementById("questionFour");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function questionFiveFunc() {
    var x = document.getElementById("questionFive");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }