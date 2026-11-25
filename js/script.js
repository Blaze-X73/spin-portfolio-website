const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");
const sideBar = document.querySelector(".sidebar");
const navBar = document.querySelector(".navbar");
const sideMenuBtn = document.querySelector("#side-menu-btn");
const sideLinks = document.getElementsByClassName("side-links");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("expanded")
  sideBar.classList.toggle("expanded");
  navBar.classList.toggle("hidden");
});

sideMenuBtn.addEventListener("click", () => {
  header.classList.toggle("expanded")
  sideBar.classList.toggle("expanded");
  navBar.classList.toggle("hidden");
});

for (let i = 0; i < sideLinks.length; i++) {
  const sideLink = sideLinks[i];
  sideLink.addEventListener("click", () => {
    sideBar.classList.remove("expanded");
    navBar.classList.remove("hidden");
  });
}

//Hidden NavBar
{
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      header.classList.add("nav-hidden");
    } else {
      header.classList.remove("nav-hidden");
    }
    lastScrollY = window.scrollY;
  });
}

const goldenRatio = document.querySelector("#svg-2");
const st0s = document.querySelectorAll(".st0");
const st1s = document.querySelectorAll(".st1");
const phiFormula = document.querySelector(".phi-formula")

{
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    for (let i = 0; i < st0s.length; i++) {
      const st0 = st0s[i];
      if (window.scrollY >= 800) {
        st0.classList.add("scrolled-to");
      }
    }

    for (let i = 0; i < st1s.length; i++) {
      const st1 = st1s[i];
      if (window.scrollY >= 800) {
        st1.classList.add("scrolled-to");
      }
    }
    
    let lastScrollY = window.scrollY;

    if (window.scrollY >= 800) {
      phiFormula.classList.add("scrolled-to")
    }
  });
}

