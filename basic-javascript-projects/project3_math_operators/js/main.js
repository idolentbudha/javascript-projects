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
