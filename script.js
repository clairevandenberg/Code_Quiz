// Second Attempt of Quiz //
var startQuiz = document.querySelector("#startBtn");
var questionContainer = document.querySelector("#questionContainer");
var questionElement = document.querySelector("#question");
var answerBtn= document.querySelector("#answerBtn");

startBtn.addEventListener("click", startButton () );

function startButton () {
console.log('started')
startButton.classList.add('hidden');
questionContainerElement.classList.remove('hidden');
setNextQuestion ()
}

function setNextQuestion () {
  showQuestion [currentQuestionIndex];
}

function showQuestion(questions) {
  questionElement.innerText = question.question
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