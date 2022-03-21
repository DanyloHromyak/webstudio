const contactBtnElem = document.getElementById('contact');
const contactModalElem = document.getElementById('contactModal');
const closeContactModalBtnElem = document.getElementById('contactModalClose');

function openModal() {
  contactModalElem.classList.add('modal_open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  contactModalElem.classList.remove('modal_open');
  document.body.style.overflow = 'auto';
}

contactBtnElem.addEventListener('click', openModal);
closeContactModalBtnElem.addEventListener('click', closeModal);