"use strict";

export default class Button {
  constructor() {
    this.parentElement = document.querySelector(".hero__buttons");
    this.renderButton();
  }

  renderButton() {
    this.parentElement.insertAdjacentHTML(
      "afterbegin",
      `<button class="hero__button hero__button_cta">Button</button>`
    );

    this.btn = this.parentElement.querySelector(".hero__button_cta");
    console.log(this.btn);

    this.btn.addEventListener("click", () => {
      this.btn.classList.remove("hero__button_cta");
      this.btn.classList.add("hero__button_request");
      this.btn.innerHTML = `
      <div class="button__checkmark">&checkmark;</div>
      <span class="button__text">Your request has been sent</span>
      `;
      console.log(this.btn.classList);
    });
  }
}
