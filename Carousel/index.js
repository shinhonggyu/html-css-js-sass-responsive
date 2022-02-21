const 컨테이너 = document.querySelector(".container");
const 버튼들 = document.querySelectorAll("button");

버튼들.forEach((item, index) => {
  item.addEventListener("click", function () {
    컨테이너.style.transform = `translateX(-${index * 100}vw)`;
  });
});

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentImage = 0;
next.addEventListener("click", function () {
  currentImage = currentImage + 1;
  init();
  컨테이너.style.transform = `translateX(-${currentImage * 100}vw)`;
  if (currentImage === 2) {
    next.style.display = "none";
    return;
  }
});

prev.addEventListener("click", function () {
  currentImage = currentImage - 1;
  init();
  컨테이너.style.transform = `translateX(-${currentImage * 100}vw)`;
  if (currentImage === 0) {
    prev.style.display = "none";
    return;
  }
});

function init() {
  if (currentImage === 0) {
    prev.style.display = "none";
  } else {
    prev.style.display = "flex";
  }

  if (currentImage !== 2) {
    next.style.display = "flex";
  }
}

init();
