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
          The <b>Roadmap</b>
          <br>
          <span style="font-size: 15px;">Last Updated on 04/21/22</span>
        </h1>
        <h2 class="title-subheader" style="font-weight: normal; width: 90vw; margin: auto; margin-bottom: 40px;">
          Our ambitious goal is to create and build a new P2E
          <br>
          ecosystem for Web3 - quick, fun, solve to earn puzzle games,<br> driven by an amazing community of HODLers.
          <br>
          <br>
          It all starts with <span style="font-family:'HODLE'; font-size: 28px;">Hodle</span>...
          <br>
          <br>
          <span style="font-size: 18px;">
            <span style="color: #6baa65">Deliverables in <b>green</b> have been completed.</span>
            <br>
            <span style="color: #cab459">Deliverables in <b>yellow</b> are ongoing.</span>
            <br>
            <span style="color: #787c7e">Deliverables in <b>light gray</b> are upcoming.</span>
          </span>
        </h2>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Groundwork</h1>
          <h2>🚧 April & May '22 🚧</h2>
          <br>
          <h2 style="font-weight: normal; line-height: 25px; text-align: left;">
            <span style="color: #6baa65">🖼 Design <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> collection
            <Br>
            🎙 Launch Socials
            <br>
            👪 Launch community hub on Discord
            <br>
            🧑‍💻 Launch Website
            <br>
            🍵 Announce mint details
            <br>
            🎟 Open WordList
            <br>
            🎁 Community Contests & Giveaways
            <br>
            👂 Partner with advisors to the <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> team
            <br>
            🧩 Launch <span style="font-family: 'HODLE'; font-size: 22px;">Demo</span> at <a href="/demo"><span style="font-family: 'HODLE'; font-size: 22px; color:#6baa65; text-decoration: underline #6baa65">Play Demo</span></a>
            <br></span>
            <span style="color:#cab459">
            📣 Host first AMA, followed by weekly team AMA's
            <br>
            🗓 Schedule drop on nftcalendar.io and rarity.tools
            </span>
          </h2>
        </div>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Launch</h1>
          <h2>⏳ May '22 ⌛️</h2>
          <br>
          <h2 style="font-weight: normal; line-height: 25px; text-align: left; color:#787c7e">
            🔓 Open WordList mint on <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> website
            <Br>
            🔓 Open Public mint on <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> website
            <br>
            💰 Crypto giveaways at mint milestones (through Chainlink VRF)
            <br>
            🗳 Begin snapshot voting system with HODLers voting on key &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;game decisions and added game features
            <br>
            📒 Open and build out <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> prize pool sponsorship schedule
          </h2>
        </div>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Game Time</h1>
          <h2>🎲 May - August '22 🎲</h2>
          <br>
          <h2 style="font-weight: normal; line-height: 25px; text-align: left; color:#787c7e">
            🧩 Open the official <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> game at <a href="/play"><span style="font-family: 'HODLE'; font-size: 22px; color:#787c7e; text-decoration: underline #787c7e">Play Hodle</span></a>
            <br>
            ✨ Reveal <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> metadata
            <br>
            🎨 Design <span style="font-family: 'HODLE'; font-size: 22px;">Hodler Merch</span> built around loungewear and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessories (HODLer discounts & exclusive HODLer-only items)
            <br>
            🌤 Launch <span style="font-family: 'HODLE'; font-size: 22px;">Daily Board</span> NFTs, where you can mint an NFT of your &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;daily Hodle results for free
          </h2>
        </div>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">The Hodle Ecosystem</h1>
          <h2>🟩 July - August '22 🟩</h2>
          <br>
          <h2 style="font-weight: normal; line-height: 25px; text-align: left; color:#787c7e">
            🤓 Free mint of 'Meet the Hodlers' PFP NFTs
            <br>
            🪙 Tokenization of <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> rewards + <span style="font-family: 'HODLE'; font-size: 22px;">$HODL</span> staking
          </h2>
        </div>
        <div class="content-div content-div-bottom">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Moar Hodle Pls</h1>
          <h2>🌙 End of '22 🌙</h2>
          <br>
          <h2 style="font-weight: normal; line-height: 25px; text-align: left; color:#787c7e">
            🚀 Launch at least one new S2E game
            <br>
            📮 HODLers will vote to launch one of a variety of game proposals &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in one of the most important snapshot votes to date
            <br>
            🎑 Update Roadmap with future deliverables
          </h2>
        </div>
      `;
    }
}
