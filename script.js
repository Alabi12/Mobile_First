
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


function downloadResume() {
  const button = document.querySelector(".btn-class");

  button.click();
}

function toggleLanguages() {
  const icon = document.getElementById("language-icon");
  const list = document.querySelector(".stack_item__dropdown");

  if (list.classList.contains("hidden")) {
    // Remove the "hidden" class from the list
    list.classList.remove("hidden");

    // Change the icon to the "down" chevron icon
    icon.classList.remove("fa-chevron-right");
    icon.classList.add("fa-chevron-down");

    // Create the HTML elements for the languages and append them to the list
    const languages = [
      { name: "REACT", image: "./img/react.png" },
      { name: "RUBY", image: "./img/ruby.jpeg" },
      { name: "RAILS", image: "./img/rails.png" },
      { name: "JAVASCRIPT", image: "./img/javascript.svg" },
      { name: "HTML", image: "./img/html.svg" },
    ];

    function createLanguageListItem(language) {
      const li = document.createElement("li");
      li.className = "dropdown_item flex";
      li.innerHTML = `<img src="${language.image}" alt="${language.name} icon" /><span>${language.name}</span>`;

      // Set the image size based on the font size of the text
      const fontSize = parseInt(
        getComputedStyle(li.querySelector("span")).fontSize
      );
      li.querySelector("img").style.width = `${fontSize}px`;
      li.querySelector("img").style.height = `${fontSize}px`;

      return li;
    }

    const languageList = document.querySelector(".stack_item__dropdown");

    for (let i = 0; i < languages.length; i++) {
      const language = languages[i];
      const li = createLanguageListItem(language);
      languageList.appendChild(li);
    }

    languages.forEach((lang) => {
      const li = document.createElement("li");
      li.classList.add("dropdown_item", "flex");
      li.innerHTML = `
        <img src="./img/${lang.toLowerCase()}.svg" alt="${lang} icon" />
        <span>${lang}</span>
      `;
      list.appendChild(li);
    });
  } else {
    // Add the "hidden" class to the list
    list.classList.add("hidden");

    // Change the icon to the "right" chevron icon
    icon.classList.add("fa-chevron-right");
    icon.classList.remove("fa-chevron-down");

    // Remove the HTML elements for the languages from the list
    const languagesList = document.querySelectorAll(
      ".stack_item__dropdown .dropdown_item"
    );
    languagesList.forEach((lang) => list.removeChild(lang));
  }
}

const icon = document.getElementById("language-icon");
icon.addEventListener("click", toggleLanguages);

//display framework and skills
const toggleIcons = document.querySelectorAll(".toggle-icon");

const contentArr = [
  [{ name: "REACT" }, { name: "RUBY" }, { name: "RAILS" }],

  [
    { name: "COMMUNICATION" },
    { name: "PAIR-PROGRAMMING" },
    { name: "COLLABORATION " },
  ],
];

function showContent(index) {
  const item = toggleIcons[index].parentNode;
  const itemContent = item.querySelector(".about_stacks__item__content");
  itemContent.innerHTML = "";

  contentArr[index].forEach((content) => {
    const span = document.createElement("span");
    span.textContent = content.name;
    itemContent.appendChild(span);
  });

  itemContent.classList.add("show");
  toggleIcons[index].classList.remove("fa-chevron-right");
  toggleIcons[index].classList.add("fa-chevron-down");
}

toggleIcons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    const itemContent = icon.parentNode.querySelector(
      ".about_stacks__item__content"
    );

    if (itemContent.classList.contains("show")) {
      itemContent.classList.remove("show");
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-right");
    } else {
      showContent(index);
    }
  });
});
