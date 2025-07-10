function onClickHandler() {
  let greeting = "Hello world";
  let recipient = "Web Enthusiast!";

  let fullMessage = greeting + recipient + "Welcome to my function assignment.";

  document.getElementById("function_paragraph").innerHTML = fullMessage;
}

function onClickConcateanteBtn() {
  // Declare a variable and assign it an initial string value.
  let text_part1 = "This is the first part of the string.";

  // Use the += operator to concatenate another string to text_part1.
  // This is equivalent to: text_part1 = text_part1 + " And this is the second part!";
  text_part1 += " And this is the second part, added using the += operator!";

  // Get the paragraph element with the ID 'operator_paragraph'
  // and set its inner HTML to the concatenated string.
  document.getElementById("operator_paragraph").innerHTML = text_part1;
}
