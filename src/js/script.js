import Button from "./components/Button";

class App {
  constructor() {
    this.root = document.querySelector("#root");
    this.renderPage();
  }

  renderPage() {
    console.log(this.root);
    this.root.insertAdjacentHTML(
      "afterbegin",
      `
    <section class="hero">
      <div class="hero__content">
        <div class="hero__header">
          <div class="header__cloud">
            <div class="cloud__cloud-name">Cloud name</div>
            <div class="cloud__dot">•</div>
            <div class="cloud__module-name">Module name</div>
          </div>
          <h1 class="header__headline">
            Header here 2 lines max lorem ipsum dolor sit
          </h1>
        </div>
        <p class="hero__description">
          Maximum 3 lines of text consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam. Lorem ipsum dolor sit amet color samet gradient nice.
        </p>
        <div class="hero__buttons">
          <button class="hero__button hero__button_link">
            <a href="#">Learn more</a>
          </button>
        </div>
      </div>
      <div class="hero__visual">
        <h3 class="visual__headline">
          Visual <br />
          Safe area
        </h3>
      </div>
    </section>
    <div class="features">
      <div class="features__box">
        <div class="features__box-circle features__box-circle_large"></div>
        <h4 class="features__box-headline">
          One Line lorem ipsum dolor sit amet
        </h4>
        <p class="features__box-description">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet
          lorem.
        </p>
      </div>
      <div class="features__box">
        <div class="features__box-circle features__box-circle_large"></div>
        <h4 class="features__box-headline">
          One Line lorem ipsum dolor sit amet
        </h4>
        <p class="features__box-description">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet
          lorem.
        </p>
      </div>
      <div class="features__box">
        <div class="features__box-circle features__box-circle_large"></div>
        <!-- <div class="features__box-circle features__box-circle_small"></div> -->
        <h4 class="features__box-headline">
          One Line lorem ipsum dolor sit amet
        </h4>
        <p class="features__box-description">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet
          lorem.
        </p>
      </div>
    </div>
    `
    );
    new Button();
  }
}
new App();
