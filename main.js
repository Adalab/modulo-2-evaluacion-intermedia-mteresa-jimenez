"use strict";

const number = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
const hint = document.querySelector(".js-hint");
const attempts = document.querySelector(".js-attempts");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);

console.log(random);

function handleButtonClick() {
  let numberValue = parseInt(number.value);
  console.log(numberValue);
  if (numberValue === random) {
    hint.innerHTML = "Has ganado campeona!!!";
    console.log("Has ganado campeona!!!");
  } else if (numberValue < random && numberValue >= 1 && numberValue <= 100) {
    hint.innerHTML = "Demasiado bajo.";
    console.log("Demasiado bajo.");
  } else if (numberValue > random && numberValue >= 1 && numberValue <= 100) {
    hint.innerHTML = "Demasiado alto.";
    console.log("Demasiado alto.");
  } else if (numberValue <= 0 || numberValue > 100) {
    hint.innerHTML = "El número debe estar entre 1 y 100.";
    console.log("El número debe estar entre 1 y 100.");
  }

  attempts.innerHTML = `Número de intentos: ${addClick()}`;
}

let countClick = 0;

function addClick() {
  countClick = countClick + 1;

  return countClick;
}

button.addEventListener("click", handleButtonClick);
