import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Rewards");
    }

    async getHtml() {
      document.querySelector('#hodle-footer').style.opacity = "100%";
      document.querySelector('#hodle-footer').style.height = "60px";

      document.documentElement.style.backgroundImage = 'none';
      document.body.style.backgroundColor = "#161616";

      if (document.contains(document.getElementById("settings-button"))) {
        document.getElementById("settings-button").remove();
        document.getElementById("help-button").remove();
      }

      return `
          <h1 class="top-title">
            Game <b>Rewards</b>
          </h1>
          <h2 class="title-subheader blurred" style="font-weight: normal; width: 90vw; margin: auto; margin-bottom: 40px;">
            When you correctly guess the <span style="font-family: 'HODLE'; font-size: 25px;">Hodle</span>, you win prizes that increase with your speed.
            <br>
            <br>
            The prize pool for today's HODLE is <span class="unselectable">?.??</span> ETH.
          </h2>
          <div class="content-div">
            <h2 style="font-weight: normal; line-height: 20px;">
              Everyone who answers the <span style="font-family: 'HODLE'; font-size: 20px;">Hodle</span> correctly automatically is eligible to be a part of the daily ETH prize pool.
              <br>
              <br>
              The faster you answer, the more you earn.
              <br>
              <br>
              If you solve the <span style="font-family: 'HODLE'; font-size: 20px;">Hodle</span>, each <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span> you hold will enter the prize pool. The more <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span> NFTs you hold, the higher your daily rewards.
            </h2>
            <p style="text-align:left; margin-top: 50px; margin-bottom: 60px; letter-spacing: 1.5px;">
            <span style="color:#F0C030;"><b>FASTEST 100</b><span style="float:right; letter-spacing: 0px;">5x Weighted Share</span></span>
            <br>
            <br>
            <span style="color:#AAAAAA;"><b>FASTEST 500</b><span style="float:right; letter-spacing: 0px;">3x Weighted Share</span></span>
            <br>
            <br>
            <span style="color:#D47C21;"><b>FASTEST 1000</b><span style="float:right; letter-spacing: 0px;"> 1.5x Weighted Share</span></span>
            <br>
            <br>
            <b>ALL WINNERS</b><span style="float:right; letter-spacing: 0px;">1x Weighted Share</span>
            </p>
            <h2 style="font-weight: normal; line-height: 20px;">
              To claim your share of the daily <span style="font-family: 'HODLE'; font-size: 20px;">Hodle</span> prize pool, all you need to do is answer correctly. Earnings will be distributed to your wallet in WETH on a weekly basis to save gas.
            </h2>
          </div>
          <div class="content-div content-div-bottom">
            <h2 style="font-weight: normal; line-height: 20px;">
              Everyone who answers the <span style="font-family: 'HODLE'; font-size: 20px;">Hodle</span> correctly will soon be able to mint an NFT of their winning <b>Daily Board</b> for free, directly into their wallet, through the Polygon (MATIC) network.<br><br>
            </h2>
            <h2 style="text-align: left;">
              For example,
            </h2>
            <div class="rewards-images">
              <div class="rewards-img-col">
                <img src="/static/img/reward1.png" style="width:100%">
              </div>
              <div class="rewards-img-col">
                <img src="/static/img/reward2.png" style="width:100%">
              </div>
              <div class="rewards-img-col">
                <img src="/static/img/reward3.png" style="width:100%">
              </div>
            </div>
            <h2 style="line-height: 20px;">
              We are working on adding more awesome features to NFT rewards soon.
              This includes the ability to add correctly guessed words onto your <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span>, showing off streaks on both your <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span> & <span style="font-family: 'HODLE'; font-size: 20px;">Daily Board</span>, and more.
            </h2>
          </div>
      `;
    }
}
