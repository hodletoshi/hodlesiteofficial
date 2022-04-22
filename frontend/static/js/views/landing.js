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

      document.documentElement.style.backgroundImage = 'none';

      // Tile on bottom modal
      var x = 0;
      var tileImg = [];
      tileImg[0] = "static/img/h-tile.png";
      tileImg[1] = "static/img/o-tile-2.png";
      tileImg[2] = "static/img/d-tile-2.png";
      tileImg[3] = "static/img/l-tile-2.png";
      tileImg[4] = "static/img/e-tile-2.png";


      // top home image
      var y = 0;
      var homeBg = [];
      homeBg[0] = "static/img/home_bg_15.png";
      homeBg[1] = "static/img/home_bg_13.png";
      homeBg[2] = "static/img/home_bg_14.png";
      homeBg[3] = "static/img/home_bg_16.png";
      homeBg[4] = "static/img/home_bg_17.png";
      homeBg[5] = "static/img/home_bg_12.png";
      homeBg[6] = "static/img/home_bg_6.png";
      homeBg[7] = "static/img/home_bg_7.png";
      homeBg[8] = "static/img/home_bg_8.png";
      homeBg[9] = "static/img/home_bg_9.png";
      homeBg[10] = "static/img/home_bg_10.png";
      homeBg[11] = "static/img/home_bg_11.png";
      homeBg[12] = "static/img/home_bg_12.png";
      homeBg[13] = "static/img/home_bg_1.png";
      homeBg[14] = "static/img/home_bg_2.png";
      homeBg[15] = "static/img/home_bg_3.png";
      homeBg[16] = "static/img/home_bg_4.png";

      if (seen == 1) {
        // Only set the interval on the first time the page starts

        setInterval(function() {
          const tileimg = document.getElementById("what-is-hodle-tile");

          x = (x === 4) ? 0 : x + 1;
          try {
            tileimg.src = tileImg[x];
          } catch (err) {}
        }, 1000);

        setInterval(function() {
          const homeimg = document.getElementById("top-home-bg");

          y = (y === 10) ? 0 : y + 1;
          try {
            homeimg.style.backgroundImage = `url('${homeBg[y]}')`;
          } catch (err) {}
        }, 2000);
      }


      if (document.contains(document.getElementById("settings-button"))) {
        document.getElementById("settings-button").remove();
        document.getElementById("help-button").remove();
      }

      return `
          <div class="what-is-hodle-bottom">
            <img class="what-is-hodle-tile" id="what-is-hodle-tile" src="static/img/h-tile.png" width="120px" height="120px">
            <h1 class="what-is-hodle-subtitle">
              TRY THE
              <br>
              <span class="what-is-hodle-title">DEMO!&nbsp;&nbsp;</span>
            </h1>
            <button class="what-is-hodle-button" onclick="window.open('/demo', '_self')">PLAY NOW &nbsp;➜</button>
          </div>
          <div class="discord-bottom">
            <h1 class="discord-subtitle">
              <span class="discord-title">JOIN THE HODLERS</span>
              <br>
              IN OUR DISCORD!
            </h1>
            <button class="discord-button" onclick="window.open('https://discord.com/invite/PZbZ4yeTrt')">➜</button>
          </div>
          <div id="top-home-bg" class="tophome-bg">
            <img src="static/img/hodle_logo_big.png" class="tophome-logoimg"></img>
            <h1 class="tophome-text">Guess 🟨, Solve 🟩, $ETH 🤑.</h1>
            <button onclick="window.open('/about', '_self')" class="tophome-btn">Learn More</button>
          </div>
          <div class="leaderboard-container-landing">
            <div class="leaderboard-div-landing">
              <h1 class="leaderboard-div-toptitle">Daily Leaderboard 🥇</h1>
              <div class="leaderboard-div-inner-div">
              <h1 class="leaderboard-div-h1">Available after mint.</h1>
              </div>
            </div>
            <div class="leaderboard-div-landing">
              <h1 class="leaderboard-div-toptitle">Longest Active Streak 🔥</h1>
              <div class="leaderboard-div-inner-div">
              <h1 class="leaderboard-div-h1">Available after mint.</h1>
              </div>
            </div>
            <div class="leaderboard-div-landing">
              <h1 class="leaderboard-div-toptitle">All-Time Leaderboard 🏆</h1>
              <div class="leaderboard-div-inner-div">
              <h1 class="leaderboard-div-h1">Available after mint.</h1>
              </div>
            </div>
          </div>
      `;
    }
}
