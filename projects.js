const projectsSection = document.getElementById("portfolio");
const docBody = document.querySelector("body");
const popupContainer = document.querySelector(".details");

const projects = [
  {
    img: {
      src: "./img/awsomebooks.png",
      alt: "Awesome Books preview",
    },
    title: "Awesome Books",
    type: ["Books Application", "Frontend Dev", "2023"],
    description:
      "This is a project that takes in a new book by a user, stores to local storage, and displays it on the browser. The user also has the opportunity to edit and delete the books stored.",
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink: "https://alabi12.github.io/Awesome-Books-ES6/",
    githubLink: "https://github.com/Alabi12/Awesome-Books-ES6",
  },
  {
    img: {
      src: "./img/BudgetAppImg.png",
      alt: "Budget App project preview",
    },
    title: "Budget App",
    type: ["Budget Application", "Full Stack Dev", "2023"],
    description:
      "This project is about building a mobile web application where you can manage your budget. You will have a list of transactions associated with a category, so you can see how much money you have spent and on what",
    technologies: ["Ruby on Rails", "CSS"],
    liveLink: "https://budget-app-m3yc.onrender.com/",
    githubLink: "https://github.com/Alabi12/Budget-App",
  },

  {
    img: {
      src: "./img/spacetravelapp.png",
      alt: "Facebook 360 project preview",
    },
    title: "Space Travel's Hub",
    type: ["Space Travel", "Frontend Dev", "2023"],
    description:
      "This is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. The application works with real-time data from the SpaceX API.",
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink: "https://space-travel-pearl.vercel.app/",
    githubLink: "https://github.com/Alabi12/space-travel",
  },
  {
    img: {
      src: "./img/todoapp1.png",
      alt: "Todo App project preview",
    },
    title: "Todo",
    type: ["Todo", "Frontend Dev", "2022"],
    description:
      "This is a simple project that allows the user to develop a Todo List. The data is persisted in local storage",
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink: "https://alabi12.github.io/To-Do-List/dist/",
    githubLink: "https://github.com/Alabi12/To-Do-List",
  },
];

const generateList = (arr) =>
  arr.reduce((elements, element) => `${elements}<li>${element}</li>`, "");

const generatePopupSection = (project) => `
    <section class="section_detail_wrapper">
      <article class="section_detail">
        <div class="flex section_detail__title">
          <h1>${project.title}</h1>
          <img class="close-detail" src="./img/close-detail.svg" alt="Close project details" />
        </div>
        <ul class="flex project_details">
        ${generateList(project.type)}
        </ul>
        <img src=${project.img.src} alt=${project.img.alt} />
        <div class="project_description__container">
          <p>${project.description}</p>
          <div>
            <ul class="flex project_coding_langs">
              ${generateList(project.technologies)}
            </ul>
            <div class="flex gap">
            <button class="btn-class btn-outlined project_details_btn">
            <a href=${project.liveLink} target="_blank">
              <span>See live</span>
              <img src="./img/liveArrow.svg" alt="link to live demo" style="width: 20px; height: 20px;" />
            </a>
            </button>
            <button class="btn-class btn-outlined project_details_btn">
            <a href=${project.githubLink} target="_blank">
              <span>View on GitHub</span>
              <img src="./img/github.svg" alt="link to GitHub repository" style="width: 20px; height: 20px;"/>
            </a>
          </button>
          
            </div>
          </div>
        </div>
      </article>
    </section>`;

const generateCard = (project, id) => `
    <section class="card flex bg-white">
      <img class="desktop-bg" src="${project.img.src}" alt="${
  project.img.alt
}" />
      <article>
        <h3>${project.title}</h3>
        <ul class="flex project_details">
          ${generateList(project.type)}
        </ul>
        <p>${project.description}</p>
        <ul class="flex project_coding_langs">
          ${generateList(project.technologies)}
        </ul>
        <button id=${id} class="project-detail btn-class btn-outlined">See Project</button>
      </article>
    </section>`;

window.onload = () => {
  projects.forEach((project, index) => {
    const card = generateCard(project, index);
    projectsSection.insertAdjacentHTML("beforeend", card);
  });

  const projectBtns = document.querySelectorAll(".project-detail");

  projectBtns.forEach((expandCardBtn) => {
    expandCardBtn.addEventListener("click", () => {
      popupContainer.classList.toggle("show");
      docBody.classList.toggle("filter-container_details");
      docBody.style.overflowY = "hidden";

      popupContainer.replaceChildren("");

      const popupSection = generatePopupSection(projects[expandCardBtn.id]);
      popupContainer.insertAdjacentHTML("beforeend", popupSection);

      const closeIcon = document.querySelector(".close-detail");

      // below code will close Popup if user clicked outside it.
      popupContainer.addEventListener("click", (ev) => {
        if (ev.target !== popupContainer) return;
        docBody.classList.remove("filter-container_details");
        popupContainer.classList.remove("show");
        docBody.style.overflowY = "scroll";
      });

      closeIcon.addEventListener("click", () => {
        docBody.classList.toggle("filter-container_details");
        popupContainer.classList.toggle("show");
        docBody.style.overflowY = "scroll";
      });
    });
  });

  window.onresize = () => {
    docBody.classList.remove("filter-container_details");
    popupContainer.classList.remove("show");
    docBody.style.overflowY = "scroll";
  };
};

//Display detail project links

const projectBtns = document.querySelectorAll(".project_details_btn");
projectBtns.forEach((btn, index) => {
  btn.querySelector("span").textContent = "See live";
  btn.querySelector("img").setAttribute("src", "./img/liveArrow.svg");
  btn.addEventListener("click", () => {
    window.location.href = projects[index].liveLink;
  });
  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", projects[index].githubLink);
  githubLink.textContent = "GitHub";
  btn.parentNode.appendChild(githubLink);
});
