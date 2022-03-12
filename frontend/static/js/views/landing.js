import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
      return `
          <div class="landing-teaser" id="teaser">
            <img class="landing-teaser-img" id="teaser-img" src="static/img/teaser1.png"></img>
          </div>
          <div class="landing-about">
            <div class="landing-about-title">
                <span class="landing-about-title-text">What is&nbsp;&nbsp;</span>
                <img class="landing-about-logo"></img>
                <span class="landing-about-title-text">&nbsp;?</span>
            </div>
            <p style="padding-left: 35px; padding-right: 35px;">
            <b>HODLE</b> is an upcoming P2E NFT word game where you can win daily prizes of both cash and NFTs.
            <br><br>
            Only <b>HODLE Board</b> holders can play <b>HODLE</b>.
            <br>
            Mint opens <b>March 23</b> at 00:00 EST (05:00 UTC).
            <br><br>
            You have five tries to guess a five-letter word related to cryptocurrencies and NFTs. You receive feedback on each guess in the shape of different coloured tiles.
            <br><br>
            Join our frens in the <span style="text-decoration: underline; cursor: pointer;" onclick="window.open('https://discord.com')">Discord</span> community and follow us on <span style="text-decoration: underline; cursor: pointer;" onclick="window.open('https://twitter.com/hodlenftgame')">Twitter</span> for the latest updates!
            </p>
          </div>
      `;
    }
}
