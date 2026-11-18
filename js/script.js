const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");
const sideBar = document.querySelector(".sidebar");
const navBar = document.querySelector(".navbar");
const sideMenuBtn = document.querySelector("#side-menu-btn");

menuBtn.addEventListener("click", () => {
  sideBar.classList.toggle("expanded");
  navBar.classList.toggle("hidden");
})

sideMenuBtn.addEventListener("click", () => {
  sideBar.classList.toggle("expanded");
  navBar.classList.toggle("hidden");
})