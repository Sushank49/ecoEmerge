"use strict";

const cards = document.querySelectorAll(".card-component__cards");
const cardComponent = document.querySelector(".card-component");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showY");
        entry.target.classList.remove("hideY");
        observer.unobserve(entry.target);
        observer2.unobserve(entry.target);

        cards.forEach((card) => {
          observer2.observe(card);
        });
      }
    });
  },
  { rootMargin: "-50px" }
);

const observer2 = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showX");
        entry.target.classList.remove("hideX");
      }
    });
  },
  {
    threshold: 0.05,
  }
);

// For the component (the background one to fade from bottom)
observer.observe(cardComponent);

// For the cards to come from the left 1 after 1

const hidden = document.querySelectorAll(".hideX1");
const observer3 = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showX1");
      entry.target.classList.remove("hideX1");

      observer3.unobserve(entry.target);
    }
  });
});

hidden.forEach((el) => {
  observer3.observe(el);
});
