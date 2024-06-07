"use strict";

const btnOpen = document.querySelectorAll(".btn-open");
const subscribe = document.querySelector(".subscribe");
const closeForm = document.querySelector(".form__close");

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
