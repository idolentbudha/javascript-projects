// Concatenates multiple strings and displays the full sentence
function concatenateFunction() {
  var part1 = "I have ";
  var part2 = "made this ";
  var part3 = "into a complete ";
  var part4 = "sentence.";
  var wholeSentence = part1.concat(part2, part3, part4);
  document.getElementById("concatenateResult").innerHTML = wholeSentence;
}

// Extracts a portion of the sentence using slice() and displays it
function sliceMethod() {
  var sentence = "All work and no play makes Johnny a dull boy.";
  var section = sentence.slice(27, 33); // Extracts 'Johnny'
  document.getElementById("SliceResult").innerHTML = section;
}

// Converts a number to a string and displays it
function convertToString() {
  var x = 123;
  var result = `<code>var x=123; <br>var result=x.toString();<br>/*RESULT*/<br>"${x.toString()}"</code>`;
  document.getElementById("NumberToString").innerHTML = result;
}

// Formats a number to a specified precision and displays it
function precisionMethod() {
  var num = 123938.301239854019421124;
  var precisedNumber = num.toPrecision(10);
  var result = `${num}.toPrecision(10) = ${precisedNumber}`;
  document.getElementById("precisionResult").innerHTML = result;
}
