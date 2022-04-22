import AbstractView from "./AbstractView.js";

var teaserSeen = 0;

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Attributes");
    }

    async getHtml() {
      teaserSeen += 1;

      document.querySelector('#hodle-footer').style.opacity = "100%";
      document.querySelector('#hodle-footer').style.height = "60px";

      document.documentElement.style.backgroundImage = 'none';
      document.body.style.backgroundColor = "#161616";

      if (document.contains(document.getElementById("settings-button"))) {
        document.getElementById("settings-button").remove();
        document.getElementById("help-button").remove();
      }

      var x = 0;
      var teaser = [];
      teaser[0] = "url('static/img/teaser1.png')";
      teaser[1] = "url('static/img/teaser2.png')";
      teaser[2] = "url('static/img/teaser3.png')";
      teaser[3] = "url('static/img/teaser4.png')";
      teaser[4] = "url('static/img/teaser5.png')";
      teaser[5] = "url('static/img/teaser6.png')";
      teaser[6] = "url('static/img/teaser7.png')";
      teaser[7] = "url('static/img/teaser8.png')";
      teaser[8] = "url('static/img/teaser9.png')";
      teaser[9] = "url('static/img/teaser10.png')";
      teaser[10] = "url('static/img/teaser11.png')";
      teaser[11] = "url('static/img/teaser12.png')";
      teaser[12] = "url('static/img/teaser13.png')";
      teaser[13] = "url('static/img/teaser14.png')";

      if (teaserSeen == 1) {
        // Only set the interval on the first time the page starts

        setInterval(function() {
          const teaserimg = document.getElementById("teaser-img-square");

          x = (x === 13) ? 0 : x + 1;
          try {
            teaserimg.style.backgroundImage = teaser[x];
          } catch (err) {
          }
        }, 2000);
      }

      return `
          <h1 class="top-title">
            Board <b>Attributes</b>
          </h1>
          <h2 class="title-subheader" style="font-weight: normal; width: 90vw; margin: auto; margin-bottom: 40px;">
            Each <span style="font-family: 'HODLE'; font-size: 25px;">Hodle Board</span> is unique.
            <br>
            Certain rare attributes provide in-game boosts and increase rewards.
            <br>
            <br>
            Below are some examples of what your <span style="font-family: 'HODLE'; font-size: 25px;">Hodle Board</span> could look like!
          </h2>
          <div style="width: 300px; height: 300px; margin: auto; margin-top: -20px; margin-bottom: 50px;">
            <div id="teaser-img-square" style="transition: 1s; width: 300px; height: 300px; background-size: contain; background-image: url('/static/img/teaser1.png')""></div>
          </div>
          <div class="content-div">
            <h1 class="top-title">Themes</h1>
            <h2 style="font-weight: normal; line-height: 20px;">
              The theme of your <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span> will be the theme that you play the <span style="font-family: 'HODLE'; font-size: 20px;">Hodle</span> game with.
            </h2>
            <p style="text-align:left; margin-top: 50px; margin-bottom: 20px; line-height: 35px;">
              <span style="color:#505050;"><b>Dark</b><span style="float:right;">4.0 %</span></span>
              <br>
              <b>Light</b><span style="float:right;">4.0 %</span>
              <br>
              <span style="color:#F7E0CA;"><b>Pastel Acorn</b><span style="float:right;">3.0 %</span></span>
              <br>
              <span style="color:#91BBBB;"><b>Pastel Aqua</b><span style="float:right;">3.0 %</span></span>
              <br>
              <span style="color:#CE5F6D;"><b>Pastel Cherry</b><span style="float:right;">3.0 %</span></span>
              <br>
              <span style="color:#DF89AD;"><b>Pastel Rose</b><span style="float:right;">3.0 %</span></span>
              <br>
              <span style="color:#9D88BF;"><b>Pastel Galaxy</b><span style="float:right;">3.0 %</span></span>
              <br>
              <span style="color:#E0E0E0;"><b>Pastel Silver</b><span style="float:right;">3.0 %</span></span>
              <br>
              <span style="color:#F6D17D;"><b>Pastel Gold</b><span style="float:right;">3.0 %</span></span>
              <br>
              <span style="color:#93A2CC;"><b>Ethereum</b><span style="float:right;">2.5 %</span></span>
              <br>
              <span style="color:#F9A337;"><b>Bitcoin</b><span style="float:right;">2.5 %</span></span>
              <br>
              <span style="color:#FEC839;"><b>Hint</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#B9C6A2;"><b>Key Lime Meringue</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#CAC9C7;"><b>Platinum</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#E6D2D3;"><b>Quartz</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#717171;"><b>Wrong</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#DFF3FC;"><b>Clear Sky</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#72D56E;"><b>Correct</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#D5CEB5;"><b>Cream</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#6266BB;"><b>Superlative Purple</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#F6E996;"><b>Superlative Yellow</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#f384c4;"><b>Superlative Pink</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#6CB9FD;"><b>Superlative Blue</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#c047fa;"><b><span style="color:#2cde8c">World</span> of <span style="color:#2cde8c">Green</span> Purple</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#d13b66;"><b><span style="color:#671f97">World</span> of <span style="color:#671f97">Purple</span> Pink</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#7f5ba7;"><b>Purple Bean</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#4d7aa6;"><b>Spirit Bean</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#c61f3f;"><b>Red Bean</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#92cff2;"><b>Chill Cat</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#f82b6b;"><b>Classy Cat</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#90abeb;"><b>Pastel X</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#96ffe4;"><b>Minty Paradise</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#63d3ff;"><b>mf blue</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#ffe561;"><b>mf yellow</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#8f9156;"><b>Army Ape</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#a3e5f4;"><b>Blue Ape</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#30e9b7;"><b>Turquoise Ape</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#e4e6a8;"><b>Yellow Ape</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#856d86;"><b>Purple Ape</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#e2c9a1;"><b>Boat Ape</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#ab0b60;"><b>Shades Punk</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#8665ac;"><b>Bidding Punk</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#8c4f4c;"><b>Paper Hand Punk</b><span style="float:right;">2.0 %</span></span>
              <br>
              <span style="color:#638495;"><b>HODLR Punk</b><span style="float:right;">2.0 %</span></span>
            </p>
          </div>
          <div class="content-div">
            <h1 class="top-title">Mode</h1>
            <h2 style="font-weight: normal; line-height: 20px;">
              The mode of your <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span> determines the color of your correct, hint, and incorrect tiles when playing <span style="font-family: 'HODLE'; font-size: 20px;">Hodle</span>.
            </h2>
            <p style="text-align:left; margin-top: 50px; margin-bottom: 20px; line-height: 35px;">
              <span style="color:#717171;"><b>Dark</b><span style="float:right;">25.0 %</span></span>
              <br>
              <b>Light</b><span style="float:right;">25.0 %</span>
              <br>
              <span style="color:#89C1F7;"><span style="color:#F37943;"><b>High</b>&nbsp;</span><b>Contrast</b><span style="float:right;">17.5 <span style="color:#F37943;">%</span></span></span>
              <br>
              <span style="color:#de7a7a;"><b>Pastel</b><span style="float:right;">17.5 %</span></span>
              <br>
              <b><span style="color:#baff6e">mfers</span></b><span style="float:right; color:#ffb66f">10.0 %</span>
              <br>
              <b>
              <span style="color:#5AE6B4;">S</span><span style="color:#F4DB59;">u</span><span style="color:#A5A8F0;">p</span><span style="color:#FE95CF;">e</span><span style="color:#5AE6B4;">r</span><span style="color:#F4DB59;">l</span><span style="color:#A5A8F0;">a</span><span style="color:#FE95CF;">t</span><span style="color:#5AE6B4;">i</span><span style="color:#F4DB59;">v</span><span style="color:#A5A8F0;">e</span>
              </b>
              <span style="float:right;">
              <span style="color:#FE95CF;">5</span><span style="color:#5AE6B4;">.</span><span style="color:#A5A8F0;">0</span>&nbsp;<span style="color:#F4DB59;">%</span>
            </p>
          </div>
          <div class="content-div">
            <h1 class="top-title">First Guess</h1>
            <h2 style="font-weight: normal; line-height: 20px;">
              The first guess in your <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span> can give you <span style="text-decoration:underline">special abilities</span> when playing the <span style="font-family: 'HODLE'; font-size: 20px;">Hodle</span> game.
            </h2>
            <p style="text-align:left; margin-top: 50px; margin-bottom: 20px; line-height: 35px;">
              <b>HODLE</b><span style="float:right;">28.0 %</span>
              <br>
              <b>HODLR</b><span style="float:right;">28.0 %</span>
              <br>
              <b>IHODL</b><span style="float:right;">28.0 %</span>
              <br>
              <span style="color:#FB95CC;"><b>THREE</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#6ECF60;"><b>GREEN</b><span style="float:right;">4.5 %</span></span>
              <br>
              <span style="color:#F3D963;"><b>HINTS</b><span style="float:right;">4.5 %</span></span>
              <br>
              <span style="color:#A6AAEE;"><b>EXTRA</b><span style="float:right;">2.0 %</span></span>
            </p>
          </div>
          <div class="content-div">
            <h1 class="top-title">Second Guess</h1>
            <h2 style="font-weight: normal; line-height: 20px;">
              The second guess in your <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span> is your <span style="font-family: 'HODLE'; font-size: 20px;">Hodle</span> identity. Choose from a variety of famous NFT & crypto terms.
            </h2>
            <p style="text-align:left; margin-top: 50px; margin-bottom: 20px; line-height: 35px;">
              <b>ALPHA</b><span style="float:right;">5.0 %</span>
              <br>
              <b>BLOCK</b><span style="float:right;">5.0 %</span>
              <br>
              <b>CHAIN</b><span style="float:right;">5.0 %</span>
              <br>
              <b>COINS</b><span style="float:right;">5.0 %</span>
              <br>
              <b>FLOOR</b><span style="float:right;">5.0 %</span>
              <br>
              <b>FRENS</b><span style="float:right;">5.0 %</span>
              <br>
              <b>JPEGS</b><span style="float:right;">5.0 %</span>
              <br>
              <b>LAMBO</b><span style="float:right;">5.0 %</span>
              <br>
              <b>LASER</b><span style="float:right;">5.0 %</span>
              <br>
              <b>MINTS</b><span style="float:right;">5.0 %</span>
              <br>
              <b>NIFTY</b><span style="float:right;">5.0 %</span>
              <br>
              <b>OWNER</b><span style="float:right;">5.0 %</span>
              <br>
              <b>PRICE</b><span style="float:right;">5.0 %</span>
              <br>
              <b>PUNKS</b><span style="float:right;">5.0 %</span>
              <br>
              <b>SNIPE</b><span style="float:right;">5.0 %</span>
              <br>
              <b>STAKE</b><span style="float:right;">5.0 %</span>
              <br>
              <b>VAULT</b><span style="float:right;">5.0 %</span>
              <br>
              <b>WAGMI</b><span style="float:right;">5.0 %</span>
              <br>
              <b>WHALE</b><span style="float:right;">5.0 %</span>
              <br>
              <b>YACHT</b><span style="float:right;">5.0 %</span>
            </p>
          </div>
          <div class="content-div content-div-bottom">
            <h1 class="top-title">Tiles</h1>
            <h2 style="font-weight: normal; line-height: 20px;">
              The tiles attribute directly affects the rarity and aesthetic of your <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span>.
            </h2>
            <p style="text-align:left; margin-top: 50px; margin-bottom: 20px; line-height: 35px; color: #6ECF60;">
              <b>Genius</b><span style="float:right;">1.0 %</span>
              <br>
              <span style="color: #538D4E;">
                <b>Magnificent</b><span style="float:right;">1.5 %</span>
                <br>
                <b>Clever</b><span style="float:right;">1.5 %</span>
                <br>
                <b>Brilliant</b><span style="float:right;">1.5 %</span>
              </span>
              <br>
              <span style="color: #819155;">
                <b>Superb</b><span style="float:right;">2.0 %</span>
                <br>
                <b>Stunning</b><span style="float:right;">2.0 %</span>
                <br>
                <b>Stellar</b><span style="float:right;">2.0 %</span>
                <br>
                <b>Splendid</b><span style="float:right;">2.0 %</span>
                <br>
                <b>Spectacular</b><span style="float:right;">2.0 %</span>
              </span>
              <br>
              <span style="#B5C659;">
                <b>Skillful</b><span style="float:right;">3.0 %</span>
                <br>
                <b>Incredible</b><span style="float:right;">3.0 %</span>
                <br>
                <b>Impressive</b><span style="float:right;">3.0 %</span>
                <br>
                <b>Excellent</b><span style="float:right;">3.0 %</span>
                <br>
                <b>Awesome</b><span style="float:right;">3.0 %</span>
                <br>
                <b>Amazing</b><span style="float:right;">3.0 %</span>
              </span>
              <br>
              <span style="color:#E6D15A;">
                <b>Respectable</b><span style="float:right;">4.0 %</span>
                <br>
                <b>Pleasant</b><span style="float:right;">4.0 %</span>
                <br>
                <b>Nice</b><span style="float:right;">4.0 %</span>
                <br>
                <b>Neat</b><span style="float:right;">4.0 %</span>
                <br>
                <b>Good</b><span style="float:right;">4.0 %</span>
                <br>
                <b>Decent</b><span style="float:right;">4.0 %</span>
              </span>
              <br>
              <span style="color:#B1B1B1;">
                <b>Not Far</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Hard</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Guess</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Focus</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Difficult</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Concentrate</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Close</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Almost</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Puzzling</b><span style="float:right;">2.5 %</span>
              </span>
            </p>
          </div>
      `;
    }
}
