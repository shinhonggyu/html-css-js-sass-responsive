const spans = document.querySelectorAll("span");
const contents = document.querySelectorAll(".content");

spans.forEach((span, index) => {
  span.addEventListener("click", function () {
    window.scroll({ top: contents[index].offsetTop, behavior: "smooth" });
  });
});

// spans.forEach((span, index) =>
//   span.addEventListener("click", () =>
//     contents[index].scrollIntoView({ behavior: "smooth" })
//   )
// );
