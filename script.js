const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector("#menuList");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuList.classList.toggle("active");
  if (hamburger.hasClass("active")) {
    logo.classList.toggle("active");
  }
});

document.querySelectorAll(".navLinks").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuList.classList.remove("active");
    logo.classList.remove("active");
  })
);
