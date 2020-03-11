//timer//
var timer = document.querySelector("time");

var secondsLeft = 60;

function setTime() {
timerInterval =setInterval(function() {
secondsLeft--;
timer.innerText = secondsLeft + "time left";
console.log(secondsLeft)
document.querySelector("time").innerHTML = secondsLeft;

//When Timer Runs Out//
if (secondsLeft === 0) {
    clearInterval(timerInterval)
    sendMessage ();
}

}, 1000);
}

function sendMessage() {
    timer.textContent = "TIME IS UP";
}

setTime ();
