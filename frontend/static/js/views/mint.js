import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Mint");
    }

    async getHtml() {
      document.querySelector('#hodle-footer').style.opacity = "100%";
      document.querySelector('#hodle-footer').style.height = "60px";

        return `
            <div class="mint-img-div">
              <img class="mint-img"></img>
            </div>
            <div class="mint-text">
              <h1 class="top-title">The <b>HODLE Board</b> mint isn't open.</h1>
              <h2 class="title-subheader">Join our <a href="https://discord.com/invite/PZbZ4yeTrt" target="_blank"><span style="text-decoration: underline; cursor: pointer;">Discord</span></a> to find out when it will be.</h2>
            </div>
        `;
    }
}
