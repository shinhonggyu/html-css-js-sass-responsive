let count = 2;

window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    let toAdd = document.createElement("div");
    toAdd.classList.add("box");
    toAdd.textContent = `${++count}번째목록`;
    document.querySelector("section").insertAdjacentElement("beforeend", toAdd);
  }
});

console.log("script.js");
