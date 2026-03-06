"use strict";

export class Utils {
  constructor() {
    this.data = null;
  }

  async loadData() {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("response not ok");
      }
      this.data = await response.json();
    } catch (error) {
      console.log("data not loaded");
      this.data = null;
    }
  }
}
