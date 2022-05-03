import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Mint");
    }

    async getHtml() {
      document.querySelector('#hodle-footer').style.opacity = "100%";
      document.querySelector('#hodle-footer').style.height = "60px";

      document.documentElement.style.backgroundImage = 'none';
      document.body.style.backgroundColor = "#161616";

      const mintDate = new Date(Date.UTC(2022,4,7,5,0,0,0));

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
          <div class="mint-img-div">
            <img class="mint-img"></img>
          </div>
          <div class="mint-text">
            <div class="countdown-div" style="margin-top: -20px; margin-bottom: 20px;">
              <h1 class="countdown"><span id="count-d" class="countdown-top">${day}</span><br>DAYS</h1>
              <h1 class="countdown"><span id="count-h" class="countdown-top">${hr}</span><br>HRS</h1>
              <h1 class="countdown"><span id="count-m" class="countdown-top">${min}</span><br>MIN</h1>
              <h1 class="countdown right"><span id="count-s" class="countdown-top">${sec}</span><br>SEC</h1>
            </div>
            <h1 class="top-title">The <span style="font-family: 'HODLE'; font-size: 35px;">Hodle Board</span> mint isn't open yet!</h1>
            <h2 class="title-subheader">Join the <span style="font-family: 'HODLE'">Hodlers</span> on <a href="https://discord.com/invite/PZbZ4yeTrt" target="_blank"><span style="text-decoration: underline; cursor: pointer;">Discord</span></a>!</h2>
          </div>
      `;
    }
}
