function myFunction() {
  const mobile = document.querySelector(".mobile-menu");
  if (mobile.style.display === "none") {
    mobile.style.display = "block";
  } else {
    mobile.style.display = "none";
  }
}

myFunction();
