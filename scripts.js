let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // تغییر اسلاید هر 5 ثانیه
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const productGrids = document.querySelectorAll('.products-grid');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tab = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            productGrids.forEach(grid => {
                if (grid.id === tab) {
                    grid.style.display = 'flex';
                } else {
                    grid.style.display = 'none';
                }
            });
        });
    });
});
'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);
document.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const actions = card.querySelector(".product-actions");

        card.addEventListener("mouseenter", () => {
            actions.style.display = "flex"; // نمایش گزینه‌ها هنگام هاور
        });

        card.addEventListener("mouseleave", () => {
            actions.style.display = "none"; // پنهان کردن گزینه‌ها هنگام خروج از هاور
        });
    });
});
