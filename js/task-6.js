function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const div = document.querySelector("#boxes");
const divInput = document.querySelector("#controls");
const input = divInput.firstElementChild;




const createBoxes = (amount) => {
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    const randColor = getRandomHexColor();
    const newDiv = document.createElement("div");
    div.append(newDiv);
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = randColor;
    newDiv.textContent = i;
    size += 10;
  }
};

const destroyBoxes = () => {
  div.innerHTML = '';
};

createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100){
    createBoxes(amount);
    input.value = "";
  }
  else {
    alert('Please enter a number between 1 and 100');
  }
  
});

destroyButton.addEventListener("click", destroyBoxes);


