function openModal(element) {
  const ogImage = element.getAttribute("data-og-image");

  const img = document.createElement("img");
  img.src = ogImage;
  img.classList.add("show");

  const LightBoxModal = document.getElementById("LightBox-Modal");
  const modalContent = document.getElementById("lightbox-modal-content");
  modalContent.appendChild(img);

  const LightBox = document.getElementById("LightBox-Modal");
  LightBox.classList.add("show");
}

function closeModal() {
  const LightBoxModal = document.getElementById("LightBox-Modal");
  const modalContent = document.getElementById("lightbox-modal-content");
  modalContent.innerHTML = "";
  LightBoxModal.classList.remove("show");
}
