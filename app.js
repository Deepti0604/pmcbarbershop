const scrollArrow = document.getElementById("scrollArrow");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollArrow.classList.add("show");
  } else {
    scrollArrow.classList.remove("show");
  }
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    item.classList.toggle("active");
  });
});

const filters = document.querySelectorAll(".filter");
const faqItems = document.querySelectorAll(".faq-item");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    // Update active class
    filters.forEach((f) => f.classList.remove("active"));
    filter.classList.add("active");

    const selectedCategory = filter.textContent.trim().toLowerCase();

    faqItems.forEach((item) => {
      const category = item.dataset.category;

      if (
        selectedCategory === "all questions" ||
        selectedCategory === category
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const images = Array.from(document.querySelectorAll(".gallery-item img"));
let currentIndex = 0;

// Open modal with clicked image
document.querySelectorAll(".overlay-item .overlay").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentIndex = index;
    openModal(currentIndex);
  });
});

function openModal(index) {
  modal.style.display = "block";
  modalImg.src = images[index].src;
  modalImg.alt = images[index].alt;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
}

// Button listeners
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Optional: keyboard navigation
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "Escape") modal.style.display = "none";
  }
});

function openNavbar() {
  const navbarOverlay = document.querySelector(".navbar-overlay");
  navbarOverlay.classList.remove("hide-at-mobile");
}
function closeNavbar() {
  const navbarOverlay = document.querySelector(".navbar-overlay");
  navbarOverlay.classList.add("hide-at-mobile");
}
