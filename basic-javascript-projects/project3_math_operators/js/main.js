// project3_math_operator - Math Operators Assignment

function displayAdditionResult() {
  // Perform an addition operation
  let number1 = 10;
  let number2 = 5;
  let result = number1 + number2;

  // Display the result in the paragraph with id "Math"
  document.getElementById("Math").innerHTML =
    "The result of " + number1 + " +" + number2 + " is: " + result;
}

function displayMultiplicationResult() {
  // Perform a multiplication operation
  let number1 = 7;
  let number2 = 6;
  let result = number1 * number2;

  // Display the result in the paragraph with id "Multiplication"
  document.getElementById("Multiplication").innerHTML =
    "The result of " + number1 + " × " + number2 + " is: " + result;
}

function displayDivisionResult() {
  // Perform a division operation
  let number1 = 20;
  let number2 = 4;
  let result = number1 / number2;

  // Display the result in the paragraph with id "Division"
  document.getElementById("Division").innerHTML =
    "The result of " + number1 + " ÷ " + number2 + " is: " + result;
}

function displaySubtractionResult() {
  // Perform a subtraction operation
  let number1 = 15;
  let number2 = 4;
  let result = number1 - number2;

  // Display the result in the paragraph with id "Subtraction"
  document.getElementById("Subtraction").innerHTML =
    "The result of " + number1 + " - " + number2 + " is: " + result;
}

function displayMultipleOperations() {
  let addition = 12 + 3;
  let subtraction = 12 - 3;
  let multiplication = 12 * 3;
  let division = 12 / 3;
  let modulus = 12 % 3;

  // Combined operation: ((12 + 3) * 3 - 12) / 3
  let combined = ((12 + 3) * 3 - 12) / 3;

  let message = `
    12 + 3 = ${addition} <br />
    12 - 3 = ${subtraction} <br />
    12 × 3 = ${multiplication} <br />
    12 ÷ 3 = ${division} <br />
    12 % 3 = ${modulus} <br />
    <strong>Combined operation ((12 + 3) × 3 - 12) ÷ 3 = ${combined}</strong>
  `;

  document.getElementById("MultipleOperations").innerHTML = message;
}
