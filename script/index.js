const contactBtnElem = document.getElementById("contact");
const contactModalElem = document.getElementById("contactModal");
const closeContactModalBtnElem = document.getElementById("contactModalClose");

function openModal() {
  contactModalElem.style.display = "block";
  setTimeout(() => {
    contactModalElem.classList.add("modal_open");
  }, 0);
  document.body.style.overflow = "hidden";
  if (window.innerWidth > 991) {
    document.body.style.marginRight = "17px";
  }
  const modalContentElem = document.querySelector(".modal__content");
  modalContentElem.style.overflow = "auto";
  contactModalElem.querySelector("input").focus();
}

function closeModal() {
  contactModalElem.classList.remove("modal_open");
  setTimeout(() => {
    contactModalElem.style.display = "none";
    document.body.style.marginRight = '0';
    document.body.style.overflow = "auto";
  }, 300);
}

window.onkeyup = (e) => {
  if (e.keyCode == 27) {
    closeModal();
  }
};

contactBtnElem.addEventListener("click", openModal);
closeContactModalBtnElem.addEventListener("click", closeModal);

window.onclick = (e) => {
  if (e.target == contactModalElem) {
    closeModal();
  }
}
