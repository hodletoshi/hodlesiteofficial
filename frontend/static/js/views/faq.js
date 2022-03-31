import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("FAQ");
    }

    async getHtml() {
      document.querySelector('#hodle-footer').style.opacity = "100%";
      document.querySelector('#hodle-footer').style.height = "60px";

      if (document.contains(document.getElementById("settings-button"))) {
        document.getElementById("settings-button").remove();
      }

      return `
          <h1 class="top-title" style="line-height: 40px;">Frequently Asked <b>Questions</b></h1>
          <div class="content-div">
            <h1>When is the mint date?</h1>
            <h2 class="blurred">Minting will take place on <span class="unselectable">REDACTED</span> at <span class="unselectable">REDACTED EST</span>.</h2>
          </div>
          <div class="content-div">
            <h1>How many mints will be available?</h1>
            <h2>
              10,000 <b>HODLE Board</b> NFTs will be available for minting.
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
            <h1>How Do You Get Access to the HODLE Board Pre-Sale?</h1>
            <h2>
            The Pre-Sale will be available to HODLers on the WordList.
            <br>
            <br>
              There are a few different ways to earn WordList status!
              To join the VIP WordList you will have to get invited by one of our team members or another VIP.
              Show us love on <a target="_blank" href="https://twitter.com/hodlenftgame">Twitter</a> and <a target="_blank" href="https://instagram.com/hodlenft">Instagram</a> and wait for your invite!
              You can also win one of our many <a target="_blank" href="https://discord.com/invite/PZbZ4yeTrt">Discord</a>, <a target="_blank" href="https://twitter.com/hodlenftgame">Twitter</a>, or <a target="_blank" href="https://instagram.com/hodlenft">Instagram</a> community challenges.
            <br>
            <br>
            To join the Public WordList, interact with other HODLers in the <a target="_blank" href="https://discord.com/invite/PZbZ4yeTrt">Discord</a>! Admins give out WordList spots daily to engaged HODLers.
            </h2>
          </div>
          <div class="content-div">
            <h1>What is an NFT?</h1>
            <h2>
            NFT stands for “Non-Fungible Token”.
            It is a unique digital asset that holds its individual value and is not interchangeable.
            <br>
            <br>
            An NFT lives on a blockchain which is a digital ledger which stores all of the information about the creation, purchase, sale and resale of NFTs.
            <br>
            <br>
            Blockchains are part of the reason that an NFT maintains its value because it isn’t as simple as texting a photo back and forth between friends;
            when you buy an NFT, you own it because the blockchain says so.
            </h2>
          </div>
          <div class="content-div">
            <h1>What is MetaMask?</h1>
            <h2>
            MetaMask is a crypto-currency wallet that allows you to buy, store, use and transfer Ethereum (a.k.a. ETH) the main crypto-currency associated with NFTs.
            <br>
            <br>
            You must create a MetaMask wallet and have ETH added to it prior to our drop in order to mint.
            <br>
            <br>
            To add ETH to your MetaMask wallet, you will need to purchase it by signing up with a crypto-trading platform.
            We recommend using either Coinbase or Binance. If you need help buying ETH, feel free to message anyone on our team on <a target="_blank" href="https://discord.com/invite/PZbZ4yeTrt">Discord</a> and we will be more than happy to help you through the process.
            </h2>
          </div>
          <div class="content-div">
            <h1>What Happens When I Buy a HODLE Board?</h1>
            <h2>
            Once your HODLE Board NFT is bought (“minted”), you will be able to view it using your wallet address on an NFT marketplace called Opensea.
            Your HODLE Board will only be revealed in your wallet once the project is completely sold out.
            </h2>
          </div>
          <div class="content-div">
            <h1>I Still Don't Understand. What Should I Do?</h1>
            <h2>
            Don't worry, fren!
            The Web3 world has a lot of moving parts and we all know that it is overwhelming when you first start.
            Feel free to message anyone on our team on <a target="_blank" href="https://discord.com/invite/PZbZ4yeTrt">Discord</a> and we will be more than happy to help you through the process.
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
