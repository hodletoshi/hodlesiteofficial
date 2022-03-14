import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("FAQ");
    }

    async getHtml() {
      document.querySelector('#hodle-footer').style.opacity = "100%";
      document.querySelector('#hodle-footer').style.height = "60px";

        return `
            <h1 class="top-title" style="line-height: 40px;">Frequently Asked <b>Questions</b></h1>
            <div class="content-div">
              <h1>When is the mint date?</h1>
              <h2 class="blurred">Minting will take place on <span class="unselectable">REDACTED</span> at <span class="unselectable">REDACTED EST</span>.</h2>
            </div>
            <div class="content-div">
              <h1>How many mints will be available?</h1>
              <h2>
                11,111 <b>HODLE Board</b> NFTs will be available for minting.
              </h2>
            </div>
            <div class="content-div">
              <h1>What will it cost to mint a HODLE Board?</h1>
              <h2 class="blurred">
                <span class="unselectable">0.11</span> ETH + Gas for WordListed players.
                <br>
                <span class="unselectable">0.15</span> ETH + Gas for the general public.
              </h2>
            </div>
            <div class="content-div">
              <h1>Where will HODLE Board be available after mint?</h1>
              <h2>
                The <b>HODLE Board</b> collection will be listed on Opensea, LooksRare, and NiftyGateway.
              </h2>
            </div>
            <div class="content-div">
              <h1>What will the royalty fee be on secondary HODLE Board sales?</h1>
              <h2 class="blurred">
                <span class="unselectable">??</span>%. All proceeds will be used to fund daily prize pools & build new <b>HODLE</b> features.
              </h2>
            </div>
            <div class="content-div content-div-bottom">
              <h1>How many HODLE Boards can I mint?</h1>
              <h2 class="blurred">
                You can mint up to <span class="unselectable">???</span> <b>HODLE Board</b> NFTs.
                There are no limits on how many you can hold after mint - so you can acquire as many as you want on secondary marketplaces once mint is closed.
              </h2>
            </div>
        `;
    }
}
