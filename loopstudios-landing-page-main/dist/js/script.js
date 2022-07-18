const burgerBtn = document.querySelector(".burger");
const burgerLines = document.querySelector(".burger__lines");
const menuList = document.querySelector(".header__menu");
const wrapper = document.querySelector(".wrapper");

burgerBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  burgerBtn.classList.toggle("burger--active");

  if (burgerBtn.classList.contains("burger--active")) {
    menuList.style.right = "0";
    // menuList.style.filter = "brightness(100%)";
    // wrapper.style.filter = "brightness(50%)";
    // body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    menuList.style.right = "-100%";
    // body.style.filter = "brightness(100%)";
    // body.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
}