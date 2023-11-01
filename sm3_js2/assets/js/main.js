const accordion_line = document.querySelectorAll(".accordion_line");
let i = 0;

console.log(accordion_line);

accordion_line.forEach((element) => {
  element.addEventListener("click", (e) => {
    const container = e.target.closest(".accordion_line");
    const img = container.querySelector(".plus");

    if (img.dataset.img === "plus") {
      img.src = "assets/img/minus.png";
      img.dataset.img = "minus";
    } else {
      img.src = "assets/img/Plus.png";
      img.dataset.img = "plus";
    }

    // const img_plus = document.querySelector(".plus");
    // img_plus = element.querySelector(".plus");
    answer = container.querySelector(".answer");
    answer.classList.toggle("answer_active");
  });
  // console.log(i);
  // if ((i = 1)) {
  //   img_plus.src = "assets/img/minus.png";
  // } else if ((i = 0)) {
  //   img_plus.src = "assets/img/Plus.png";
  //   i++;
  // }
});