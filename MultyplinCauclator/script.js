document
  .getElementById("multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

function multiplyNumbers() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let result = num1 * num2;

  document.getElementById("result").innerText = result;
}
