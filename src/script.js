"use strict";

const btnOpen = document.querySelector("#menu-open");
const btnClose = document.querySelector("#menu-close");
const navbar = document.querySelector("#navbar");

btnOpen.addEventListener("click", showNavigation);
btnClose.addEventListener("click", hideNavigation);

function showNavigation() {
  navbar.classList.remove("hidden");
  btnOpen.classList.add("hidden");
  btnClose.classList.remove("hidden");
}

function hideNavigation() {
  navbar.classList.add("hidden");
  btnOpen.classList.remove("hidden");
  btnClose.classList.add("hidden");
}
