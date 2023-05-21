const boxes = document.querySelectorAll(".box"),
  boxContainer = document.querySelector(".overview-box"),
  alignBtns = document.querySelectorAll(".align-btn"),
  directionBtns = document.querySelectorAll(".direction button");

alignBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeActive(alignBtns);
    btn.classList.add("active");
    boxContainer.style.alignItems = btn.value;
  });
});

directionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeActive(directionBtns);
    btn.classList.add("active");
    boxContainer.style.flexDirection = btn.value;
  });
});

function removeActive(buttons) {
  buttons.forEach((btn) => btn.classList.remove("active"));
}
