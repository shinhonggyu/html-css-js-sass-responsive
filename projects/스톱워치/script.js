let minutes = 0;
let seconds = 0;
let tenMillis = 0;
let intervalId;
const appendMinutes = document.getElementById("minutes");
const appendSeconds = document.getElementById("seconds");
const appendTens = document.getElementById("tenMillis");
const buttonStart = document.getElementById("btn__start");
const buttonStop = document.getElementById("btn__stop");
const buttonReset = document.getElementById("btn__reset");

buttonStart.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = setInterval(operateTimer, 10);
});

buttonStop.addEventListener("click", function () {
  clearInterval(intervalId);
});

buttonReset.addEventListener("click", function () {
  clearInterval(intervalId);
  tenMillis = 0;
  seconds = 0;
  minutes = 0;
  appendTens.textContent = "00";
  appendSeconds.textContent = "00";
  appendMinutes.textContent = "00";
});

function operateTimer() {
  tenMillis++;
  appendTens.textContent = tenMillis > 9 ? tenMillis : "0" + tenMillis;
  if (tenMillis > 99) {
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : "0" + seconds;
    tenMillis = 0;
    appendTens.textContent = "00";
  }

  if (seconds > 59) {
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : "0" + minutes;
    seconds = 0;
    appendSeconds.textContent = "00";
  }
}
