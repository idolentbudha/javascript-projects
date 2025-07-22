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

// Function that utilizes a while loop
function whileLoopFunction() {
  let result = "";
  let i = 1;
  while (i <= 5) {
    result += `Number: ${i} <br>`;
    i++;
  }
  document.getElementById("WhileLoop").innerHTML = result;
}

// Function that utilizes a for loop
function forLoopFunction() {
  let text = "";
  for (let i = 0; i < 5; i++) {
    text += `Index: ${i} <br>`;
  }
  document.getElementById("ForLoop").innerHTML = text;
}

// Create an object using "let"
function letObjectFunction() {
  let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  };
  document.getElementById("LetObject").innerHTML =
    `Car: ${car.make} ${car.model}, Year: ${car.year}`;
}
