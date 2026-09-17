function updateResult(value) {
  let result = document.getElementById("result");
  result.textContent = value;
  result.scrollLeft = result.scrollWidth;
}

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
