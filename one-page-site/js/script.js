const GALLERY_IMAGES_COUNT = document
  .getElementById("Gallery")
  .getElementsByTagName("a").length;

const GALLERY_IMAGES = Array.from(
  document.getElementById("Gallery").getElementsByTagName("a")
).map((v) => v.getAttribute("data-og-image"));
console.log(GALLERY_IMAGES);

let LIGHTBOX_IMAGE_COUNTER = 0;

function renderImageOn(element, imagePath) {
  const img = document.createElement("img");
  img.src = imagePath;
  element.appendChild(img);
  return img;
}
function openModal(element) {
  const ogImagePath = element.getAttribute("data-og-image");
  const index = GALLERY_IMAGES.indexOf(ogImagePath);
  LIGHTBOX_IMAGE_COUNTER = index;
  setIndicator();

  const modalContent = document.getElementById("lightbox-modal-content");
  const img = renderImageOn(modalContent, ogImagePath);

  const LightBox = document.getElementById("LightBox-Modal");
  LightBox.classList.add("show");

  //animate image
  img.onload = function () {
    img.classList.add("show");
  };
}

function closeModal() {
  const LightBoxModal = document.getElementById("LightBox-Modal");
  const modalContent = document.getElementById("lightbox-modal-content");
  modalContent.innerHTML = "";
  LightBoxModal.classList.remove("show");
}

function nextImage() {
  const modalContent = document.getElementById("lightbox-modal-content");
  const currentImagePath = modalContent.childNodes[0].getAttribute("src");
  const currentImageIndex = GALLERY_IMAGES.indexOf(currentImagePath);

  if (LIGHTBOX_IMAGE_COUNTER >= GALLERY_IMAGES_COUNT - 1) {
    LIGHTBOX_IMAGE_COUNTER = 0;
  } else {
    LIGHTBOX_IMAGE_COUNTER++;
  }

  setIndicator();

  modalContent.innerHTML = "";

  const img = modalContent.appendChild(
    renderImageOn(modalContent, GALLERY_IMAGES[LIGHTBOX_IMAGE_COUNTER])
  );
  img.onload = function () {
    img.classList.add("show");
  };
}

function prevImage() {
  const modalContent = document.getElementById("lightbox-modal-content");
  const currentImagePath = modalContent.childNodes[0].getAttribute("src");
  const currentImageIndex = GALLERY_IMAGES.indexOf(currentImagePath);
  if (LIGHTBOX_IMAGE_COUNTER <= 0) {
    LIGHTBOX_IMAGE_COUNTER = GALLERY_IMAGES_COUNT - 1;
  } else {
    LIGHTBOX_IMAGE_COUNTER--;
  }
  setIndicator();

  modalContent.innerHTML = "";

  const img = modalContent.appendChild(
    renderImageOn(modalContent, GALLERY_IMAGES[LIGHTBOX_IMAGE_COUNTER])
  );
  img.onload = function () {
    img.classList.add("show");
  };
}
function setIndicator() {
  const value = `${LIGHTBOX_IMAGE_COUNTER + 1}/${GALLERY_IMAGES_COUNT}`;
  console.log(value);
  const indicator = document.getElementById("indicator");
  indicator.textContent = value;
}
