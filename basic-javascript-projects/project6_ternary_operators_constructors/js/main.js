// Function using ternary operator based on input height
function rideFunction() {
  let height, canRide;
  height = document.getElementById("Height").value;
  // Ternary operation to check height requirement
  canRide = height < 52 ? "Sorry, you are too short" : "You are tall enough";
  document.getElementById("RideResult").innerHTML = canRide + " to ride.";
}

// Constructor function using 'this' and 'new'
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Function to display constructor object data in the browser
function displayVehicle() {
  let myCar = new Vehicle("Toyota", "Corolla", 2020);
  let description = "Make: " + myCar.make + ", Model: " + myCar.model + ", Year: " + myCar.year;
  document.getElementById("VehicleInfo").innerHTML = description;
}

// Function containing a nested function
function nestedFunction() {
  // Inner function that returns a string
  function innerFunction() {
    return "This text is from a nested function!";
  }
  // Displaying the result of the inner function
  document.getElementById("NestedFunction").innerHTML = innerFunction();
}
