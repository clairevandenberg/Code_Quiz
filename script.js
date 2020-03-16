// Second Attempt of Quiz //
var startQuiz = document.querySelector("#startBtn");
var nextButton = document.querySelector("#nextButton");
var questionContainer= document.querySelector("#questionContainer");
var questionElement = document.querySelector("#question");
var answerBtn= document.querySelector("#answerBtn");
var questionElement= document.querySelector("#questionEl");
var answerBtn = document.querySelector("#answerBtn");
var timer = document.querySelector("#timer");
var secondsLeft = 60;
var initials = document.querySelector("initials")
var initialsBtn = document.querySelector("initialsBtn")

startBtn.addEventListener("click", startButton () );

function startButton () {
console.log('started');
timer.classList.remove("hidden");
startBtn.classList.add('hidden');
currentQuestionIndex = 0
questionContainer.classList.remove('hidden');
setNextQuestion ()
timer ()
nextButton.classList.remove("hidden");
}

//setting timer//
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + "time left";
  
  //when timer ends//
  if (secondsLeft === 0){
    timer.textContent = "";
     clearInterval(timerInterval)
      sendMessage ();
  }
  }, 1000);
  
  //timer has ended message//
  function sendMessage() {
  timer.textContent = "Your Time is Up";
  }

function setNextQuestion () {
  resetState()
  showQuestion(currentQuestionIndex);
}

function showQuestion(questions) {
  questionElement.innerText = question.question;
  question.answer.forEach(answer => {
    const button = document.querySelector('button')
    button.innerText= answer.innerText
  button.classList.add('btn') {
  if (answer.correct) {
    button.dataset.correct = answer.correct 
  }
  button.addEventListener("click", selectAnswer)
  answerButtonsElement.appendChild (button)
  })
}

function resetState {
  nextButton.classlist.add("hidden") 
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild
    (answerButtonElement.firstChild)
  }
}

function selectAnswer(e)
   const selectButton = e.target;
   const correct = selectButton.dataset.correct;
   setStatusClass(document.body,correct);
   Array.from(answerButtonElement.children).forEach(button =>
    setStatusClass(button, button.dataset.correct)); {
   if (shuffledQuestions.length >currentQuestionIndex +1);
    nextButton.classList.remove("hide");
  } else {
   startButton.innerText "Restart";
   startButton.classlist.remove("hidden");
   localStorage.setItem("currentQuestionIndex");
   localStorage.setItem("answerButtonElement");
 };


  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add("correct");
    } else 
      element.classlist.add("wrong");
    }
  
var questions = [
  {
    questions: "What does HTML stand For?",
    A : "Hyper Text Markup Language", correct: false
    B : "HyperLinks That Mark Languages", correct: false
    C : "Hyperlinks and text Markup Langauges", correct: false 
    D : "Home Tool Markup Language", correct: false 
    },
    
    {
      questions: "What is the body;s largest organ?",
    A : "Lungs", correct: false 
    B : "Skin", correct: true
    C : "Small Intestine", correct: false 
    D : "Blood", correct: false 
    correct : "B"
    },
    
    {
      questions : "What is the symbol of potassium?",
    A : "P", correct: false 
    B : "Q", correct: false 
    C : "K", correct: true
    D : "O", correct: false 
    correct : "C"
    },
    
    {
      questions : "Which planet has the most gravity?",
    A : "Earth", correct: false 
    B : "Pluto", correct: false 
    C : "Mucery", correct: false 
    D : "Jupiter", correct: true 
    },
    
    {
      questions : "How many tastebuds does the average human have?",
    A : "10,000", correct: true 
    B : "100,000", correct: false 
    C : "50,000", correct: false 
    D : "1,000", correct: false 
    },
]

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var initials = localStorage.getItem("Your Initials");

  if (initials === null) {
    return;
  }

  initials.textContent = initials;
}

initialsBtn.addEventListener("click", function(event) {
  event.preventDefault();

  var initials = document.querySelector("#initials").value;
  var correct = document.querySelector("#correct").value;
  
  if (initials === "") {
    displayMessage("error", "initials cannot be blank");
  } else {
    displayMessage("success", "your initials & password were successfully saved");

    localStorage.setItem("initials", initials);
    localStorage.setItem("correct", correct);
    renderLastRegistered();
  }
});
