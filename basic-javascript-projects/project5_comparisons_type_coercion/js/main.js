function showTypeOf() {
  let sampleValue = 123;
  const resultContent = `<code>let sampleValue = 123;</code> <br> typeof sampleValue is ${typeof sampleValue}`;
  document.getElementById("typeOfResult").innerHTML = resultContent;
}

function showBooleanComparison() {
  let isGreater = 10 > 5;
  let isLesser = 3 < 1;

  const output = `
    <code>let isGreater = 10 > 5;</code> → ${isGreater} (<em>${typeof isGreater}</em>)<br>
    <code>let isLesser = 3 < 1;</code> → ${isLesser} (<em>${typeof isLesser}</em>)
  `;
  document.getElementById("booleanResult").innerHTML = output;
}

function typeCoercionExample() {
  let number = 5;
  let text = " apples";
  let result = number + text; // Type coercion occurs here
  const output = `<code>let number = 5; let text = " apples"; let result = number + text;</code><br>Result: ${result} <br>Type: ${typeof result}`;
  document.getElementById("typeCoercionResult").innerHTML = output;
}

function showInfinityExamples() {
  let positiveInfinity = 1.7976931348623157e10308;
  let negativeInfinity = -1.7976931348623157e10308;

  const output = `
    <code>let positiveInfinity = 1.7976931348623157E+10308;</code><br>
    <code>let negativeInfinity = -1.7976931348623157E+10308;</code><br><br>
    Result: ${positiveInfinity}, ${negativeInfinity}
  `;
  document.getElementById("infinityResult").innerHTML = output;
}

function doubleEqualsExample() {
  let comparisonTrue = 5 == "5"; // true due to type coercion
  let comparisonFalse = 5 == "6"; // false

  const output = `
    <code>5 == "5"</code> → ${comparisonTrue} <br>
    <code>5 == "6"</code> → ${comparisonFalse}
  `;
  document.getElementById("doubleEqualsResult").innerHTML = output;
}

function tripleEqualsExample() {
  const sameTypeSameValue = 100 === 100; // true
  const diffTypeDiffValue = 100 === "200"; // false
  const diffTypeSameValue = 100 === "100"; // false
  const sameTypeDiffValue = 100 === 200; // false

  const output = `
    <code>100 === 100</code> → ${sameTypeSameValue} <br>
    <code>100 === "200"</code> → ${diffTypeDiffValue} <br>
    <code>100 === "100"</code> → ${diffTypeSameValue} <br>
    <code>100 === 200</code> → ${sameTypeDiffValue}
  `;
  document.getElementById("tripleEqualsResult").innerHTML = output;
}

function logicalOperatorsExample() {
  const andTrue = (10 > 5) && (20 > 15);
  const andFalse = (10 > 5) && (2 > 15);
  const orTrue = (10 > 5) || (2 > 15);
  const orFalse = (1 > 10) || (3 > 20);

  const output = `
    <code>(10 > 5) && (20 > 15)</code> → ${andTrue} <br>
    <code>(10 > 5) && (2 > 15)</code> → ${andFalse} <br>
    <code>(10 > 5) || (2 > 15)</code> → ${orTrue} <br>
    <code>(1 > 10) || (3 > 20)</code> → ${orFalse}
  `;
  document.getElementById("logicalOperatorsResult").innerHTML = output;
}
