const gnbMenu = document.querySelector("header .menu");
const gnbArea = document.querySelector(".menu-area");
const navOpenButton = document.querySelector("header .nav-open");
const navCloseButton = document.querySelector("header .nav-close");
const navMenuItem = document.querySelectorAll("header .menu-item");
console.log(navMenuItem);

gnbMenu.addEventListener("mouseover", () => {
  gnbArea.classList.add("active");
});
gnbMenu.addEventListener("mouseout", () => {
  gnbArea.classList.remove("active");
});
navOpenButton.addEventListener("click", () => {
  document.querySelector("nav").classList.add("active");
});
navCloseButton.addEventListener("click", () => {
  document.querySelector("nav").classList.remove("active");
});
