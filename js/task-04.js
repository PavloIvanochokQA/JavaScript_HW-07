function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes')
const inputFieldRef = document.querySelector("input")


btnCreateRef.addEventListener("click", createBoxes);
btnDestroyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputFieldRef.value;

  let markup = "";

  for (let index = 0; index < amount; index++) {
    let divWidth = 30 + (index * 10);
    let divHeight = 30 + (index * 10);
    markup = markup.concat(
      `<div width="${divWidth}" height = "${divHeight}" style="background-color:${getRandomHexColor()}"></div>`
    );
  }
  divBoxes.innerHTML = markup
};

function destroyBoxes() {
  divBoxes.innerHTML = ""
};