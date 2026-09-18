import { calculate } from "./calculator.js";

function backSpaceAction() {
  const input = document.getElementById("input");
  let len = input.value.length;
  input.value = input.value.slice(0, len - 1);
}

const backSpaceButton = document.getElementById("back-space");
backSpaceButton.addEventListener("click", () => {
  backSpaceAction();
});

function appendToInput(char) {
  const input = document.getElementById("input");
  input.value += char;
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const char = btn.textContent;
    appendToInput(char);
  });
});

function updateResult(value) {
  let result = document.getElementById("result");
  result.textContent = value;
  result.scrollLeft = result.scrollWidth;
}

const equalsButton = document.getElementById("equals-button");
equalsButton.addEventListener("click", () => {
//  const input = document.getElementById("input");
//  let exp = input.value;
//  let result = calculate(exp);
//
//  if (typeof result === "string") {
//    updateResult(result);
//  } else {
//    updateResult(`${exp} = ${result}`);
//    input.value = "";
//  }
});
