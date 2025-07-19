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
function slideImage() {
  const root = document.documentElement;
  const slideImages = document.getElementsByClassName("slideImg");
  const carouselIndicators = document.getElementsByClassName(
    "carouselindicator_div"
  );
  const secondaryColor = getComputedStyle(root)
    .getPropertyValue("--color-secondary")
    .trim();
  console.log("imageIndex:", imageIndex);
  if (imageIndex >= slideImages.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex += 1;
  }

  for (var i = 0; i < slideImages.length; i++) {
    console.log(slideImages[i]);
    if (imageIndex != i) {
      slideImages[i].style.display = "none";
      carouselIndicators[i].style.backgroundColor = "black";
    } else {
      slideImages[i].style.display = "inline";
      carouselIndicators[i].style.backgroundColor = secondaryColor;
    }
  }
}

function previouseImg() {
  imageIndex - 1;
  slideImage();
}

function nextImage() {
  slideImage();
  imageIndex + 1;
}
