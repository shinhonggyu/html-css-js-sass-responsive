let count = 2;

console.log(document.body.offsetHeight);
console.log(window.innerHeight);

window.addEventListener("scroll", function () {
  console.log(window.innerHeight + window.scrollY);
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    let toAdd = document.createElement("div");
    toAdd.classList.add("box");
    toAdd.textContent = `${++count}번째목록`;
    document.querySelector("section").insertAdjacentElement("beforeend", toAdd);
  }
});

console.log("script.js");
