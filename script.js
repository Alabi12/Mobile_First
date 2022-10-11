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
