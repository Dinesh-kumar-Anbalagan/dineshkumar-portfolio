document.addEventListener("DOMContentLoaded", () => {
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
  const slideTime = 30000; // 30 seconds

  function showProject(index) {
    if (projectCards.length === 0) {
      return;
    }

    if (index < 0) {
      index = projectCards.length - 1;
    }

    if (index >= projectCards.length) {
      index = 0;
    }

    projectCards.forEach((card) => {
      card.classList.remove("active");
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    projectCards[index].classList.add("active");

    if (dots[index]) {
      dots[index].classList.add("active");
    }

    currentProject = index;
  }

  function nextProject() {
    showProject(currentProject + 1);
  }

  function prevProject() {
    showProject(currentProject - 1);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextProject();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevProject();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showProject(index);
    });
  });

  showProject(0);

  if (projectCards.length > 1) {
    setInterval(() => {
      nextProject();
    }, slideTime);
  }
});
