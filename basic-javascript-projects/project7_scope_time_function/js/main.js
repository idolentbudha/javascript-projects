function scopeFunction() {
  var globalVariable = 10;
  function addNumOne() {
    var localVar = 20;
    return localVar + globalVariable;
  }
  // function addNumTwo() {
  //   return globalVariable + localVar;
  // }
  console.log(addNumOne());
  // console.log(addNumTwo());

  document.getElementById("resultMain").innerHTML = addNumOne();
}

function generateError() {
  var gVar = 10;
  function addNumberSample() {
    var localVar = 20;
    return localVar + gVar;
  }
  function addNumberTwoSample() {
    return gVar + localVar;
  }
  console.log(addNumberSample());
  console.log(addNumberTwoSample());

  document.getElementById("resultMain").innerHTML = addNumberSample();
}

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
function isEligibleToVote() {
  var age = document.getElementById("Age").value;
  var ageResult_P = document.getElementById("isEligibleResult");
  if (age > 18) {
    ageResult_P.innerHTML = "Yes your are ready to vote.";
  } else {
    ageResult_P.innerHTML = "Sorry, you can vote only when you are old enough.";
  }
}

function generateGreetingMessage() {
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
