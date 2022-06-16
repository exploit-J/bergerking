const gnbMenu = document.querySelector("header .menu");
const gnbArea = document.querySelector(".menu-area");
console.log(gnbMenu);
gnbMenu.addEventListener("mouseover", () => {
  gnbArea.classList.add("active");
});
gnbMenu.addEventListener("mouseout", () => {
  gnbArea.classList.remove("active");
});
