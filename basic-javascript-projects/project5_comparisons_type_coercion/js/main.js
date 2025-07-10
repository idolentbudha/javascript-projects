function showTypeOf() {
  let sampleValue = 123;
  const resultContent = `<code>let sampleValue = 123;</code> <br> typeof sampleValue is ${typeof sampleValue}`;
  document.getElementById("typeOfResult").innerHTML = resultContent;
}
