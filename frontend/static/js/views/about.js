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
          What is <span style="font-family:'HODLE'; font-size: 40px">Hodle</span>?</b>
          <br>
          <br>
          <img src="/static/img/hodle_guessing.gif" style="width: 350px; overflow:hidden;"></img>
        </h1>
        <h2 class="title-subheader blurred" style="font-weight: normal; width: 90vw; margin: auto; margin-bottom: 40px;">
          <span style="font-family: 'HODLE'; font-size: 25px;">Hodle</span> is Web3's daily NFT and crypto game.
          <br><br>
          If you can guess the <span style="font-family: 'HODLE'; font-size: 25px;">Hodle</span> in five tries, you are entered into the daily rewards pool.
          <br>
          <br>
          Unlike every P2E project in the space, <span style="font-family: 'HODLE'; font-size: 25px;">Hodle</span> is the first <b>Solve-2-Earn</b> game.
        </h2>
        <div class="content-div content-div-bottom">
          <h2 style="font-weight: normal; line-height: 20px;">
            <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span> is an upcoming P2E (S2E) NFT word game where you can win daily prizes of both cash (ETH) and NFTs.
            <br><br>
            You have five tries to guess a five-letter word related to cryptocurrencies and NFTs. You receive feedback on each guess in the shape of different coloured tiles.
            <br><br>
            Only <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> NFT owners can earn rewards from <span style="font-family: 'HODLE'; font-size: 22px;">Hodle</span>.
            <br>
            Learn more about the <span style="font-family: 'HODLE'; font-size: 22px;">Hodle Board</span> NFT <a href="/attributes">here</a>.
            <br><br>
            Join our frens in the <span style="text-decoration: underline; cursor: pointer;" onclick="window.open('https://discord.com/invite/PZbZ4yeTrt')">Discord</span> community and follow us on <span style="text-decoration: underline; cursor: pointer;" onclick="window.open('https://twitter.com/hodlenftgame')">Twitter</span> for the latest updates!
          </h2>
        </div>
      `;
    }
}
