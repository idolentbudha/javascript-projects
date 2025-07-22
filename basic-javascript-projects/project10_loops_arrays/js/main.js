function arrayFunction() {
  const arrayOne = ["One", "Two", "Three"];
  document.getElementById("Array").innerHTML =
    `${arrayOne[0]}, ${arrayOne[1]},${arrayOne[2]}`;
}

function constantFunction() {
  const person = {
    name: "John",
    age: 30,
    job: "Developer",
  };

  // Modify a property
  person.age = 31;

  // Add a new property
  person.country = "UK";

  document.getElementById("Contant").innerHTML =
    `Name: ${person.name}, Age: ${person.age}, Job: ${person.job}, Country: ${person.country}`;
}
