import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Mint Details");
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
          Mint <b>Details</b>
        </h1>
        <h2 class="title-subheader blurred" style="font-weight: normal; width: 90vw; margin: auto; margin-bottom: 40px;">
          Minting will take place on the official <span style="font-family: 'HODLE'; font-size: 25px;">Hodle</span> website at 0:00 EST on May 8.
          <br>
          The WordList mint will take place on the <span style="font-family: 'HODLE'; font-size: 25px;">Hodle</span> website 24 hours prior (0:00 EST on May 7).
          <br>
          <br>
          Minting will <b>NOT</b> open early.
          <br>
          If you see an 'Early Access' opportunity or receive the link to a 'Limited Mint'... DO NOT CLICK - it's a scam.
        </h2>
        <div class="content-div">
          <h2 style="font-weight: normal; line-height: 20px;">
            To buy <span style="color:#93A2CC">Ethereum (ETH)</span>, use a secure crypto exchange.
            <br><br>
            You need to make sure you have enough <span style="color:#93A2CC">Ethereum</span> to mint a <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span>. We <i>recommend</i> having at least another 0.02 ETH in your wallet to cover gas (transaction) fees.
            <br><br>
            Once you have purchased enough <span style="color:#93A2CC">Ethereum</span>, you need to transfer it to your Web3 wallet. Instructions for <span style="color:#f6851b;">MetaMask</span> can be found <a href="https://metamask.io/faqs/" target="_blank" style="color: white; text-decoration: underline; cursor: pointer;">here</a>.
          </h2>
        </div>
        <div class="content-div">
          <h2 style="font-weight: normal; line-height: 20px;">
            Once the mint is opened, you can connect your wallet to the <span style="font-family: 'HODLE'; font-size: 20px;">Hodle</span> website through the icon in the <span style="text-decoration: underline"><b>top right</b></span> of the screen.
            <br><br>
            This icon will light up <span style="color: #538D4E;"><b>green</b></span> once you are successfully connected.
            <br><br>
            You can't mint without connecting your Web3 wallet.
          </h2>
        </div>
        <div class="content-div content-div-bottom">
          <h2 style="font-weight: normal; line-height: 20px;">
            Once you are connected and the mint is open, go <a style="color:white; text-decoration: underline" href="/mint" data-link><b>here</b></a> to mint.
            <br>
            <br>
            After you have confirmed the transaction, copy/paste the following contract address into <span style="color:#f6851b;">MetaMask</span> in the
            <br>
            <b>'Add Custom Token'</b> section.
            <br>
            <br>
            <span style="color:#cab459;">NOT AVAILABLE YET</span>
            <br>
            <br>
            Then, wait a few minutes for the <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span> to show up in your wallet. At this point, you can also view your <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span> on <a style="text-decoration: none" target="_blank" href="https://opensea.io/collection/hodle"><span style="color:#15B2E5"><b>OpenSea</b></a></span>.
            <br>
            <br>
            <span style="color:#69D05A;"><b>Congrats!</b></span> You are now a proud <span style="font-family: 'HODLE'; font-size: 20px;">Hodle Board</span> owner - we can't wait to see your <span style="font-family: 'HODLE'; font-size: 20px; color:#F5793A;">streak????</span> grow.
          </h2>
        </div>
      `;
    }
}
