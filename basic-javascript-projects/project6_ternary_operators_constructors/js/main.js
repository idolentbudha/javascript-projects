function rideFunction() {
  let height, canRide;
  height = document.getElementById("Height").value;
  canRide = height < 52 ? "Sorry, you are too short" : "You are tall enough";
  document.getElementById("RideResult").innerHTML = canRide + "to ride.";
}

function nestedFunction() {
  function innerFunction() {
    return "This text is from a nested function!";
  }
  document.getElementById("NestedFunction").innerHTML = innerFunction();
}
