function updateResult(value) {
  let result = document.getElementById("result");
  result.textContent = value;
  result.scrollLeft = result.scrollWidth;
}
updateResult("0123456789abcdhhhhhhhhhhhhhhhhhhhhhhhhhh = 5.5");

function backSpaceAction() {
  let input = document.getElementById("input");
  let len = input.value.length;
  input.value = input.value.slice(0, len - 1);
}
