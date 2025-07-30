const GALLERY_IMAGES_COUNT = document
  .getElementById("Gallery")
  .getElementsByTagName("a").length;

const GALLERY_IMAGES = Array.from(
  document.getElementById("Gallery").getElementsByTagName("a")
).map((v) => v.getAttribute("data-og-image"));

let LIGHTBOX_IMAGE_COUNTER = 0;

function renderOrGetImage(modalContent, imagePath) {
  let img = document.getElementById("lightbox-img");
  if (!img) {
    img = document.createElement("img");
    img.id = "lightbox-img";
    modalContent.appendChild(img);
  }
  img.classList.remove("show");
  img.src = imagePath;
  img.onload = function () {
    img.classList.add("show");
  };
  return img;
}

function openModal(element) {
  const ogImagePath = element.getAttribute("data-og-image");
  const index = GALLERY_IMAGES.indexOf(ogImagePath);
  if (index === -1) return;

  LIGHTBOX_IMAGE_COUNTER = index;
  setIndicator();

  const modalContent = document.getElementById("lightbox-modal-content");
  renderOrGetImage(modalContent, ogImagePath);

  const LightBox = document.getElementById("LightBox-Modal");
  LightBox.classList.add("show");

  // Lock scroll
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const LightBoxModal = document.getElementById("LightBox-Modal");
  const modalContent = document.getElementById("lightbox-modal-content");
  LightBoxModal.classList.remove("show");

  // Unlock scroll
  document.body.style.overflow = "";

  // Optionally clear src
  const img = document.getElementById("lightbox-img");
  if (img) img.src = "";
}

function changeImage(direction = 1) {
  LIGHTBOX_IMAGE_COUNTER =
    (LIGHTBOX_IMAGE_COUNTER + direction + GALLERY_IMAGES_COUNT) % GALLERY_IMAGES_COUNT;

  setIndicator();

  const modalContent = document.getElementById("lightbox-modal-content");
  renderOrGetImage(modalContent, GALLERY_IMAGES[LIGHTBOX_IMAGE_COUNTER]);
}

function nextImage() {
  changeImage(1);
}

function prevImage() {
  changeImage(-1);
}

function setIndicator() {
  const value = `${LIGHTBOX_IMAGE_COUNTER + 1}/${GALLERY_IMAGES_COUNT}`;
  const indicator = document.getElementById("indicator");
  if (indicator) {
    indicator.textContent = value;
  }
}

// Keyboard accessibility
document.addEventListener("keydown", (e) => {
  const modalVisible = document.getElementById("LightBox-Modal")?.classList.contains("show");
  if (!modalVisible) return;

  switch (e.key) {
    case "Escape":
      closeModal();
      break;
    case "ArrowRight":
      nextImage();
      break;
    case "ArrowLeft":
      prevImage();
      break;
  }
});
