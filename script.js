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

//Buttons//
function buttons() {
startQuizFun.addEventListener('click', startQuiz);
submitAnswer.addEventListener('click', nextQuestion);
}

//Questions & Answers//
let quizQuestions = [
{
question : "What does HTML stand For?",
A : "Hyper Text Markup Language",
B : "HyperLinks That Mark Languages",
C : "Hyperlinks and text Markup Langauges",
D : "Home Tool Markup Language",
correct : "A"
},

{
question : "What is the body;s largest organ?",
A : "Lungs",
B : "Skin",
C : "Small Intestine",
D : "Blood",
correct : "B"
},

{
question : "What is the symbol of potassium?",
A : "P",
B : "Q",
C : "K",
D : "O",
correct : "C"
}

{
question : "Which planet has the most gravity?",
A : "Earth",
B : "Pluto",
C : "Mucery",
D : "Jupiter",
correct : "D" 
}

{
question : "How many tastebuds does the average human have?",
A : "10,000",
B : "100,000",
C : "50,000",
D : "1,000",
correct : "A" 
}
];

//Displaying Questions & Answers//
function buildQuiz () {

quizQuestions
}



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

