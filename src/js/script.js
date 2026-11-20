// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");
const carouselGap = carousel ? parseFloat(getComputedStyle(carousel).columnGap) || 0 : 0;
const scrollAmount = premierItem ? premierItem.clientWidth + carouselGap : 0;

// Largeur de défilement d’un item
if (carousel && prevButton && nextButton) {
  // Scroll au clic sur le bouton précédent
prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

  // Scroll au clic sur le bouton suivant
nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});
}

document.querySelectorAll(".carousel__anchors a").forEach((link) => {
link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
});
});