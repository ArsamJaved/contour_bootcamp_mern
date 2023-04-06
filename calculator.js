let result = document.getElementById("result");

function appendValue(val) {
  result.value += val;
}

function calculate() {
  let expression = result.value;
  expression = expression.replaceAll("%", "/100");
  result.value = eval(expression);
}
