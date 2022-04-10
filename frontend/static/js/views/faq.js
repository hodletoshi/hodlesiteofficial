import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("FAQ");
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
          <h1 class="top-title" style="line-height: 40px;">Frequently Asked <b>Questions</b></h1>
          <div class="content-div">
            <h1>What is <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span>?</h1>
            <h2><span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> is the first Solve-2-Earn daily NFT & crypto word game.
            <br>
            <br>
            Following mint, there will be a new 5-letter crypto-related word for you to solve EVERY day. In order to earn rewards, you must be holding a <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> NFT.</h2>
          </div>
          <div class="content-div">
            <h1>Who is behind <span style="font-family: 'HODLE'; font-size: 22px">Hodle</span>?</h1>
            <h2>The <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> Team is made up of a group of experienced developers, artists, NFT degens, and seasoned crypto investors united by our passion for Web3, word games, and puzzles. More information on the team will be available on our website soon.
            <br>
            <br>
            <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> is NOT affiliated with any other word game, company, NFT project, or cryptocurrency. Please be wary of impersonators!</h2>
          </div>
          <div class="content-div">
            <h1>How can I play <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span>?</h1>
            <h2>After the mint, at a scheduled time each day, a new <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> (word) will go live, and you will be able to connect to Web3 and <a target="_blank" href="https://hodle.io/play">play</a>!</h2>
          </div>
          <div class="content-div">
            <h1 style="margin-bottom: 10px;">How many <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> NFTs will be available? How much will they cost? When does the mint open?</h1>
            <h2 class="blurred">10,000 <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> NFTs will be available for minting. The WordList (WL) mint price is <span class="unselectable">REDACTED</span>, and the general mint price is <span class="unselectable">REDACTED</span>. Minting will take place on April <span class="unselectable">??</span>, with the WordList (WL) mint opening 24 hours prior.
            <br>
            <br>
            All hidden details are being revealed at 5K <a target="_blank" href="https://discord.com/invite/PZbZ4yeTrt">Discord</a> members. You don't want to miss it!
            </h2>
          </div>
          <div class="content-div">
            <h1>How do I mint a <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> NFT?</h1>
            <h2>In order to mint a <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span>, you'll need a Web3 wallet (we recommend <a target="_blank" href="https://metamask.io/">MetaMask</a>) and Ethereum (ETH).
            <br>
            <br>
            You'll need to buy Ethereum (ETH) from an exchange, like Coinbase, Binance, FTX, or Kraken. Purchase ETH on the exchange, and send it from your exchange wallet to your Web3 wallet address. You will use this Web3 wallet to mint the NFT. Once the mint is live, you'll be able to connect your wallet to our website, and mint the <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> directly into your wallet.
            </h2>
          </div>
          <div class="content-div">
            <h1>What is the WordList (WL)? How can I get on it?</h1>
            <h2>The WordList is our WhiteList pass. There will be a total of 3000 WordList spots open and given out up until mint day. WordListed members will have first access to the <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> mint, and will be able to mint at a discounted price.
            <br>
            <br>
            You can check out our <a target="_blank" href="https://discord.com/invite/PZbZ4yeTrt">Discord</a> for more information on how to get WordListed!
            </h2>
          </div>
          <div class="content-div">
            <h1>What happens after I mint a <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> NFT?</h1>
            <h2>After you mint your <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span>, you can go directly to Opensea, connect your wallet, and view your NFT! Your <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> will be unrevealed until the collection has minted out.</h2>
          </div>
          <div class="content-div">
            <h1>How much can I earn by playing <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> everyday?</h1>
            <h2>To start, the prize pool will be 1 ETH per day. Based on how fast you're able to solve the puzzle, how many <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> NFTs you own, and the daily streak you are on, the more you'll earn. A full breakdown of Rewards can be found <a target="_blank" href="https://hodle.io/rewards">here</a>!
            <br>
            <br>
            Check out our Roadmap (coming soon) to learn about our future!</h2>
          </div>
          <div class="content-div content-div-bottom">
            <h1>What will the <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> NFTs look like?</h1>
            <h2>Each board will have a unique combination of Theme, Mode, First Guess, Second Guess, and Tiles - this unique combination of attributes determine your NFT's rarity, and affect how you can play the <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> game.
            <br>
            <br>
            For example, your 'first guess' attriute can grant you special abilities that give you an advantage when playing the game. A full breakdown of attributes, their utility, and their rarities can be found <a target="_blank" href="https://hodle.io/attributes">here</a>!</h2>
          </div>
          <!--
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
              <span class="unselectable">0.??</span> ETH + Gas for WordListed players.
              <br>
              <span class="unselectable">0.??</span> ETH + Gas for the general public.
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
          -->
      `;
    }
}
