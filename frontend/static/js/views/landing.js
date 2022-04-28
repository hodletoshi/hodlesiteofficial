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

      // Initialize mint date
      const mintDate = new Date(Date.UTC(2022,4,7,5,0,0,0));

      // Tile on bottom modal
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

          x = (x === 4) ? 0 : x + 1;
          try {
            tileimg.src = tileImg[x];
          } catch (err) {}
        }, 1000);

        var countdownInterval = setInterval(function() {
          var now = new Date().getTime();
          var dist = mintDate - now;

          const day = Math.floor(dist / (1000 * 60 * 60 * 24));
          const hr = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 24 * Math.floor(dist / (1000 * 60 * 60 * 24));
          const min = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
          const sec = Math.floor((dist % (1000 * 60)) / 1000);

          document.getElementById('count-d').textContent = day;
          document.getElementById('count-h').textContent = hr;
          document.getElementById('count-m').textContent = String(min).padStart(2, '0');
          document.getElementById('count-s').textContent = String(sec).padStart(2, '0');

          if (dist < 0) {
            clearInterval(countdownInterval);
          }
        }, 1000);
      }

      if (document.contains(document.getElementById("settings-button"))) {
        document.getElementById("settings-button").remove();
        document.getElementById("help-button").remove();
      }

      // Get initial countdown
      var now = new Date().getTime();
      var dist = mintDate - now;

      const day = Math.floor(dist / (1000 * 60 * 60 * 24));
      const hr = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 24 * Math.floor(dist / (1000 * 60 * 60 * 24));
      const min = String(Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const sec = String(Math.floor((dist % (1000 * 60)) / 1000)).padStart(2, '0');

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
            <div class="countdown-div">
              <h1 class="countdown"><span id="count-d" class="countdown-top">${day}</span><br>DAYS</h1>
              <h1 class="countdown"><span id="count-h" class="countdown-top">${hr}</span><br>HRS</h1>
              <h1 class="countdown"><span id="count-m" class="countdown-top">${min}</span><br>MIN</h1>
              <h1 class="countdown right"><span id="count-s" class="countdown-top">${sec}</span><br>SEC</h1>
            </div>
            <br>
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
