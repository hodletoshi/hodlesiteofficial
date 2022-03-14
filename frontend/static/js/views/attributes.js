import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Attributes");
    }

    async getHtml() {
      document.querySelector('#hodle-footer').style.opacity = "100%";

      return `
          <h1 class="top-title">
            Board <b>Attributes</b>
          </h1>
          <h2 class="title-subheader" style="font-weight: normal; width: 90vw; margin: auto; margin-bottom: 40px;">
            Each <b>HODLE Board</b> is unique.
            <br>
            Certain rare attributes provide in-game boosts and increase rewards.
          </h2>
          <div class="content-div">
            <h1 class="top-title">Themes</h1>
            <h2 style="font-weight: normal; line-height: 20px;">
              The theme of your <b>HODLE Board</b> will be the theme that you play the <b>HODLE</b> game with.
            </h2>
            <p style="text-align:left; margin-top: 50px; margin-bottom: 20px; line-height: 35px;">
              <span style="color:#F9A337;"><b>Bitcoin</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#DFF3FC;"><b>Clear Sky</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#72D56E;"><b>Correct</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#D5CEB5;"><b>Cream</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#505050;"><b>Dark</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#93A2CC;"><b>Ethereum</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#FEC839;"><b>Hint</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#B9C6A2;"><b>Key Lime Meringue</b><span style="float:right;">5.0 %</span></span>
              <br>
              <b>Light</b><span style="float:right;">5.0 %</span>
              <br>
              <span style="color:#CAC9C7;"><b>Platinum</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#E6D2D3;"><b>Quartz</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#717171;"><b>Wrong</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#F7E0CA;"><b>Pastel Acorn</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#91BBBB;"><b>Pastel Aqua</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#CE5F6D;"><b>Pastel Cherry</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#DF89AD;"><b>Pastel Rose</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#9D88BF;"><b>Pastel Galaxy</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#E0E0E0;"><b>Pastel Silver</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#F6D17D;"><b>Pastel Gold</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#6266BB;"><b>Superlative Purple</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#F6E996;"><b>Superlative Yellow</b><span style="float:right;">5.0 %</span></span>
              <br>
              <span style="color:#6CB9FD;"><b>Superlative Blue</b><span style="float:right;">5.0 %</span></span>
            </p>
          </div>
          <div class="content-div">
            <h1 class="top-title">Mode</h1>
            <h2 style="font-weight: normal; line-height: 20px;">
              The mode of your <b>HODLE Board</b> determines the color of your correct, hint, and incorrect tiles when playing <b>HODLE</b>.
            </h2>
            <p style="text-align:left; margin-top: 50px; margin-bottom: 20px; line-height: 35px;">
              <span style="color:#717171;"><b>Dark</b><span style="float:right;">30.0 %</span></span>
              <br>
              <b>Light</b><span style="float:right;">30.0 %</span>
              <br>
              <span style="color:#89C1F7;"><span style="color:#F37943;"><b>High</b>&nbsp;</span><b>Contrast</b><span style="float:right;">15.0 <span style="color:#F37943;">%</span></span></span>
              <br>
              <span style="color:#F7E0CA;"><b>Pastel</b><span style="float:right;">15.0 %</span></span>
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
              The first guess in your <b>HODLE Board</b> can give you <span style="text-decoration:underline">special abilities</span> when playing the <b>HODLE</b> game.
            </h2>
            <p style="text-align:left; margin-top: 50px; margin-bottom: 20px; line-height: 35px;">
              <b>HODLE</b><span style="float:right;">30.0 %</span>
              <br>
              <b>HODLR</b><span style="float:right;">30.0 %</span>
              <br>
              <b>IHODL</b><span style="float:right;">30.0 %</span>
              <br>
              <span style="color:#A6AAEE;"><b>EXTRA</b><span style="float:right;">30.0 %</span></span>
              <br>
              <span style="color:#6ECF60;"><b>GREEN</b><span style="float:right;">30.0 %</span></span>
              <br>
              <span style="color:#F3D963;"><b>HINTS</b><span style="float:right;">30.0 %</span></span>
              <br>
              <span style="color:#FB95CC;"><b>THREE</b><span style="float:right;">30.0 %</span></span>
            </p>
          </div>
          <div class="content-div">
            <h1 class="top-title">Second Guess</h1>
            <h2 style="font-weight: normal; line-height: 20px;">
              The second guess in your <b>HODLE Board</b> is your <b>HODLE</b> identity. Choose from a variety of famous crypto & NFT terms.
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
              The tiles attribute of your <b>HODLE Board</b> indicates how close your second guess was to the <b>HODLE</b>.
            </h2>
            <p style="text-align:left; margin-top: 50px; margin-bottom: 20px; line-height: 35px; color: #6ECF60;">
              <b>Genius</b><span style="float:right;">5.0 %</span>
              <br>
              <span style="color: #538D4E;">
                <b>Magnificent</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Clever</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Brilliant</b><span style="float:right;">5.0 %</span>
              </span>
              <br>
              <span style="color: #819155;">
                <b>Superb</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Stunning</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Stellar</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Splendid</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Spectacular</b><span style="float:right;">5.0 %</span>
              </span>
              <br>
              <span style="#B5C659;">
                <b>Skillful</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Incredible</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Impressive</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Excellent</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Awesome</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Amazing</b><span style="float:right;">5.0 %</span>
              </span>
              <br>
              <span style="color:#E6D15A;">
                <b>Respectable</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Pleasant</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Nice</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Neat</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Good</b><span style="float:right;">5.0 %</span>
                <br>
                <b>Decent</b><span style="float:right;">5.0 %</span>
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
                <b>Puzzling</b><span style="float:right;">5.0 %</span>
              </span>
            </p>
          </div>
      `;
    }
}
