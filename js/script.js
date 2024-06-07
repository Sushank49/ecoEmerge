"use strict";

const cards = document.querySelectorAll(".card-component__cards");
const cardComponent = document.querySelector(".card-component");
const btnOpen = document.querySelectorAll(".btn-open");
const subscribe = document.querySelector(".subscribe");
const closeForm = document.querySelector(".form__close");
const missions = document.querySelectorAll(".vision__box");

btnOpen.forEach((btn) =>
  btn.addEventListener("click", function () {
    subscribe.style.width = "100%";
    subscribe.style.height = "100vh";
    subscribe.classList.add("open");
    console.log("btn clicked");
  })
);

closeForm.addEventListener("click", function () {
  subscribe.style.width = "0";
  subscribe.style.height = "0";
  subscribe.classList.remove("open");
});

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
      missions.forEach((mission) => observer4.observe(mission));
      observer3.unobserve(entry.target);
    }
  });
});

hidden.forEach((el) => {
  observer3.observe(el);
});

const observer4 = new IntersectionObserver(
  function (entries) {
    entries?.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hideX2");
        entry.target.classList.add("showX2");
        observer4.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);
