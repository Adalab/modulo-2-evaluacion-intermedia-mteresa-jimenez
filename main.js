"use strict";

const number = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
const hint = document.querySelector(".js-hint");
let hintBox = hint.innerHTML;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(getRandomNumber);

function handleButtonClick() {
  if (number.value === getRandomNumber) {
    hintBox = "Has ganado campeona!!!";
    console.log("Has ganado campeona!!!");
  } else if (number.value < getRandomNumber) {
    hintBox = "nonono";
    console.log("Demasiado bajo.");
  } else if (number.value > getRandomNumber) {
    hintBox = "nonono";
    console.log("Demasiado alto.");
  }
}

button.addEventListener("click", handleButtonClick);
