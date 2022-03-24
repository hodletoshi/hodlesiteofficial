import AbstractView from "./AbstractView.js";

function switchTile(tile_index) {
  setInterval(function() {
    const teaserimg = document.getElementById("teaser-img");

    x = (x === images.length - 1) ? 0 : x + 1;
    teaserimg.src = images[x];
    teaser.style.backgroundColor = bgColors[x];
  }, 2000);
}

function oldTile() {
  const teaserdiv = document.getElementById("teaser");

  var images = [];
  images[0] = "static/img/teaser1.png";
  images[1] = "static/img/teaser2.png";
  images[2] = "static/img/teaser3.png";
  images[3] = "static/img/teaser4.png";
  images[4] = "static/img/teaser5.png";
  images[5] = "static/img/teaser6.png";
  images[6] = "static/img/teaser7.png";
  images[7] = "static/img/teaser8.png";
  images[8] = "static/img/teaser9.png";
  images[9] = "static/img/teaser10.png";

  var bgColors = [];
  bgColors[0] = "#161616";
  bgColors[1] = "#f2ddde";
  bgColors[2] = "#ffc920";
  bgColors[3] = "#c7e7f1";
  bgColors[4] = "#dcecbf";
  bgColors[5] = "#fae4cc";
  bgColors[6] = "#f99400";
  bgColors[7] = "white";
  bgColors[8] = "#595959";
  bgColors[9] = "#69cb63";

  var x = 0;
}

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
      document.querySelector('#hodle-footer').style.opacity = "100%";
      document.querySelector('#hodle-footer').style.height = "60px";

      var x = 0;

      var tileImg = [];
      tileImg[0] = "static/img/h-tile.png";
      tileImg[1] = "static/img/o-tile-2.png";
      tileImg[2] = "static/img/d-tile-2.png";
      tileImg[3] = "static/img/l-tile-2.png";
      tileImg[4] = "static/img/e-tile-2.png";

      setInterval(function() {
        const tileimg = document.getElementById("what-is-hodle-tile");
        console.log("CALLED");

        x = (x === 4) ? 0 : x + 1;
        tileimg.src = tileImg[x];
      }, 1000);

      return `
          <div class="what-is-hodle-bottom">
            <img class="what-is-hodle-tile" id="what-is-hodle-tile" src="static/img/h-tile.png" width="120px" height="120px">
            <h1 class="what-is-hodle-subtitle">
              WHAT IS
              <br>
              <span class="what-is-hodle-title">HODLE?</span>
            </h1>
            <button class="what-is-hodle-button" onclick="">LEARN MORE &nbsp;➜</button>
          </div>
          <div class="discord-bottom">
            <h1 class="discord-subtitle">
              <span class="discord-title">JOIN THE HODLERS</span>
              <br>
              ON OUR DISCORD!
            </h1>
            <button class="discord-button" onclick="window.open('https://discord.gg/hodlenft')">➜</button>
          </div>
          <div class="landing-teaser" id="teaser" style="height: 100vh;">
            <img class="landing-teaser-img" id="teaser-img" src="static/img/teaser1.png" style="width: 700px; height: 700px; padding-top: calc(20vh - 150px);"></img>
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
