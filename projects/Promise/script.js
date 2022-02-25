window.addEventListener("load", function () {
  let goal = document.createElement("div");
  goal.classList.add("goal");
  goal.style.right = `0px`;
  goal.style.top = `0px`;
  goal.style.bottom = `0px`;
  document.body.appendChild(goal);
  //
  let goalpos = goal.getBoundingClientRect().x;

  function makeCircle(idx) {
    console.log("makeCircle 실행");
    let resolve;
    let promise = new Promise(function (_resolve) {
      resolve = _resolve;
    });
    let running = false;
    let speed = 3 * (3 * Math.random());
    let left = 0;
    let size = 30;
    let top = idx * size;
    let circle = document.createElement("div");
    circle.addEventListener("click", start);
    circle.classList.add("mycircle");
    circle.style.top = `${top}px`;
    circle.style.left = `${left}px`;
    document.body.appendChild(circle);

    function run() {
      if (!running) return;
      left += speed;
      if (goalpos < left + size) {
        left = goalpos - size;
        running = false;
        resolve();
      }
      circle.style.left = `${left}px`;
      window.requestAnimationFrame(run);
    }

    function start() {
      running = true;
      run();
    }

    return {
      start,
      promise,
    };
  }

  // for (let i = 0; i < 10; i++) {
  let circle = makeCircle(0);
  let circle1 = makeCircle(1);
  let circle2 = makeCircle(2);
  let circle3 = makeCircle(3);

  async function aa() {
    console.log("aa함수 실행");
    console.log("A1");
    await circle.promise;
    console.log("A2");
    await circle1.promise;
    console.log("A3");
    await circle2.promise;
    console.log("A4");
    await circle3.promise;
    console.log("도착!");
  }
  // circle.start();
  // }

  aa();
});
