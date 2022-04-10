import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Play");
    }

    async getHtml() {
      if (document.contains(document.getElementById("settings-button"))) {
        document.getElementById("settings-button").remove();
        document.getElementById("help-button").remove();
      }

      document.body.style.backgroundColor = "#161616";

      return `
          <div class="mint-img-div">
            <img class="play-img"></img>
          </div>
          <div class="mint-text">
            <h1 class="top-title">Oops! <span style="font-family: 'HODLE'; font-size: 35px;">Hodle</span> isn't open yet.</h1>
            <h2 class="title-subheader">In the meantime, check out the  <a href="https://hodle.io/demo" target="_blank">Demo</a> or join our <a href="https://discord.com/invite/PZbZ4yeTrt" target="_blank"><span style="text-decoration: underline; cursor: pointer;">Discord</span></a> to find out when the <span style="font-family: 'HODLE'; font-size: 25px;">Hodle Board</span> mint opens.</h2>
          </div>
      `;
    }
}
