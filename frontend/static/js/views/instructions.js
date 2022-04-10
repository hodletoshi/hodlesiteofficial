import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("How To Play");
    }

    async getHtml() {
      document.querySelector('#hodle-footer').style.opacity = "100%";
      document.querySelector('#hodle-footer').style.height = "60px";

      document.body.style.backgroundColor = "#161616";

      if (document.contains(document.getElementById("settings-button"))) {
        document.getElementById("settings-button").remove();
        document.getElementById("help-button").remove();
      }

      return `
        <h1 class="top-title">
          Guess the <span style="font-family: 'HODLE'; font-size: 45px;">Hodle</span> in five tries.
        </h1>
        <h2 class="title-subheader" style="font-weight: normal; width: 90vw; margin: auto; margin-bottom: 40px;">
          Each guess must be a five letter word. <span style="font-family: 'HODLE'; font-size: 30px;">Hodle</span> includes crypto-related phrases, words, and abbreviations.
          <br>
          <br>
          There is a new <span style="font-family: 'HODLE'; font-size: 30px;">Hodle</span> every day at 0:00 EST.
        </h2>
        <div class="content-div">
          <h2 style="font-weight: normal; line-height: 20px;">
            After each guess, the color of the tiles will change to reveal how close your guess was to the <span style="font-family: 'HODLE'; font-size: 20px;">Hodle</span>.<br><br>
          </h2>
          <h2 style="text-align: left; line-height: 50px;">
            For example,
            <br>
          </h2>
          <img src="/static/img/howtoplay_wagmi.png" style="height: 75px;"></img>
          <h2 style="line-height: 25px;">
          <span style="font-family: 'HODLE'; font-size: 20px;">W</span> is in the word in the correct spot.
          <br>
          <span style="font-family: 'HODLE'; font-size: 20px;">G</span> and <span style="font-family: 'HODLE'; font-size: 20px;">M</span> are in the word, but not in the correct spot.
          <br>
          <span style="font-family: 'HODLE'; font-size: 20px;">A</span> and <span style="font-family: 'HODLE'; font-size: 20px;">I</span> are not in the word.
          </h2>
        </div>
        <div class="content-div content-div-bottom">
          <h2 style="font-weight: normal; line-height: 20px;">
            You can also use special power-ups once every 7 days.
            <br>
            Your power-up ability is determined by the first word in your <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span>.
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
