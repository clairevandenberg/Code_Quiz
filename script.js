//timer//
var timer = document.querySelector("#time");

var secondsLeft = 60;

function setTime() {
var timerInterval =setInterval(function() {
secondsLeft--;
timer.textContent = secondsLeft + "time left";
console.log(secondsLeft)


if (secondsLeft === 0) {
    clearInterval(timerInterval)
    sendMessage ();
}
console.log(secondsLeft)

}, 1000);
}

function sendMessage() {
    timer.textContent = "Your Time is Up";
}

setTime ();