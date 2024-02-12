function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeButton = document.querySelector(".change-color");
changeButton.addEventListener("click",(event) => {
  const randomColor = getRandomHexColor();
  const body = document.body;
  const span = document.querySelector(".color");
  body.style.backgroundColor = randomColor;
  span.style.color = randomColor;
});