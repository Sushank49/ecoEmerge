"use strict";

const btnOpen = document.querySelectorAll(".btn-open");
const subscribe = document.querySelector(".subscribe");
const closeForm = document.querySelectorAll(".form__close");
const articles = document.querySelectorAll(".article");
const startSticky = document.querySelector(".start");
const nav = document.querySelector(".nav");
const hidden = document.querySelectorAll(".hideX1");
const animateY = document.querySelectorAll(".animateY");

// Animations
const observer2 = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showY");
        entry.target.classList.remove("hideY");
        observer2.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.8 }
);

const observer3 = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("intersecting");
        entry.target.classList.add("showX1");
        entry.target.classList.remove("hideX1");
        animateY.forEach((animate) => observer2.observe(animate));
        observer3.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

hidden.forEach((el) => {
  observer3.observe(el);
});

// Sticky Nav
const stick = startSticky.offsetTop;
window.onscroll = function () {
  startStickyNav();
};

function startStickyNav() {
  if (window.scrollY >= stick) {
    nav.classList.add("sticky");
    document.body.style.marginTop = "-14rem";
  } else {
    nav.classList.remove("sticky");
    document.body.style.marginTop = "0";
  }
}

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hide");
        entry.target.classList.add("show");
        console.log("intersected");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.6,
  }
);

articles.forEach((article) => observer.observe(article));

btnOpen.forEach((btn) =>
  btn.addEventListener("click", function () {
    subscribe.style.width = "100%";
    subscribe.style.height = "100vh";
    subscribe.classList.add("open");
    subscribe.style.visibility = "visible";
    console.log("clicked");
  })
);

closeForm.forEach((close) => {
  close.addEventListener("click", function () {
    console.log("clicked");
    subscribe.style.width = "0";
    subscribe.style.height = "0";
    subscribe.style.visibility = "hidden";
    subscribe.classList.remove("open");
  });
});
