// Dictionary Assignment - Using JavaScript Object

function displayDictionaryValue() {
  // Define a dictionary with key-value pairs
  const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer",
    location: "London"
  };

  // Display a value from the dictionary
  document.getElementById("Dictionary").innerHTML =
    "Name: " + person.name + "<br>Occupation: " + person.occupation;
}
