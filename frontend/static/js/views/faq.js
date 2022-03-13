import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("FAQ");
    }

    async getHtml() {
        return `
            <h1 class="top-title" style="line-height: 40px;">Frequently Asked <b>Questions</b></h1>
            <div class="content-div">
              <h1>When is the mint date?</h1>
              <h2>Minting will take place on Date at Date Time.</h2>
            </div>
            <div class="content-div">
              <h1>What will it cost to mint a HODLE NFT?</h1>
              <h2>0.065 ETH + Gas.</h2>
            </div>
            <div class="content-div">
              <h1>What will it cost to mint a HODLE NFT?</h1>
              <h2>0.065 ETH + Gas.</h2>
            </div>
            <div class="content-div">
              <h1>What will it cost to mint a HODLE NFT?</h1>
              <h2>0.065 ETH + Gas.</h2>
            </div>
            <div class="content-div">
              <h1>What will it cost to mint a HODLE NFT?</h1>
              <h2>0.065 ETH + Gas.</h2>
            </div>
            <div class="content-div">
              <h1>What will it cost to mint a HODLE NFT?</h1>
              <h2>0.065 ETH + Gas.</h2>
            </div>
            <div class="content-div content-div-bottom">
              <h1>How many HODLE Boards can I mint?</h1>
              <h2>You can mint up to 5 HODLE Board NFTs. There are no limits on how many you can hold in your wallet after mint - so you can acquire as many as you want on OpenSea once mint is closed.</h2>
            </div>
        `;
    }
}
