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
          Meet <b>Nifty Games</b>
        </h1>
        <h2 class="title-subheader" style="font-weight: normal; width: 90vw; margin: auto; margin-bottom: 40px;">
          Meet the rockstars that push <span style="font-family:'HODLE'; font-size: 25px;">Hodle</span> to new heights.
          <br>
          Every. Single. Day.
          <br>
          <br>
          <span style="font-size: 17px"><span style="font-family:'HODLE'; font-size: 25px;">Hodle</span> is wholly owned and operated by Nifty Games Ltd.</span>
        </h2>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Hodletoshi Yolomoto (Zach)</h1>
          <h2>Lead Dev, Artist, and DJ</h2>
          <img src="/static/img/team_pfps/hodletoshi.png" width="200px" style="border-radius: 10px;"></img>
          <br>
          <h2 style="font-weight: normal; line-height: 25px;">
            Hodletoshi is the name used by the presumed pseudonymous person who designed HODLE Board, and created and deployed HODLE's original game.
            <br>
            <br>
            <b>Translation:</b> Hodle's Lead Dev & Artist.<br>Part-time model (clearly) and full-time degen.
            <br>Double major in Software Engineering & Business.
            <br>
            <br>
            <span style="opacity: 0.5">📍 London, ON</span>
          </h2>
        </div>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">WordMaster</h1>
          <h2>Product Lead & Master of Words</h2>
          <img src="/static/img/team_pfps/wordmaster.png" width="200px" style="border-radius: 10px;"></img>
          <br>
          <h2 style="font-weight: normal; line-height: 25px;">
            International Business Grad & founder of an IMEX corporation providing 🇨🇳 companies & mainland investors with industry-leading importation services.
            <br>
            <br>
            <b>Favorite NFT Memory:</b> Selling a Steph Curry moment for over $40K USD.
            <br>
            <br>
            <span style="opacity: 0.5">📍 ON, Canada</span>
          </h2>
        </div>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Enigma (Rick)</h1>
          <h2>Community Manager</h2>
          <img src="/static/img/team_pfps/enigma.png" width="200px" style="border-radius: 10px;"></img>
          <br>
          <h2 style="font-weight: normal; line-height: 25px;">
            Economics Grad and major collectibles nerd. Began investing in crypto markets in 2018 and jumped headfirst into NFTs in mid-2020.
            <br>
            <br>
            <b>Bullish on:</b> Hodle, MEE6, Veve, and $ETH.
            <br>
            <br>
            <span style="opacity: 0.5">📍 Montreal, QC</span>
          </h2>
        </div>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Diesel (James)</h1>
          <h2>Community Manager</h2>
          <img src="/static/img/team_pfps/diesel.png" width="200px" style="border-radius: 10px;"></img>
          <br>
          <h2 style="font-weight: normal; line-height: 25px;">
            Computer Programming Grad. Introduced to crypto markets in 2018 by a customer who has been mining for over 10 years now.
            <br>
            <br>
            Self-proclaimed <b>"Friendly Grandpa"</b> of the community.<br>Always here to help y'all.
            <br>
            <br>
            <span style="opacity: 0.5">📍 Ohio, USA</span>
          </h2>
        </div>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Ethereum Explorer</h1>
          <h2>Collab Manager</h2>
          <img src="/static/img/team_pfps/explorer.png" width="200px" style="border-radius: 10px;"></img>
          <br>
          <h2 style="font-weight: normal; line-height: 25px;">
            Bio Coming Soon...
            <br>
            <br>
            <span style="opacity: 0.5">📍 Toronto, ON</span>
          </h2>
        </div>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Spacey</h1>
          <h2>Community Team</h2>
          <img src="/static/img/team_pfps/spacey.png" width="200px" style="border-radius: 10px;"></img>
          <br>
          <h2 style="font-weight: normal; line-height: 25px;">
            Bio Coming Soon...
            <br>
            <br>
            <span style="opacity: 0.5">📍 ON, Canada</span>
          </h2>
        </div>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Ben</h1>
          <h2>Moderator</h2>
          <img src="/static/img/team_pfps/ben.png" width="200px" style="border-radius: 10px;"></img>
          <br>
          <h2 style="font-weight: normal; line-height: 25px;">
            Bio Coming Soon...
            <br>
            <br>
            <span style="opacity: 0.5">📍 Malaga, ESP</span>
          </h2>
        </div>
        <div class="content-div">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Lord Robin (Robin)</h1>
          <h2>Moderator</h2>
          <img src="/static/img/team_pfps/robin.png" width="200px" style="border-radius: 10px;"></img>
          <br>
          <h2 style="font-weight: normal; line-height: 25px;">
            Bio Coming Soon...
            <br>
            <br>
            <span style="opacity: 0.5">📍 United Kingdom</span>
          </h2>
        </div>
        <div class="content-div content-div-bottom">
          <h1 style="font-family: 'HODLE'; font-size: 25px; letter-spacing: 1px;">Lin</h1>
          <h2>PFP Artist</h2>
          <img src="/static/img/team_pfps/lin_mth.png" width="200px" style="border-radius: 10px;"></img>
          <br>
          <h2 style="font-weight: normal; line-height: 25px;">
            Bio Coming Soon...
            <br>
            <br>
            <span style="opacity: 0.5">📍 Taipei, TW</span>
          </h2>
        </div>
      `;
    }
}
