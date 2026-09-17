function updateResult(value) {
  let result = document.getElementById("result-span");
  result.textContent = value;
  result.scrollLeft = result.scrollWidth;
}
updateResult("0123456789abcdhhhhhhhhhhhhhhhhhhhhhhhhhh = 5.5");
