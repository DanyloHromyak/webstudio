const toggleElem = document.getElementById("toggle");
const bodyElem = document.querySelector("body");

toggleElem.addEventListener("change", (e) => {
  if (e.target.checked) {
    bodyElem.style.overflow = "hidden";
  } else {
    bodyElem.style.overflow = "auto";
  }
});


const menuElem = document.querySelector(".menu");
const menuLinks = menuElem.querySelectorAll(".menu__link");
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    toggleElem.checked = false;
    bodyElem.style.overflow = "auto";
  });
});
