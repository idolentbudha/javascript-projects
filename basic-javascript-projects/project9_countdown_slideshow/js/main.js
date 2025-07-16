function countdown() {
  let seconds = parseInt(document.getElementById("seconds").value);
  const result = document.getElementById("TimerResult");
  const button = document.querySelector("button");

  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds greater than 0.");
    return;
  }

  button.disabled = true; // Disable the button

  result.innerHTML = seconds;
  let counter = seconds;

  const timerInterval = setInterval(() => {
    counter -= 1;
    result.innerHTML = counter;

    if (counter <= 0) {
      clearInterval(timerInterval);
      result.innerHTML = "Time's up!";
      alert("Time's up!");
      button.disabled = false; // Re-enable the button
    }
  }, 1000);
}
