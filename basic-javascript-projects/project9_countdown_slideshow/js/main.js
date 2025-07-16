function countdown() {
  var seconds = document.getElementById("seconds").value;
  document.getElementById("TimerResult").innerHTML = seconds;
  var counter = seconds;
  const timerInterval = setInterval(() => {
    counter = counter - 1;
    document.getElementById("TimerResult").innerHTML = counter;
    if (counter <= 0) {
      clearInterval(timerInterval);
      alert("Times Up!");
    }
  }, 1000);
}
