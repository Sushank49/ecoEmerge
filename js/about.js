"use strict";

const btnOpen = document.querySelectorAll(".btn-open");
const subscribe = document.querySelector(".subscribe");
const closeForm = document.querySelector(".form__close");
const articles = document.querySelectorAll(".article");

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
    threshold: 0.4,
  }
);

articles.forEach((article) => observer.observe(article));

btnOpen.forEach((btn) =>
  btn.addEventListener("click", function () {
    subscribe.style.width = "100%";
    subscribe.style.height = "100vh";
    subscribe.classList.add("open");
    subscribe.style.visibility = "visible";
  })
);

closeForm.addEventListener("click", function () {
  subscribe.style.width = "0";
  subscribe.style.height = "0";
  subscribe.style.visibility = "hidden";
  subscribe.classList.remove("open");
});
