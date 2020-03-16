//Questions & Answers//
//export const quizQuestions = [
   // {
    //questionOneFunc : "What does HTML stand For?",
   // A : "Hyper Text Markup Language",
   // B : "HyperLinks That Mark Languages",
   // C : "Hyperlinks and text Markup Langauges",
   // D : "Home Tool Markup Language",
   // correct : "A"
  //  },
    
  //  {
  //  questionTwoFunc : "What is the body;s largest organ?",
  //  A : "Lungs",
  ////  B : "Skin",
  //  C : "Small Intestine",
  //  D : "Blood",
  //  correct : "B"
  //  },
    
  //  {
  //  questionThreeFunc : "What is the symbol of potassium?",
  //  A : "P",
  //  B : "Q",
  //  C : "K",
  //  D : "O",
  //  correct : "C"
  //  },
    
  //  {
  //  questionFourFunc : "Which planet has the most gravity?",
  //  A : "Earth",
  //  B : "Pluto",
  //  C : "Mucery",
  //  D : "Jupiter",
  //  correct : "D" 
  //  },
    
   // {
   // questionFiveFunc : "How many tastebuds does the average human have?",
   // A : "10,000",
  //  B : "100,000",
  //  C : "50,000",
   // D : "1,000",
  //  correct : "A" 
  //  },
  //  ];


//Attempt 1 of Quiz //


//var timer = document.querySelector("#timer");
//var initialAdder = document.querySelector("#initialAdder");
//var secondsLeft = 60;
//var questionOneFunc= document.querySelector("#questionOneFunc");
//var startQuizFun= document.querySelector("#startQuizFun");
//var questionTwoFunc= document.querySelector("#questionTwoFunc");
//var questionThreeFunc= document.querySelector("#questionThreeFunc");
//var questionFourFunc= document.querySelector("#questionFourFunc");
//var questionFiveFunc= document.querySelector("#questionFiveFunc");
//var highestScore= document.querySelector("#highestScore");
//var submit= document.querySelector("#submit");
//var endTimer= document.querySelector("#endTimer");
//var questions =document.querySelector("#questions");
//var displayQuestion= document.querySelector("#displayQuestion");
//var savedInitials= document.querySelector("#savedInitials");
//var savedScore= document.querySelector("#savedScore");
//var startQuiz= document.querySelector("#startQuiz");


//Questions & Answers//
//let quizQuestions = [
 // {
 

//startQuizFun.addEventListener("click")  // CLick on button to start the quiz//
//savedInitials = new Array (""); // Saving initials to array//
//document.getElementById("initials").innerHTML = savedInitials;

//savedScore = new Array (""); // Saving score to array//
//document.getElementById("score").innerHTML = savedScore;


  // Save Quiz outputs to local Storage//
 //   if (localStorage.getItem("initals") !==  null) {
 //   savedScore = localStorag.getItem ("score");
 //   savedInitials = localStorag.getItem ("initails");
 //   }
 //   (startQuiz.style.display === "none") {
 //   questions.style.display= "flex";
 //   } else {
 //     startQuiz.style.display = "none";
 //   }
  //  displayQuestion = 0;
    
  //Setting Timer//
   // var timerInterval = setInterval(function() {
  //  secondsLeft--;
   // timer.textContent = secondsLeft + "time left";
  
  //when timer ends//
 // if (secondsLeft === 0) {
  //  timer.textContent = "";
 //    clearInterval(timerInterval)
  //    sendMessage ();
 // }
 // }, 1000);
  
  //timer has ended message//
 // function sendMessage() {
 // timern textContent = "Your Time is Up";
  //}


//Clicking buttons//
//document.getElementById("nextButton").addEventListener("click", displayQuestions)

//function displayQuestions () {
  //document.getElementById("nextButton").innerHTML = questionOne (); 
//}

//Make Question Visble//
//document.getElementById("nextButton").style.visibility ="visible";




//toggling with css questions so when one question is asked the previous question disappears//



 // let lastQuestionIndex = questions.length -1;
 // let runningQuestionIndex = 0;

 // Function renderQuestion () {
 //   let q = questions[runningQuestionIndex]
 //   questionFive.innerHTML = "<p>" + q.question + "<p>";
 //   choiceA.innerHTML= q.choiceA;
 //   choiceB.innerHTML= q.choiceB;
 //   choiceC.innerHTML= q.choiceC;
 //   choiceD.innerHTML= q.choiceD;
 // }

 // runningQuestionIndex = 0
 // renderQuestion ()
 // runningQuestionIndex ++

  

 // document.addEventListener("click", function(){ // CLick on button to start the quiz//
 //   document.getElementById("questionOne").innerHTML = ("");
 // });


 // function setTimer () {
//    var timerInterval = setInterval(function() {
 //   secondsLeft--;
 //   timer.textContent = secondsLeft + "time left";
  
  //when timer ends//
 // if (secondsLeft === 0) {
//    document.getElementById("timer").textContent = "Your Time Is Up!";
//    clearInterval(timerInterval)
//      sendMessage ();
//  }
//  }, 1000);
////  }
  //timer has ended message//
 // function sendMessage() {
// document.getElementById("timer").textContent = "Your Time Is Up!";
//
 // timer.textContent = "Your Time is Up";
 // }
  
 // setTimer ();
