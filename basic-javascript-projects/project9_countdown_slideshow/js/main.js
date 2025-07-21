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
var imageIndex = 0;
const slideImages = document.getElementsByClassName("slideImg");
const carouselIndicators = document.getElementsByClassName("carouselindicator_div");

function slideImage() {
  const root = document.documentElement;
  const secondaryColor = getComputedStyle(root)
    .getPropertyValue("--color-secondary")
    .trim();

  for (let i = 0; i < slideImages.length; i++) {
    if (imageIndex !== i) {
      slideImages[i].classList.remove("active");
      carouselIndicators[i].classList.remove("active");
    } else {
      slideImages[i].classList.add("active");
      carouselIndicators[i].classList.add("active");
    }
  }
}

function previouseImg() {
  imageIndex = (imageIndex - 1 + slideImages.length) % slideImages.length;
  slideImage();
}

function nextImage() {
  imageIndex = (imageIndex + 1) % slideImages.length;
  slideImage();
}
