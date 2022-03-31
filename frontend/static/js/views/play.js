import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Play");
    }

    async getHtml() {
      if (document.contains(document.getElementById("settings-button"))) {
        document.getElementById("settings-button").remove();
      }

      return `
          <div class="mint-img-div">
            <img class="play-img"></img>
          </div>
          <div class="mint-text">
            <h1 class="top-title">Oops! You need to own a <b>HODLE Board</b> to play <b>HODLE</b>.</h1>
            <h2 class="title-subheader">Join our <a href="https://discord.com/invite/PZbZ4yeTrt" target="_blank"><span style="text-decoration: underline; cursor: pointer;">Discord</span></a> to find out when the <b>HODLE Board</b> mint opens.</h2>
          </div>
      `;
    }
}
