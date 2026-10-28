const slides = Array.from(document.querySelectorAll(".slide"));
const previousButton = document.querySelector("[data-action='prev']");
const nextButton = document.querySelector("[data-action='next']");
const progress = document.querySelector(".deck__progress");
const progressFill = document.querySelector(".deck__progress span");
const counter = document.querySelector(".deck__counter");
const liveRegion = document.querySelector(".deck__live");
const slidesContainer = document.querySelector(".slides");

let currentIndex = 0;
let touchStartX = null;

const clampIndex = (index) => Math.max(0, Math.min(slides.length - 1, index));

const parseHashIndex = () => {
  const match = window.location.hash.match(/^#(?:slide-)?(\d+)$/);
  if (!match) return null;

  const index = Number.parseInt(match[1], 10) - 1;
  return index >= 0 && index < slides.length ? index : null;
};

const updateUI = () => {
  const activeSlide = slides[currentIndex];
  slides.forEach((slide, index) => {
    const active = index === currentIndex;
    slide.hidden = !active;
    slide.classList.toggle("is-active", active);
  });

  if (progressFill) {
    progressFill.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
  }
  if (progress) {
    progress.setAttribute("aria-valuenow", String(currentIndex + 1));
  }
  if (counter) {
    counter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  }
  if (previousButton) previousButton.disabled = currentIndex === 0;
  if (nextButton) nextButton.disabled = currentIndex === slides.length - 1;
  if (liveRegion) {
    const title =
      activeSlide?.querySelector(".slide__title")?.textContent ?? "";
    liveRegion.textContent = `Folie ${currentIndex + 1} von ${slides.length}: ${title}`;
  }
};

const goToSlide = (index, updateHash = true) => {
  const nextIndex = clampIndex(index);
  if (nextIndex === currentIndex) return;

  currentIndex = nextIndex;
  updateUI();
  if (updateHash) {
    window.history.replaceState(null, "", `#slide-${currentIndex + 1}`);
  }
};

const handleKeydown = (event) => {
  if (event.target.closest("input, textarea, select, [contenteditable='true']"))
    return;

  if (event.key === "ArrowRight" || event.key === "PageDown") {
    event.preventDefault();
    goToSlide(currentIndex + 1);
  } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    goToSlide(currentIndex - 1);
  } else if (event.key === "Home") {
    event.preventDefault();
    goToSlide(0);
  } else if (event.key === "End") {
    event.preventDefault();
    goToSlide(slides.length - 1);
  }
};

const handleHashChange = () => {
  const hashIndex = parseHashIndex();
  if (hashIndex !== null) goToSlide(hashIndex, false);
};

const handleTouchStart = (event) => {
  const touch = event.changedTouches?.[0];
  if (touch) touchStartX = touch.screenX;
};

const handleTouchEnd = (event) => {
  const touch = event.changedTouches?.[0];
  if (touchStartX === null || !touch) return;

  const distance = touchStartX - touch.screenX;
  touchStartX = null;
  if (Math.abs(distance) < 50) return;
  goToSlide(currentIndex + (distance > 0 ? 1 : -1));
};

if (slides.length > 0) {
  currentIndex = parseHashIndex() ?? 0;
  previousButton?.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextButton?.addEventListener("click", () => goToSlide(currentIndex + 1));
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("hashchange", handleHashChange);
  slidesContainer?.addEventListener("touchstart", handleTouchStart, {
    passive: true,
  });
  slidesContainer?.addEventListener("touchend", handleTouchEnd, {
    passive: true,
  });
  updateUI();
  window.history.replaceState(null, "", `#slide-${currentIndex + 1}`);
}
