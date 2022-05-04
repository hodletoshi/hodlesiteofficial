import AbstractView from "./AbstractView.js";


async function checkConnect() {
    var web3 = new Web3(Web3.givenProvider || 'ws:localhost:8545');

    const accounts = await web3.eth.getAccounts();

    if (accounts[0]) {
      $.post("https://us-central1-checkwordlist.cloudfunctions.net/getProof", {addr: accounts[0]}, function(result) {
        const res = result.generatedProof;

        if (res.length == 0) {
          document.getElementById('wallet-text').innerHTML = 'You are not on the WordList.';
          document.getElementById('wl-img').style.content = "url('/static/img/h-tile.png')";

        } else {
          document.getElementById('wallet-text').innerHTML = 'WordList spot confirmed!';
          document.getElementById('wl-img').style.content = "url('/static/img/w-tile.png')";
        }

        document.getElementById('connect-wallet-btn').style.backgroundColor = '#fd91ce';
        document.getElementById('connect-wallet-btn').innerHTML = accounts[0].substring(0, 5) + "..." + accounts[0].substring(accounts[0].length - 4, accounts[0].length);
      });

    } else {
      console.log("no wallets  connected yet.");
    }
}

async function walletConnect() {
  var web3 = new Web3(Web3.givenProvider || 'ws:localhost:8545');
  const req = await web3.eth.requestAccounts();

  if (req[0]) {

    // make api request, await response

    $.post("https://us-central1-checkwordlist.cloudfunctions.net/getProof", {addr: req[0]}, function(result) {
      const res = result.generatedProof;

      if (res.length == 0) {
        document.getElementById('wallet-text').innerHTML = 'You are not on the WordList.';
        document.getElementById('wl-img').style.content = "url('/static/img/h-tile.png')";

      } else {
        document.getElementById('wallet-text').innerHTML = 'WordList spot confirmed!';
        document.getElementById('wl-img').style.content = "url('/static/img/w-tile.png')";
      }

      document.getElementById('connect-wallet-btn').style.backgroundColor = '#fd91ce';
      document.getElementById('connect-wallet-btn').innerHTML = req[0].substring(0, 5) + "..." + req[0].substring(req[0].length - 4, req[0].length);
    });

  } else {
    console.log("error connecting wallet.");
  }
}



export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Check WordList");
    }

    async getHtml() {
      setTimeout(function() {
        document.getElementById('connect-wallet-btn').addEventListener('click', walletConnect);
        checkConnect();
      }, 100);

      return `
          <div class="mint-img-div" style="height: 80px;">
            <img class="mint-img" id="wl-img" style="content: url('/static/img/w-tile.png'); width: 50px; height: 50px; padding-bottom: 0px;"></img>
          </div>
          <div class="mint-text">
            <h1 class="top-title" style="margin-bottom: 40px; line-height: 35px;" id="wallet-text">Connect to check <span style="font-family: 'HODLE'; font-size: 35px;">WordList</span> status!</h1>
            <button class="tophome-btn" style="background-color: #fd91ce50; white-space: normal;" id="connect-wallet-btn">Connect Wallet</button>
          </div>
      `;
    }
}
