// This function demonstrates the use of local and global variables
function scopeFunction() {
  var globalVariable = 10; // Global variable accessible throughout scopeFunction
  function addNumOne() {
    var localVar = 20; // Local variable accessible only inside addNumOne
    return localVar + globalVariable;
  }
  // function addNumTwo() {
  //   return globalVariable + localVar;
  // }
  console.log(addNumOne());
  // console.log(addNumTwo());

  document.getElementById("resultMain").innerHTML = addNumOne();
}

// This function intentionally generates an error to demonstrate debugging with console.log
function generateError() {
  var gVar = 10; // Global variable within generateError
  function addNumberSample() {
    var localVar = 20; // Local variable
    return localVar + gVar;
  }
  function addNumberTwoSample() {
    return gVar + localVar; // Error: localVar is not defined in this scope
  }
  console.log(addNumberSample());
  console.log(addNumberTwoSample());

  document.getElementById("resultMain").innerHTML = addNumberSample();
}

// This function checks the current hour and displays a message accordingly
function checkHour() {
  var methodAssignmentResult = document.getElementById(
    "methodAssignmentResult"
  );
  if (new Date().getHours() < 18) {
    methodAssignmentResult.innerHTML =
      "Hello there, the time is with you today.";
  } else {
    methodAssignmentResult.innerHTML =
      "Sorry, please try next time at some other hour.";
  }
}

// This function checks if the entered age qualifies the user to vote
function isEligibleToVote() {
  var age = document.getElementById("Age").value;
  var ageResult_P = document.getElementById("isEligibleResult");
  if (age > 18) {
    ageResult_P.innerHTML = "Yes, you are ready to vote."; // Corrected typo
  } else {
    ageResult_P.innerHTML = "Sorry, you can vote only when you are old enough.";
  }
}

// This function displays a time-based greeting message
function Time_function() {
  var time = new Date().getHours();
  var reply = "";
  if (time < 12 && time > 0) {
    reply = "Hey there, GOOD MORNING.";
  } else if (time >= 12 && time < 18) {
    reply = "Good Afternoon.";
  } else {
    reply = "Good night.";
  }
  document.getElementById("GrettingMessage").innerHTML = reply;
}
