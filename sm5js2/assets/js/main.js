// отложенный вызов

const timeBlock = document.getElementById("time_modal");
const timeBtn = document.querySelector(".time-button");
const countEl = document.querySelector(".count_time");
const time_close = document.getElementById("time_close");
const window_close = document.getElementById("window_close");
let bodyel = document.body; 
timeBtn.style.display = "none"

setTimeout(() => {
  countFunc();
}, 10000);
time_close.style.display = "none";
function countFunc() {
  timeBlock.style.display = "block";
  bodyel.style.overflow = "hidden"; 
  // timeBtn.style.display = "none"
  let count = 5;
  countHtml(count);
  // timeBtn.style.display = "block";
  const countInterval = setInterval(() => {
    count = count - 1;
    countHtml(count);

    if (count === 0) {
      clearInterval(countInterval);
      // timeBlock.classList.remove('active')
      // timeBtn.classList.add('active')
      time_close.style.display = "flex";
      window_close.style.display = "none";
      countEl.style.display = "none";

      time_close.addEventListener("click", function (event) {
        timeBlock.style.display = "none";
        timeBtn.style.display = "block";
        event.preventDefault();
        bodyel.style.overflow = "visible"; 
      });
    }
    timeBtn.addEventListener("click", function (y) {
      timeBlock.style.display = "block";
      timeBtn.style.display = "block";
      time_close.style.display = "flex";
      y.preventDefault();
    });
  }, 1000);
}

function countHtml(value) {
  countEl.innerHTML = value;
}

timeBtn.addEventListener("click", () => {
  countFunc();
  timeBlock.classList.add("active");
  //   time_close.style.display = "block";
});

// отложенный вызов
