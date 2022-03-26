import AbstractView from "./AbstractView.js";

var seen = 0;

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {

      seen += 1;

      document.querySelector('#hodle-footer').style.opacity = "100%";
      document.querySelector('#hodle-footer').style.height = "60px";

      var x = 0;

      var tileImg = [];
      tileImg[0] = "static/img/h-tile.png";
      tileImg[1] = "static/img/o-tile-2.png";
      tileImg[2] = "static/img/d-tile-2.png";
      tileImg[3] = "static/img/l-tile-2.png";
      tileImg[4] = "static/img/e-tile-2.png";

      if (seen == 1) {
        // Only set the interval on the first time the page starts

        setInterval(function() {
          const tileimg = document.getElementById("what-is-hodle-tile");
          console.log("CALLED");

          x = (x === 4) ? 0 : x + 1;
          tileimg.src = tileImg[x];
        }, 1000);
      }

      return `
          <div class="what-is-hodle-bottom">
            <img class="what-is-hodle-tile" id="what-is-hodle-tile" src="static/img/h-tile.png" width="120px" height="120px">
            <h1 class="what-is-hodle-subtitle">
              WHAT IS
              <br>
              <span class="what-is-hodle-title">HODLE?</span>
            </h1>
            <button class="what-is-hodle-button" onclick="window.open('/about', '_self')">FIND OUT &nbsp;➜</button>
          </div>
          <div class="discord-bottom">
            <h1 class="discord-subtitle">
              <span class="discord-title">JOIN THE HODLERS</span>
              <br>
              IN OUR DISCORD!
            </h1>
            <button class="discord-button" onclick="window.open('https://discord.com/invite/PZbZ4yeTrt')">➜</button>
          </div>
          <div class="landing-teaser" id="teaser" style="height: 100vh;">
            <img class="landing-teaser-img" id="teaser-img" src="static/img/teaser1.png"></img>
          </div>
          <!--
          <div class="landing-about">
            <div class="landing-about-title">
                <span class="landing-about-title-text">What is&nbsp;&nbsp;</span>
                <img class="landing-about-logo"></img>
                <span class="landing-about-title-text">&nbsp;?</span>
            </div>
            <p style="padding-left: 35px; padding-right: 35px;">
            <b>HODLE</b> is an upcoming P2E NFT word game where you can win daily prizes of both cash and NFTs.
            <br><br>
            Only <b>HODLE Board</b> owners can play <b>HODLE</b>.
            <br><br>
            You have five tries to guess a five-letter word related to cryptocurrencies and NFTs. You receive feedback on each guess in the shape of different coloured tiles.
            <br><br>
            Join our frens in the <span style="text-decoration: underline; cursor: pointer;" onclick="window.open('https://discord.com/invite/PZbZ4yeTrt')">Discord</span> community and follow us on <span style="text-decoration: underline; cursor: pointer;" onclick="window.open('https://twitter.com/hodlenftgame')">Twitter</span> for the latest updates!
            </p>
          </div>
          -->
      `;
    }
}
