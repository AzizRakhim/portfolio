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
  if (document.documentElement.scrollTop > 25) {
    elHeader.classList.add("header-padding");
    elHeroContainer.classList.add("header-white");
    elHeaderLogo.style.color = "#000";

    elHeaderLinks.forEach((item) => {
      item.classList.add("text-black");
    });
  } else {
    elHeader.classList.remove("header-padding");
    elHeroContainer.classList.remove("header-white");
    elHeaderLogo.style.color = "#fff";

    elHeaderLinks.forEach((item) => {
      item.classList.remove("text-black");
    });
  }
};

// NAV COLOR CHANGE

let elNavItems = document.querySelectorAll(".header__link");

elNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    elNavItems.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// PORTFOLIO FILTER

let elBtns = document.querySelectorAll(".work__list li");
let elPortfolioList = document.querySelector(".work__example-list");

clickedMe("react");

function clickedMe(type) {
  elPortfolioList.innerText = "";
  portfolioObj.forEach((item) => {
    if (item.type == type.toLowerCase()) {
      let elItem = document.createElement("li");
      elItem.className = "work__example-item col-12 col-lg-4";

      elItem.innerHTML = `
        <div class="work__item-inner">
          <div class="work__bg-holder">
            <div class="work__bimg">
              <img src="${item.img}" alt"${elItem.name}" />
            </div>
          </div>
          <div class="work__whole-color"></div>
          <div class="work__icon">
            <i class='${item.react}'></i>
          </div>
          <div class="work__details">
            <span class="work__name">
              ${item.name}
            </span>
            <div class="work__link-holder d-flex align-items-center">
              <a class="work__external" href="${item.gitHub}" target="_blank">
                <i class='bx bxl-github'></i>
              </a>
              <a class="work__external" href="${item.netlify}" target="_blank">
                <i class='bx bxl-netlify'></i>
              </a>
            </div>
          </div>
        </div>
      `;

      elPortfolioList.appendChild(elItem);
    }
  });
}

elBtns.forEach((item) => {
  item.addEventListener("click", () => clickedMe(item.innerText));
});

// COLOR SETTING BTN

let elSetting = document.querySelector(".color__icon-box");
let num = 0;

elSetting.addEventListener("click", () => {
  if (num == 0) {
    elSetting.parentNode.style.right = "0px";
    num++;
  } else {
    elSetting.parentElement.style.right = "-200px";
    num = 0;
  }
});

let elColorBtns = document.querySelectorAll(".color__btn");

elColorBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    document.body.className = "";
    document.body.classList.add(item.classList[1]);
  });
});

// Nav bar active when scroll

document.querySelector("#hero").addEventListener("mouseenter", () => {
  elNavItems.forEach((item, index) => {
    if (index == 0) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

document.querySelector("#about").addEventListener("mouseenter", () => {
  elNavItems.forEach((item, index) => {
    if (index == 1) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

document.querySelector("#work").addEventListener("mouseenter", () => {
  elNavItems.forEach((item, index) => {
    if (index == 2) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

document.querySelector("#service").addEventListener("mouseenter", () => {
  elNavItems.forEach((item, index) => {
    if (index == 3) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

document.querySelector("#testimonial").addEventListener("mouseenter", () => {
  elNavItems.forEach((item, index) => {
    if (index == 4) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

document.querySelector("#blog").addEventListener("mouseenter", () => {
  elNavItems.forEach((item, index) => {
    if (index == 5) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

document.querySelector("#form").addEventListener("mouseenter", () => {
  elNavItems.forEach((item, index) => {
    if (index == 6) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
