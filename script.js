<<<<<<< HEAD
const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector("#menuList");
const logo = document.getElementById("id-logo")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuList.classList.toggle("active");
  if(logo.className === "logo"){
    logo.className = "logo-responsive";
  }
  else {
    logo.className = "logo";
  }
});

document.querySelectorAll(".navLinks").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuList.classList.remove("active");
  })
);
=======
const navBar = document.getElementById("navbar");
const navIcon = document.getElementById("nav-icon");
const navMenuLinks = document.getElementById("nav-menu-links");
const body = document.querySelector("body");
const links = document.querySelectorAll(".nav_menu__container a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1)
    navBar.style.boxShadow = "2px 2px 2px 1px rgba(0, 0, 0, 0.2)";
  else navBar.style.boxShadow = "none";
});

function handler() {
  if (window.innerWidth > 820) return;
  if (navIcon.firstElementChild.id === "hamburger-icon") {
    body.style.overflowY = "hidden";
    navIcon.firstElementChild.src = "./img/close-icon.svg";
    navIcon.firstElementChild.id = "close-icon";
  } else {
    body.style.overflowY = "scroll";
    navIcon.firstElementChild.src = "./img/hamburger-icon.svg";
    navIcon.firstElementChild.id = "hamburger-icon";
  }

  navMenuLinks.classList.toggle("link-clicked");
  navBar.classList.toggle("nav_active");
  body.classList.toggle("filter-container");
}

links.forEach((link) => {
  link.addEventListener("click", handler);
});

navIcon.addEventListener("click", handler);

window.addEventListener("resize", () => {
  links.forEach((link) => {
    link.removeEventListener("click", handler);
  });

  links.forEach((link) => {
    link.addEventListener("click", handler);
  });

  navMenuLinks.classList.remove("link-clicked");
  navBar.classList.remove("nav_active");
  body.classList.remove("filter-container");
  navIcon.firstElementChild.src = "./img/hamburger-icon.svg";
  navIcon.firstElementChild.id = "hamburger-icon";
  body.style.overflowY = "scroll";
});
>>>>>>> e79a8c471a6a300fcec8233b097186f6c364e464
