"use strict";

class Main {
  constructor() {
    // BUTTONS
    this.menuOpenBtn = document.getElementById("nav-open");
    this.menuCloseBtn = document.getElementById("nav-close");
    this.menuBtns = document.querySelectorAll(".nav__btn");
    this.exploreBtn = document.getElementById("explore");

    // ELEMENTS
    this.menu = document.querySelector(".nav__panel");

    this.init();
  }

  init() {
    this.menuToggle();
  }

  menuToggle() {
    this.menuBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        this.menu.classList.toggle("nav__panel--open");
        this.menuOpenBtn.classList.toggle("nav__open--hidden");
      });
    });
  }
}

new Main();
