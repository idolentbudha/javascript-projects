function concatenateFunction() {
  var part1 = "I have ";
  var part2 = "made this ";
  var part3 = "into a complete ";
  var part4 = "sentence.";
  var wholeSentence = part1.concat(part2, part3, part4);
  document.getElementById("concatenateResult").innerHTML = wholeSentence;
}

function sliceMethod() {
  var sentence = "All work and no play makes Johnny a dull boy.";
  var section = sentence.slice(27, 33);
  document.getElementById("SliceResult").innerHTML = section;
}
