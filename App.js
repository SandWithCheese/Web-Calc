let symbol = "";
let num1 = 0;
let num2 = 0;
let decimal = false;

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

function clickNumber(id) {
  const val = document.getElementById(id).value;
  const result = document.getElementById("result");

  if (result.value === "0") {
    result.value = val;
  } else {
    // Store results
    const resultStored = val;

    // Add items to input
    result.value += resultStored;
  }
}

function clickZero(id) {
  const val = document.getElementById(id).value;
  const result = document.getElementById("result");
  if (result.value === "0") {
  } else {
    // Store results
    const resultStored = val;

    // Add items to input
    result.value += resultStored;
  }
}

function clickDoubleZero(id) {
  const val = document.getElementById(id).value;
  const result = document.getElementById("result");
  if (result.value === "0" || result.value === "") {
    result.value = "0";
  } else {
    // Store results
    const resultStored = val;

    // Add items to input
    result.value += resultStored;
  }
}

function clearData() {
  document.getElementById("result").value = "";
  symbol = "";
}

function deleteLast() {
  const result = document.getElementById("result");

  // Result without last char
  const edited_result = result.value.slice(0, -1);
  result.value = edited_result;
  symbol = "";
}

function plus() {
  const result = document.getElementById("result");
  if (result.value === "") {
  } else {
    num1 = Number(result.value);
    result.value = "";
    symbol = "+";
  }
}

function minus() {
  const result = document.getElementById("result");
  if (result.value === "") {
  } else {
    num1 = Number(result.value);
    result.value = "";
    symbol = "-";
  }
}

function mult() {
  const result = document.getElementById("result");
  if (result.value === "") {
  } else {
    num1 = Number(result.value);
    result.value = "";
    symbol = "x";
  }
}

function divide() {
  const result = document.getElementById("result");
  if (result.value === "") {
  } else {
    num1 = Number(result.value);
    result.value = "";
    symbol = "/";
  }
}

function percent() {
  const result = document.getElementById("result");
  if (result.value === "") {
  } else {
    num1 = Number(result.value);
    result.value = num1 / 100;
  }
}

function equal() {
  const result = document.getElementById("result");
  if (symbol === "+") {
    num2 = Number(result.value);
    result.value = num1 + num2;
    symbol = "";
  }
  if (symbol === "-") {
    num2 = Number(result.value);
    result.value = num1 - num2;
    symbol = "";
  }
  if (symbol === "x") {
    num2 = Number(result.value);
    result.value = num1 * num2;
    symbol = "";
  }
  if (symbol === "/") {
    num2 = Number(result.value);
    result.value = num1 / num2;
    symbol = "";
  }
}

function comma() {
  const result = document.getElementById("result");
  if (!isFloat(result) && !decimal) {
    result.value += ".";
    decimal = true;
  }
}
