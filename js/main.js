// HAMBURGER BUTTON START

let elHeroBurger = document.querySelector(".hero__menu-btn");
let elHeaderNav = document.querySelector(".header__nav");
let elRotate = document.querySelector(".hero__menu-line");

elHeroBurger.addEventListener("click", () => {
  elHeaderNav.classList.toggle("heightControl");
  elRotate.classList.toggle("rotate-it");
});

// HAMBURGER BUTTON END
// HEADER START

let elHeader = document.querySelector(".header");
let elHeaderLogo = document.querySelector(".header__logo-link");
let elHeroContainer = document.querySelector(".hero__container");
let elHeaderLinks = document.querySelectorAll(".header__link");

window.onscroll = () => {
  scrollNavbar();
};

scrollNavbar = () => {

  if(document.documentElement.scrollTop > 0){
    elHeader.classList.add("header-padding");
    elHeroContainer.classList.add("header-white")
    elHeaderLogo.style.color = "#000";

    elHeaderLinks.forEach((item) => {
      item.classList.add("text-black")
    });
  } else {
    elHeader.classList.remove("header-padding");
    elHeroContainer.classList.remove("header-white");
    elHeaderLogo.style.color = "#fff";

    elHeaderLinks.forEach((item) => {
      item.classList.remove("text-black");
    });
  }
}