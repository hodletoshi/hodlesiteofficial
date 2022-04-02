import AbstractView from "./AbstractView.js";

let guessedWords = [[]];
let availableSpace = 1;

let word = "hodle";
let guessedWordCount = 0;

var keys = null;

var theme = "Light";
var mode = "Light";

const theme_config = {
  // Theme Name: [Background Color, Tile Base Color, Unused Square Text Color, Keyboard tile base color, Keyboard text color, Background Image (optional), Background Garnish (optional)]
  'Light': ["#ffffff", "#d5dce0", "white", "#d5dce0", "black"],
  'Dark': ["#161616", "#262626", "white", "#818384", "white"],
  'Pastel Acorn': ["#fae4cc", "#ddb98d", "white", "#818384", "white", "pastel_acorn_bg.png"],
  'Pastel Aqua': ["#c8e7f1", "#91bcbb", "white", "#818384", "white", "pastel_aqua_bg.png"],
  'Pastel Cherry': ["#fdb6b6", "#ce596c", "white", "#818384", "white", "pastel_cherry_bg.png"],
  'Pastel Rose': ["#f8d5e8", "#df83ad", "white", "#818384", "white", "pastel_rose_bg.png"],
  'Pastel Galaxy': ["#bea6e0", "#9d83c1", "white", "#818384", "white", "pastel_galaxy_bg.png"],
  'Pastel Silver': ["#e0e0e0", "#cbcbcb", "white", "#818384", "white", "pastel_silver_bg.png"],
  'Pastel Gold': ["#fde67b", "#ceaa44", "white", "#818384", "white", "pastel_gold_bg.png"],
  'Ethereum': ["#8991b3", "#95a1d1", "white", "#d5dce0", "black"],
  'Bitcoin': ["#f79300", "#fca628", "white", "#818384", "white"],
  'Hint': ["#ffcb23", "#ffdd6e", "white", "#818384", "white"],
  'Key Lime Meringue': ["#ddeebf", "#feffc9", "#bfd39c", "#818384", "white"],
  'Platinum': ["#cbcac8", "#b0b1b1", "white", "#818384", "white"],
  'Quartz': ["#f2dcde", "#e3cacc", "white", "#818384", "white"],
  'Wrong': ["#595959", "#717171", "white", "#818384", "white"],
  'Clear Sky': ["#dff3fc", "#f8fdff", "#adcddb", "#818384", "white"],
  'Correct': ["#6dcf63", "#77e26c", "white", "#d5dce0", "black"],
  'Cream': ["#eeead1", "#ddd6ba", "white", "#818384", "white"],
  'Superlative Purple': ["#7c7ffc", "#d6dcff", "#847bfa", "#d5dce0", "black"],
  'Superlative Yellow': ["#fbec83", "#a4a3e9", "white", "#818384", "white"],
  'Superlative Pink': ["#ffd7ee", "#ee7fbf", "white", "#818384", "white"],
  'Superlative Blue': ["#54d4ec", "#fffad3", "#59daf6", "#d5dce0", "black"],
  'World of Green Purple': ["#3dcc99", "#bea1ff", "white", "#d5dce0", "Black"],
  'World of Purple Pink': ["#8c2986", "#8c2986", "white", "#d5dce0", "black"],
  'Purple Bean': ["#46416f", "#f5f6f3", "#46416f", "white", "black"],
  'Spirit Bean': ["#304476", "#f5f6f3", "white", "white", "black"],
  'Red Bean': ["#c61f3f", "#f5f6f3", "#c61f3f", "white", "#black"],
  'Chill Cat': ["#485add", "#92cff2", "white", "#92cff2", "white"],
  'Classy Cat': ["#f82b6b", "#fa6d99", "white", "#fa6d99", "white"],
  'Pastel X': ["#90aceb", "#e6f7fd", "#a1b0f1", "#d5dce0", "black"],
  'Minty Paradise': ["#d1fff3", "#71ffda", "white", "#d5dce0", "black"],
  'mf blue': ["#63d3ff", "#a5e5fe", "black", "#818384", "white"],
  'mf yellow': ["#ffe561", "#fdf4c5", "black", "#818384", "white"],
  'Army Ape': ["#727435", "#8f9156", "white", "#d5dce0", "black"],
  'Blue Ape': ["#a3e5f4", "#c9f0f9", "#3dd1f3", "#818384", "white"],
  'Turquoise Ape': ["#30e9b7", "#1ac99a", "white", "#818384", "white"],
  'Yellow Ape': ["#e4e6a8", "#c9ca9d", "white", "#818384", "white"],
  'Purple Ape': ["#6f5c70", "#7f767f", "white", "#d5dce0", "black"],
  'Boat Ape': ["#7a633f", "#e2c9a1", "white", "#d5dce0", "black"],
  'Shades Punk': ["#8b005c", "#ca7cb0", "white", "#d5dce0", "black", "shades_punk_bg.png"],
  'Bidding Punk': ["#8665ac", "#8000b7", "white", "#d5dce0", "black"],
  'Paper Hand Punk': ["#8c4f4c", "#a68685", "white", "#d5dce0", "black"],
  'HODLR Punk': ["#638497", "#cafdfc", "#638497", "#d5dce0", "black"]
};

const mode_config = {
  // Mode Name : [Incorrect, Hint, Correct]
  'Light': ["#787c7e", "#c9b659", "#6cad64"],
  'Dark': ["#464646", "#ba9215", "#2f9f4e"],
  '1997': ["#963898", "#f98500", "#60bc39"],
  'mfers': ["#ff6c78", "#ffb76f", "#b9ff6d"],
  'Pastel': ["#717171", "#de7a7a", "#6fd55a"],
  'High Contrast': ["#464646", "#f3763b", "#88bff9"],
  'Superlative': ["#fd8fce", "#f4dd5a", "#60e9b3"]
};


function updateMode() {
  const xColor = mode_config[mode][0];
  const hColor = mode_config[mode][1];
  const cColor = mode_config[mode][2];

  var xList = document.getElementsByClassName('square incorrect');
  for (var a = 0; a < xList.length; ++a) {
      xList[a].style.backgroundColor = xColor;
      xList[a].style.color = "white";
  }

  var hList = document.getElementsByClassName('square hint');
  for (var b = 0; b < hList.length; ++b) {
      hList[b].style.backgroundColor = hColor;
      hList[b].style.color = "white";
  }

  var cList = document.getElementsByClassName('square correct');
  for (var c = 0; c < cList.length; ++c) {
      cList[c].style.backgroundColor = cColor;
      cList[c].style.color = "white";
  }

  var keyList = document.getElementsByClassName('keyboard-key');
  for (var i = 0; i < keyList.length; ++i) {
    if (keyList[i].classList.contains('incorrect')) {
      keyList[i].style.backgroundColor = mode_config[mode][0];

    } else if (keyList[i].classList.contains('hint')) {
      keyList[i].style.backgroundColor = mode_config[mode][1];

    } else if (keyList[i].classList.contains('correct')) {
      keyList[i].style.backgroundColor = mode_config[mode][2];
    }
  }
}

function updateTheme() {
  var squareList = document.getElementsByClassName('square unused');
  for (var i = 0; i < squareList.length; ++i) {
    if (theme != "Spirit Bean") {
      squareList[i].style.backgroundColor = theme_config[theme][1];
      squareList[i].style.color = theme_config[theme][2];
      squareList[i].style.border = 'none';
      squareList[i].style.animation = "";

    } else {
      squareList[i].style.backgroundColor = '#ffffff00';
      squareList[i].style.color = 'white';
      squareList[i].style.border = '2px solid white';
      squareList[i].style.animation = "spirit-glow 4s infinite";
    }
  }

  var keyList = document.getElementsByClassName('keyboard-key');
  for (var i = 0; i < keyList.length; ++i) {
    keyList[i].style.backgroundColor = theme_config[theme][3];
    keyList[i].style.color = theme_config[theme][4];
  }

  if(typeof theme_config[theme][5] === 'undefined') {
    document.documentElement.style.backgroundImage = 'none';
    document.body.style.backgroundColor = theme_config[theme][0];

  } else {
    document.documentElement.style.backgroundImage = `url(static/img/${theme_config[theme][5]})`;
    document.body.style.backgroundColor = "#ffffff00";

    if (typeof theme_config[theme][6] === 'undefined') {
      document.getElementById('container').style.backgroundImage = 'none';

    } else {
      document.getElementById('container').style.backgroundImage = `url(../../static/img/${theme_config[theme][6]})`;
    }
  }
}


function getNewWord() {
  /*
  fetch(
    `https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=5&lettersMax=5`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "61c5e3986dmsh20c1bee95c2230dp18d1efjsn4668bbcfc1b3",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      word = res.word;
    })
    .catch((err) => {
      console.error(err);
    });
*/
    return 'hello';
}

function getCurrentWordArr() {
  const numberOfGuessedWords = guessedWords.length;
  return guessedWords[numberOfGuessedWords - 1];
}

function updateGuessedWords(letter) {
  const currentWordArr = getCurrentWordArr();

  if (currentWordArr && currentWordArr.length < 5) {
    currentWordArr.push(letter);

    const availableSpaceEl = document.getElementById(String(availableSpace));

    availableSpace = availableSpace + 1;
    availableSpaceEl.textContent = letter;
  }
}

function getTileColor(letter, index) {
  const isCorrectLetter = word.includes(letter);

  if (!isCorrectLetter) {
    return mode_config[mode][0];

    // return "rgb(58, 58, 60)";
  }

  const letterInThatPosition = word.charAt(index);
  const isCorrectPosition = letter === letterInThatPosition;

  if (isCorrectPosition) {
    return mode_config[mode][2];

    // return "rgb(83, 141, 78)";
  }

  return mode_config[mode][1];

  // return "rgb(181, 159, 59)";
}

function getShareCopy() {
  var returnStr = "";
  if (guessedWordCount > 5) {
    returnStr = `HODLE 1  X/5\n\n`;

  } else {
    returnStr = `HODLE 1  ${guessedWordCount}/5\n\n`;
  }

  for (var i = 1; i <= 25; i++) {
    const rawSquare = document.getElementById(`${i}`);

    if (rawSquare.innerHTML == "") {
      break;
    }

    if (rawSquare.classList.contains('incorrect')) {
      // Black
      returnStr += "⬛";

    } else if (rawSquare.classList.contains('hint')) {
      // Yellow
      returnStr += "🟨";

    } else if (rawSquare.classList.contains('correct')){
      // Green
      returnStr += "🟩";
    }

    if (i % 5 == 0) {
      returnStr += '\n';
    }
  }

  return returnStr;
}

function handleSubmitWord() {
  const currentWordArr = getCurrentWordArr();
  if (currentWordArr.length !== 5) {
    /*
    window.alert("Word must be 5 letters");
    */
    return;
  }

  const currentWord = currentWordArr.join("");

  console.log(currentWord);

  const firstLetterId = guessedWordCount * 5 + 1;
  const interval = 300;
  currentWordArr.forEach((letter, index) => {
    const tileColor = getTileColor(letter, index);

    const letterId = firstLetterId + index;
    const letterEl = document.getElementById(letterId);
    const keyEl = document.getElementById(letter.toLowerCase());

    if (tileColor == mode_config[mode][0]) {
      letterEl.classList.toggle("incorrect");
      keyEl.classList.toggle("incorrect");

      setTimeout(() => {
        document.querySelector(`#${letter}`).disabled = true;
        document.querySelector(`#${letter}`).style.backgroundColor = mode_config[mode][0];
      }, 1700);

    } else if (tileColor == mode_config[mode][1]) {
      letterEl.classList.toggle("hint");
      keyEl.classList.toggle("hint");

      setTimeout(() => {
        document.querySelector(`#${letter}`).style.backgroundColor = mode_config[mode][1];
      }, 1700);

    } else if (tileColor == mode_config[mode][2]) {
      letterEl.classList.toggle("correct");
      keyEl.classList.toggle("correct");

      setTimeout(() => {
        document.querySelector(`#${letter}`).style.backgroundColor = mode_config[mode][2];
      }, 1700);
    }

    setTimeout(() => {
      console.log("GETTING COLOR");

      letterEl.classList.add("flipin");
      setTimeout(function() { letterEl.style = `background-color:${tileColor};border-color:${tileColor}` }, 250);

      letterEl.classList.toggle("unused");
    }, interval * index);
  });

  guessedWordCount += 1;

  if (currentWord === word) {
    const sharecopy = getShareCopy();
    navigator.clipboard.writeText(sharecopy);

    currentWordArr.forEach((letter, index) => {
      const letterId = firstLetterId + index;
      const letterEl = document.getElementById(letterId);
      setTimeout(function() { letterEl.classList.toggle("bounce"); }, 1400 + (100 * index));
    });

    setTimeout(function() {
      confirm("Congratulations! Your board was copied to your clipboard.");
    }, 4000);
  }

  if (guessedWords.length === 6) {
    const sharecopy = getShareCopy();
    navigator.clipboard.writeText(sharecopy);

    setTimeout(function() {
      confirm(`Sorry, you have no more guesses! The word is ${word}.\nPress 'OK' to copy your board to your clipboard.`);
    }, 2000);
  }

  guessedWords.push([]);

  /*
  fetch(`https://wordsapiv1.p.rapidapi.com/words/${currentWord}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "61c5e3986dmsh20c1bee95c2230dp18d1efjsn4668bbcfc1b3",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw Error();
      }

      const firstLetterId = guessedWordCount * 5 + 1;
      const interval = 200;
      currentWordArr.forEach((letter, index) => {
        setTimeout(() => {
          const tileColor = getTileColor(letter, index);

          const letterId = firstLetterId + index;
          const letterEl = document.getElementById(letterId);
          letterEl.classList.add("animate__flipInX");
          letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
        }, interval * index);
      });

      guessedWordCount += 1;

      if (currentWord === word) {
        window.alert("Congratulations!");
      }

      if (guessedWords.length === 6) {
        window.alert(`Sorry, you have no more guesses! The word is ${word}.`);
      }

      guessedWords.push([]);
    })
    .catch(() => {
      window.alert("Word is not recognised!");
    });
    */
}

function createSquares() {
  const gameBoard = document.getElementById("board");

  for (let index = 0; index < 30; index++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("id", index + 1);
    gameBoard.appendChild(square);
  }
}

function handleDeleteLetter() {
  const currentWordArr = getCurrentWordArr();

  if (currentWordArr.length >= 1) {
    const removedLetter = currentWordArr.pop();

    console.log("GUESSED WORDS:");
    console.log(guessedWords);
    console.log(currentWordArr);

    guessedWords[guessedWords.length - 1] = currentWordArr;

    const lastLetterEl = document.getElementById(String(availableSpace - 1));

    lastLetterEl.textContent = "";
    availableSpace = availableSpace - 1;
  }
}

async function handleStart() {
  console.log("HERE");

  const gameBoard = document.getElementById("board");

  for (let index = 0; index < 30; index++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("id", index + 1);
    gameBoard.appendChild(square);
  }
}


function startFunc() {
  console.log("HERE");

  keys = document.querySelectorAll(".keyboard-row button");

  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const letter = target.getAttribute("data-key");

      if (letter === "enter") {
        handleSubmitWord();
        return;
      }

      if (letter === "del") {
        handleDeleteLetter();
        return;
      }

      updateGuessedWords(letter);
    };
  }
}

function setMyKeyDownListener() {
    window.addEventListener(
      "keydown",
      function(event) {
        if ((event.key >= 'a' && event.key <= 'z') || event.key == "Enter" || event.key == "Backspace") {
          MyFunction(event.key)
        }
      }
    )
}

function MyFunction (the_Key) {
    if (the_Key == "Enter") {
      handleSubmitWord();
    } else if (the_Key == "Backspace") {
      handleDeleteLetter();
    } else {
      updateGuessedWords(the_Key);
    }
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("overlaySettings").style.left = "0";

  document.getElementById("settings-closebtn").addEventListener ("click", closeNav, false);
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("overlaySettings").style.left = "-105vw";
}

function addSettingsButton() {
  const headerEl = document.querySelector('.headernav');
  headerEl.innerHTML = headerEl.innerHTML + "<button id='settings-button' style='height: 30px; float: right; margin-right: 70px; margin-top: 5px;'>SETTINGS</button>";

  document.getElementById("settings-button").addEventListener ("click", openNav, false);
}


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Try HODLE");
    }

    async getHtml() {
      addSettingsButton();

      setMyKeyDownListener();
      setTimeout(startFunc, 1000)

      document.querySelector('#hodle-footer').style.opacity = "0%";
      document.querySelector('#hodle-footer').style.height = "0px";
      document.querySelector('#hodle-footer').style.overflow = "hidden";

      setTimeout(function() {
        document.querySelector('#fsoverlay').remove();

        var themes = document.theme_form.theme_group;
        var prev_theme = null;
        for (var i = 0; i < themes.length; i++) {
            themes[i].addEventListener('change', function() {
                if (this !== prev_theme) {
                    prev_theme = this;
                    theme = this.value;
                    updateTheme();
                    updateMode();
                }
            });
        }

        var modes = document.mode_form.mode_group;
        var prev_mode = null;
        for (var i = 0; i < modes.length; i++) {
            modes[i].addEventListener('change', function() {
                if (this !== prev_mode) {
                    prev_mode = this;
                    mode = this.value;
                    updateMode();
                }
            });
        }
      }, 2000);

      return `
      <link rel="stylesheet" href="/static/css/game.css">

      <!-- Full screen loader overlay -->
      <div id="fsoverlay" style="width: 100vw; height: 100vw; background-color: #161616; z-index: 9000; position: fixed;"></div>

      <!-- The overlay -->
      <div id="overlaySettings" class="settings-overlay">

        <!-- Button to close the overlay navigation -->
        <div class="headernav" id="settingsheadernav">
          <img src="/static/img/settings-tiles.png" style="text-align: center; height: 40px;"></img>
          <a class="settings-left-nav"><img src="/static/img/wallet-icon.svg" style="height: 20px;"></img></a>
          <a href="javascript:void(0)" id="settings-closebtn" class="settings-right-nav"><img src="/static/img/wallet-icon.svg" style="height: 20px;"></img></a>
        </div>

        <!-- Overlay content -->
        <div class="settings-overlay-content">
          <h1>Theme</h1>
            <form name="theme_form">
              <input type="radio" id="theme-dark" name="theme_group" value="Dark" checked="checked">
              <label for="theme-dark">Dark</label><br>
              <input type="radio" id="theme-light" name="theme_group" value="Light">
              <label for="theme-light">Light</label><br>
              <input type="radio" id="theme-pastel-acorn" name="theme_group" value="Pastel Acorn">
              <label for="theme-pastel-acorn">Pastel Acorn</label><br>
              <input type="radio" id="theme-pastel-aqua" name="theme_group" value="Pastel Aqua">
              <label for="theme-pastel-aqua">Pastel Aqua</label><br>
              <input type="radio" id="theme-pastel-cherry" name="theme_group" value="Pastel Cherry">
              <label for="theme-pastel-cherry">Pastel Cherry</label><br>
              <input type="radio" id="theme-pastel-rose" name="theme_group" value="Pastel Rose">
              <label for="theme-pastel-rose">Pastel Rose</label><br>
              <input type="radio" id="theme-pastel-galaxy" name="theme_group" value="Pastel Galaxy">
              <label for="theme-pastel-galaxy">Pastel Galaxy</label><br>
              <input type="radio" id="theme-pastel-silver" name="theme_group" value="Pastel Silver">
              <label for="theme-pastel-silver">Pastel Silver</label><br>
              <input type="radio" id="theme-pastel-gold" name="theme_group" value="Pastel Gold">
              <label for="theme-pastel-gold">Pastel Gold</label><br>
              <input type="radio" id="theme-ethereum" name="theme_group" value="Ethereum">
              <label for="theme-ethereum">Ethereum</label><br>
              <input type="radio" id="theme-bitcoin" name="theme_group" value="Bitcoin">
              <label for="theme-bitcoin">Bitcoin</label><br>
              <input type="radio" id="theme-hint" name="theme_group" value="Hint">
              <label for="theme-hint">Hint</label><br>
              <input type="radio" id="theme-keylime" name="theme_group" value="Key Lime Meringue">
              <label for="theme-keylime">Key Lime Meringue</label><br>
              <input type="radio" id="theme-platinum" name="theme_group" value="Platinum">
              <label for="theme-platinum">Platinum</label><br>
              <input type="radio" id="theme-quartz" name="theme_group" value="Quartz">
              <label for="theme-quartz">Quartz</label><br>
              <input type="radio" id="theme-wrong" name="theme_group" value="Wrong">
              <label for="theme-wrong">Wrong</label><br>
              <input type="radio" id="theme-clearsky" name="theme_group" value="Clear Sky">
              <label for="theme-clearsky">Clear Sky</label><br>
              <input type="radio" id="theme-correct" name="theme_group" value="Correct">
              <label for="theme-correct">Correct</label><br>
              <input type="radio" id="theme-cream" name="theme_group" value="Cream">
              <label for="theme-cream">Cream</label><br>
              <input type="radio" id="theme-sl-purple" name="theme_group" value="Superlative Purple">
              <label for="theme-sl-purple">Superlative Purple</label><br>
              <input type="radio" id="theme-sl-yellow" name="theme_group" value="Superlative Yellow">
              <label for="theme-sl-yellow">Superlative Yellow</label><br>
              <input type="radio" id="theme-sl-pink" name="theme_group" value="Superlative Pink">
              <label for="theme-sl-pink">Superlative Pink</label><br>
              <input type="radio" id="theme-sl-blue" name="theme_group" value="Superlative Blue">
              <label for="theme-sl-blue">Superlative Blue</label><br>
              <input type="radio" id="theme-wo-gp" name="theme_group" value="World of Green Purple">
              <label for="theme-wo-gp">World of Green Purple</label><br>
              <input type="radio" id="theme-wo-pp" name="theme_group" value="World of Purple Pink">
              <label for="theme-wo-pp">World of Purple Pink</label><br>
              <input type="radio" id="theme-purple-bean" name="theme_group" value="Purple Bean">
              <label for="theme-purple-bean">Purple Bean</label><br>
              <input type="radio" id="theme-spirit-bean" name="theme_group" value="Spirit Bean">
              <label for="theme-spirit-bean">Spirit Bean</label><br>
              <input type="radio" id="theme-red-bean" name="theme_group" value="Red Bean">
              <label for="theme-red-bean">Red Bean</label><br>
              <input type="radio" id="theme-chill-cat" name="theme_group" value="Chill Cat">
              <label for="theme-chill-cat">Chill Cat</label><br>
              <input type="radio" id="theme-classy-cat" name="theme_group" value="Classy Cat">
              <label for="theme-classy-cat">Classy Cat</label><br>
              <input type="radio" id="theme-pastelx" name="theme_group" value="Pastel X">
              <label for="theme-pastelx">Pastel X</label><br>
              <input type="radio" id="theme-mintyparadise" name="theme_group" value="Minty Paradise">
              <label for="theme-mintyparadise">Minty Paradise</label><br>
              <input type="radio" id="theme-mfblue" name="theme_group" value="mf blue">
              <label for="theme-mfblue">mf blue</label><br>
              <input type="radio" id="theme-mfyellow" name="theme_group" value="mf yellow">
              <label for="theme-mfyellow">mf yellow</label><br>
              <input type="radio" id="theme-army-ape" name="theme_group" value="Army Ape">
              <label for="theme-army-ape">Army Ape</label><br>
              <input type="radio" id="theme-blue-ape" name="theme_group" value="Blue Ape">
              <label for="theme-blue-ape">Blue Ape</label><br>
              <input type="radio" id="theme-tur-ape" name="theme_group" value="Turquoise Ape">
              <label for="theme-tur-ape">Turquoise Ape</label><br>
              <input type="radio" id="theme-yellow-ape" name="theme_group" value="Yellow Ape">
              <label for="theme-yellow-ape">Yellow Ape</label><br>
              <input type="radio" id="theme-purp-ape" name="theme_group" value="Purple Ape">
              <label for="theme-purp-ape">Purple Ape</label><br>
              <input type="radio" id="theme-boat-ape" name="theme_group" value="Boat Ape">
              <label for="theme-boat-ape">Boat Ape</label><br>
              <input type="radio" id="theme-sha-punk" name="theme_group" value="Shades Punk">
              <label for="theme-sha-punk">Shades Punk</label><br>
              <input type="radio" id="theme-bid-punk" name="theme_group" value="Bidding Punk">
              <label for="theme-bid-punk">Bidding Punk</label><br>
              <input type="radio" id="theme-ph-punk" name="theme_group" value="Paper Hand Punk">
              <label for="theme-ph-punk">Paper Hand Punk</label><br>
              <input type="radio" id="theme-hodl-punk" name="theme_group" value="HODLR Punk">
              <label for="theme-hodl-punk">HODLR Punk</label><br>
            </form>
          <br>
          <h1>Mode</h1>
            <form name="mode_form">
              <input type="radio" id="mode-dark" name="mode_group" value="Dark" checked="checked">
              <label for="mode-dark">Dark</label><br>
              <input type="radio" id="mode-light" name="mode_group" value="Light">
              <label for="mode-light">Light</label><br>
              <input type="radio" id="mode-pastel" name="mode_group" value="Pastel">
              <label for="mode-pastel">Pastel</label><br>
              <input type="radio" id="mode-mfers" name="mode_group" value="mfers">
              <label for="mode-mfers">mfers</label><br>
              <input type="radio" id="mode-nsev" name="mode_group" value="1997">
              <label for="mode-nsev">1997</label><br>
              <input type="radio" id="mode-sl" name="mode_group" value="Superlative">
              <label for="mode-sl">Superlative</label><br>
            </form>
        </div>
      </div>

      <div id="container">
        <div id="game">
          <div id="board-container">
            <div id="board">
              <div class="square unused" id="1"></div>
              <div class="square unused" id="2"></div>
              <div class="square unused" id="3"></div>
              <div class="square unused" id="4"></div>
              <div class="square unused" id="5"></div>
              <div class="square unused" id="6"></div>
              <div class="square unused" id="7"></div>
              <div class="square unused" id="8"></div>
              <div class="square unused" id="9"></div>
              <div class="square unused" id="10"></div>
              <div class="square unused" id="11"></div>
              <div class="square unused" id="12"></div>
              <div class="square unused" id="13"></div>
              <div class="square unused" id="14"></div>
              <div class="square unused" id="15"></div>
              <div class="square unused" id="16"></div>
              <div class="square unused" id="17"></div>
              <div class="square unused" id="18"></div>
              <div class="square unused" id="19"></div>
              <div class="square unused" id="20"></div>
              <div class="square unused" id="21"></div>
              <div class="square unused" id="22"></div>
              <div class="square unused" id="23"></div>
              <div class="square unused" id="24"></div>
              <div class="square unused" id="25"></div>
            </div>
          </div>

          <div id="keyboard-container">
            <div class="keyboard-row">
              <button class="keyboard-key" id="q" data-key="q">q</button>
              <button class="keyboard-key" id="w" data-key="w">w</button>
              <button class="keyboard-key" id="e" data-key="e">e</button>
              <button class="keyboard-key" id="r" data-key="r">r</button>
              <button class="keyboard-key" id="t" data-key="t">t</button>
              <button class="keyboard-key" id="y" data-key="y">y</button>
              <button class="keyboard-key" id="u" data-key="u">u</button>
              <button class="keyboard-key" id="i" data-key="i">i</button>
              <button class="keyboard-key" id="o" data-key="o">o</button>
              <button class="keyboard-key" id="p" data-key="p">p</button>
            </div>
            <div class="keyboard-row">
              <div class="spacer-half"></div>
              <button class="keyboard-key" id="a" data-key="a">a</button>
              <button class="keyboard-key" id="s" data-key="s">s</button>
              <button class="keyboard-key" id="d" data-key="d">d</button>
              <button class="keyboard-key" id="f" data-key="f">f</button>
              <button class="keyboard-key" id="g" data-key="g">g</button>
              <button class="keyboard-key" id="h" data-key="h">h</button>
              <button class="keyboard-key" id="j" data-key="j">j</button>
              <button class="keyboard-key" id="k" data-key="k">k</button>
              <button class="keyboard-key" id="l" data-key="l">l</button>
              <div class="spacer-half"></div>
            </div>
            <div class="keyboard-row">
              <button class="keyboard-key" data-key="enter" class="wide-button">Enter</button>
              <button class="keyboard-key" id="z" data-key="z">z</button>
              <button class="keyboard-key" id="x" data-key="x">x</button>
              <button class="keyboard-key" id="c" data-key="c">c</button>
              <button class="keyboard-key" id="v" data-key="v">v</button>
              <button class="keyboard-key" id="b" data-key="b">b</button>
              <button class="keyboard-key" id="n" data-key="n">n</button>
              <button class="keyboard-key" id="m" data-key="m">m</button>
              <button class="keyboard-key" data-key="del" class="wide-button">Del</button>
            </div>
          </div>
        </div>
      </div>
      `;
    }
}
