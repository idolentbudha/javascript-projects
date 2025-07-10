// Dictionary Assignment - Using JavaScript Object

function displayDictionaryValue() {
  // Define a dictionary with key-value pairs
  const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer",
    location: "London",
  };

  // Display a value from the dictionary
  document.getElementById("Dictionary").innerHTML =
    "Name: " + person.name + "<br>Occupation: " + person.occupation;
}

// Delete Assignment - Removing a property from a dictionary

function deleteDictionaryValue() {
  const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",
  };
  const oldCar = structuredClone(car);
  // Delete the 'color' property
  delete car.color;

  // Output the remaining dictionary keys and values
  document.getElementById("Dictionary__delete").innerHTML =
    "Original car object:" +
    JSON.stringify(oldCar) +
    "<br><br>" +
    "Car object after delete:" +
    JSON.stringify(car) +
    "<br><br>" +
    "Brand: " +
    car.brand +
    "<br>Model: " +
    car.model +
    "<br>Year: " +
    car.year +
    "<br>Color: " +
    car.color;
}
