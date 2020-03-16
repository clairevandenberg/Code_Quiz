// Second Attempt of Quiz //
var startQuiz = document.querySelector("#startBtn");
var nextButton = document.querySelector("#nextButton");
var questionContainer= document.querySelector("#questionContainer");
var questionElement = document.querySelector("#question");
var answerBtn= document.querySelector("#answerBtn");
var questionElement= document.querySelector("#questionEl");
var answerBtn = document.querySelector("#answerBtn");


startBtn.addEventListener("click", startButton () );

function startButton () {
console.log('started')
startBtn.classList.add('hidden');
currentQuestionIndex = 0
questionContainer.classList.remove('hidden');
setNextQuestion ()
nextButton.classList.remove("hidden")
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
  button.classList.add('btn')
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
    answerBtn
  }
}

function selectAnswer(e)
 {
   const selectButton = e.target
   const correct = selectButton.dataset.correct 
   setStatusClass(document.body,correct)
   Array.from(answerButtonElement.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
   })
   jf (shuffledQuestions.length >currentQuestionIndex +1)
    nextButton.classList.remove("hide");
 } else {
   startButton.innerText = "Restart"
   startButton.classlist.remove("hidden")
 }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add("correct")
    } else 
      element.classlist.add("wrong")
    }
  
var questions = [
  {
    questionOne: "What does HTML stand For?",
    A : "Hyper Text Markup Language",
    B : "HyperLinks That Mark Languages",
    C : "Hyperlinks and text Markup Langauges",
    D : "Home Tool Markup Language",
    correct : "A"
    },
    
    {
    questionTwo: "What is the body;s largest organ?",
    A : "Lungs",
    B : "Skin",
    C : "Small Intestine",
    D : "Blood",
    correct : "B"
    },
    
    {
    questionThree : "What is the symbol of potassium?",
    A : "P",
    B : "Q",
    C : "K",
    D : "O",
    correct : "C"
    },
    
    {
    questionFour : "Which planet has the most gravity?",
    A : "Earth",
    B : "Pluto",
    C : "Mucery",
    D : "Jupiter",
    correct : "D" 
    },
    
    {
    questionFive : "How many tastebuds does the average human have?",
    A : "10,000",
    B : "100,000",
    C : "50,000",
    D : "1,000",
    correct : "A" 
    },
    
]