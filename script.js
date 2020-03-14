//setting the timer//

var timer = document.querySelector("#time");
var initialAdder = document.querySelector("#initials")
var secondsLeft = 10;
var questionOneFunc= document.querySelector("#questionOne")
var startQuizFun= document.querySelector("#startQuiz")
var questionTwoFunc= document.querySelector("#questionTwo")
var questionThreeFunc= document.querySelector("#questionThree")
var questionFourFunc= document.querySelector("#questionFOur")
var questionFiveFunc= document.querySelector("#questionFive")

function setTime() {
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

setTime ();

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

  //Saving Initials To Save Password In Local Storage//
function displayMessage (type, message) {
msgDiv.testContent = messgage ;
msgDiv.setAttribute ("class", type);
}
console.log (initialAdder);
initialAdder.addEventListener("click", function(initials) {
  event.preventDefault();
});

