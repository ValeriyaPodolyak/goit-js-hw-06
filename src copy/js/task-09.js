
const btnRef = document.querySelector("button.change-color");
const codeColorRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

function getRandomHexColor() {
  const newColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)
      .toLowerCase();
  console.dir(newColor);
  bodyRef.style.backgroundColor = newColor;
  codeColorRef.textContent = newColor;
};

btnRef.addEventListener('click', () =>
  getRandomHexColor()); 




  