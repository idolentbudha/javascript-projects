function showTypeOf() {
  let sampleValue = 123;
  const resultContent = `<code>let sampleValue = 123;</code> <br> typeof sampleValue is ${typeof sampleValue}`;
  document.getElementById("typeOfResult").innerHTML = resultContent;
}

function typeCoercionExample() {
  let number = 5;
  let text = " apples";
  let result = number + text; // Type coercion occurs here
  const output = `<code>let number = 5; let text = " apples"; let result = number + text;</code><br>Result: ${result} <br>Type: ${typeof result}`;
  document.getElementById("typeCoercionResult").innerHTML = output;
}

function showInfinityExamples() {
  let positiveInfinity = 1.7976931348623157E+10308;
  let negativeInfinity = -1.7976931348623157E+10308;

  const output = `
    <code>let positiveInfinity = 1.7976931348623157E+10308;</code><br>
    <code>let negativeInfinity = -1.7976931348623157E+10308;</code><br><br>
    Result: ${positiveInfinity}, ${negativeInfinity}
  `;
  document.getElementById("infinityResult").innerHTML = output;
}
