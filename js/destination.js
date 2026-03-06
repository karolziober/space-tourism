"use strict";
import { Utils } from "/js/utils.js";

class Destination {
  constructor() {
    // BUTTONS
    this.moonBtn = document.getElementById("moon");
    this.utils = new Utils();
    this.init();
  }

  async init() {
    // new Utils();
    await this.utils.loadData();
    this.testFetch();
  }

  async testFetch() {
    this.moonBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(this.utils.data);
    });
  }
}
new Destination();
