const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

/* Project slider */
const projectCards = document.querySelectorAll(".project-slides .project-card");
const dots = document.querySelectorAll(".slider-dots .dot");
const prevBtn = document.getElementById("prevProject");
const nextBtn = document.getElementById("nextProject");

let currentProject = 0;
let autoSlide;

function showProject(index) {
  if (!projectCards.length) return;

  projectCards[currentProject].classList.remove("active");
  dots[currentProject].classList.remove("active");

  currentProject = index;

  if (currentProject < 0) {
    currentProject = projectCards.length - 1;
  }

  if (currentProject >= projectCards.length) {
    currentProject = 0;
  }

  projectCards[currentProject].classList.add("active");
  dots[currentProject].classList.add("active");
}

function nextProject() {
  showProject(currentProject + 1);
}

function prevProject() {
  showProject(currentProject - 1);
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    nextProject();
  }, 30000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

if (projectCards.length && dots.length) {
  nextBtn.addEventListener("click", () => {
    nextProject();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevProject();
    resetAutoSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showProject(index);
      resetAutoSlide();
    });
  });

  startAutoSlide();
}
