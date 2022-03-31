import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("How To Play");
    }

    async getHtml() {
      document.querySelector('#hodle-footer').style.opacity = "100%";
      document.querySelector('#hodle-footer').style.height = "60px";

      if (document.contains(document.getElementById("settings-button"))) {
        document.getElementById("settings-button").remove();
      }

      return `
        <h1 class="top-title">
          Guess the <b>HODLE</b> in five tries.
        </h1>
        <h2 class="title-subheader" style="font-weight: normal; width: 90vw; margin: auto; margin-bottom: 40px;">
          Each guess must be a five letter word. <b>HODLE</b> includes crypto-related phrases, words, and abbreviations.
          <br>
          <br>
          There is a new <b>HODLE</b> every day at 0:00 EST.
        </h2>
        <div class="content-div">
          <h2 style="font-weight: normal; line-height: 20px;">
            After each guess, the color of the tiles will change to reveal how close your guess was to the HODLE.<br><br>
          </h2>
          <h2 style="text-align: left; line-height: 50px;">
            For example,
            <br>
          </h2>
          <img src="/static/img/howtoplay_wagmi.png" style="height: 75px;"></img>
          <h2 style="line-height: 25px;">
          <b>W</b> is in the word in the correct spot.
          <br>
          <b>G</b> and <b>M</b> are in the word, but not in the correct spot.
          <br>
          <b>A</b> and <b>I</b> are not in the word.
          </h2>
        </div>
        <div class="content-div content-div-bottom">
          <h2 style="font-weight: normal; line-height: 20px;">
            You can also use special power-ups once every 7 days.
            <br>
            Your power-up ability is determined by the first word in your <b>HODLE NFT</b>.
          </h2>
          <p style="text-align:left; margin-top: 50px; margin-bottom: 20px; line-height: 35px; letter-spacing: 1.5px;">
            <span style="color:#cab459;"><b>HINTS</b><span style="float:right; letter-spacing: 0px;">Reveal a misplaced letter.</span></span>
            <br>
            <span style="color:#F5793A;"><b>THREE</b><span style="float:right; letter-spacing: 0px;">Eliminate three letters.</span></span>
            <br>
            <span style="color:#69D05A;"><b>GREEN</b><span style="float:right; letter-spacing: 0px;">Reveal a correct letter.</span></span>
            <br>
            <span style="color:#A5A8F0;"><b>EXTRA</b><span style="float:right; letter-spacing: 0px;">Get an extra guess (six total).</span></span>
          </p>
        </div>
      `;
    }
}
