const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");
const sideBar = document.querySelector(".sidebar");
const navBar = document.querySelector(".navbar");
const sideMenuBtn = document.querySelector("#side-menu-btn");
const sideLinks = document.getElementsByClassName("side-links");

menuBtn.addEventListener("click", () => {
  sideBar.classList.toggle("expanded");
  navBar.classList.toggle("hidden");
})

sideMenuBtn.addEventListener("click", () => {
  sideBar.classList.toggle("expanded");
  navBar.classList.toggle("hidden");
})


for (let i = 0; i < sideLinks.length; i++) {
  const sideLink = sideLinks[i];
  sideLink.addEventListener("click", () => {
  sideBar.classList.remove("expanded");
  navBar.classList.remove("hidden");
})
}

