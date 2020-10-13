"use strict";

const number = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
const hint = document.querySelector(".js-hint");
const attempts = document.querySelector(".js-attempts");

let random = Math.ceil(Math.random() * 100);

console.log(random);

function handleButtonClick() {
  let numberValue = parseInt(number.value);
  console.log(numberValue);
  if (numberValue === random) {
    hint.value = "Has ganado campeona!!!";
    console.log("Has ganado campeona!!!");
  } else if (numberValue < random && numberValue >= 1 && numberValue <= 100) {
    hint.value = "Demasiado bajo.";
    console.log("Demasiado bajo.");
  } else if (numberValue > random && numberValue >= 1 && numberValue <= 100) {
    hint.value = "Demasiado alto.";
    console.log("Demasiado alto.");
  } else if (numberValue <= 0 || numberValue > 100) {
    hint.value = "El número debe estar entre 1 y 100.";
    console.log("El número debe estar entre 1 y 100.");
  }

  let countClick = 0;

  let valueAttempts = attempts.value;
  function addClick() {
    countClick = countClick += 1;
    return (valueAttempts = `Número de intentos: ${countClick}`);
    console.log(valueAttempts);
  }
}

button.addEventListener("click", handleButtonClick);
