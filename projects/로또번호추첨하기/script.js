const numbersDiv = document.querySelector(".numbers");
const drawBtn = document.getElementById("draw");
const resetBtn = document.getElementById("reset");

const lottoNumbers = [];
const colors = ["tomato", "teal", "orange", "purple", "blue"];

function paintNumber(number) {
  const eachNumDiv = document.createElement("div");
  let colorIndex = Math.floor(number / 10);
  eachNumDiv.classList.add("eachnum");
  eachNumDiv.style.backgroundColor = colors[colorIndex];
  eachNumDiv.textContent = number;
  numbersDiv.appendChild(eachNumDiv);
}

drawBtn.addEventListener("click", function () {
  for (let i = 0; lottoNumbers.length < 6; i++) {
    let ran = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran);
      paintNumber(ran);
    }
  }
});

resetBtn.addEventListener("click", function () {
  numbersDiv.innerHTML = "";
  lottoNumbers.splice(0, 6);
});
