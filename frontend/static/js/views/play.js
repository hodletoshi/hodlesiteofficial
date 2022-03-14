import AbstractView from "./AbstractView.js";

let guessedWords = [[]];
let availableSpace = 1;

let word = "frens";
let guessedWordCount = 0;

var keys = null;

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
    return "rgb(58, 58, 60)";
  }

  const letterInThatPosition = word.charAt(index);
  const isCorrectPosition = letter === letterInThatPosition;

  if (isCorrectPosition) {
    return "rgb(83, 141, 78)";
  }

  return "rgb(181, 159, 59)";
}

function getShareCopy() {
  var returnStr = "";
  if (guessedWordCount > 5) {
    returnStr = `HODLE #1 X/5\n\n`;
  } else {
    returnStr = `HODLE #1 ${guessedWordCount}/5\n\n`;
  }

  for (var i = 1; i <= 25; i++) {
    const rawSquare = document.getElementById(`${i}`);

    if (rawSquare.innerHTML == "") {
      break;
    }

    if (rawSquare.style.backgroundColor == "rgb(58, 58, 60)") {
      // Black
      returnStr += "⬛";

    } else if (rawSquare.style.backgroundColor == "rgb(181, 159, 59)") {
      // Yellow
      returnStr += "🟨";

    } else {
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
    window.alert("Word must be 5 letters");
  }

  const currentWord = currentWordArr.join("");

  console.log(currentWord);

  const firstLetterId = guessedWordCount * 5 + 1;
  const interval = 300;
  currentWordArr.forEach((letter, index) => {
    const tileColor = getTileColor(letter, index);

    if (tileColor == "rgb(58, 58, 60)") {
      setTimeout(() => {
        document.querySelector(`#${letter}`).disabled = true;
        document.querySelector(`#${letter}`).style.backgroundColor = "#3a3a3c";
      }, 1700);
    }

    setTimeout(() => {
      console.log("GETTING COLOR");
      const letterId = firstLetterId + index;
      const letterEl = document.getElementById(letterId);

      letterEl.classList.add("flipin");
      setTimeout(function() { letterEl.style = `background-color:${tileColor};border-color:${tileColor}` }, 250);
    }, interval * index);
  });

  guessedWordCount += 1;

  if (currentWord === word) {
    const sharecopy = getShareCopy();

    if (setTimeout(function() { confirm("Congratulations! Press 'OK' to copy your board to your clipboard.") }, 2000) {
      navigator.clipboard.writeText(sharecopy);
    }
  }

  if (guessedWords.length === 6) {

    const sharecopy = getShareCopy();

    if (setTimeout(function() { confirm(`Sorry, you have no more guesses! The word is ${word}.\nPress 'OK' to copy your board to your clipboard.`) }, 2000) {
      navigator.clipboard.writeText(sharecopy);
    }
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
  const removedLetter = currentWordArr.pop();

  guessedWords[guessedWords.length - 1] = currentWordArr;

  const lastLetterEl = document.getElementById(String(availableSpace - 1));

  lastLetterEl.textContent = "";
  availableSpace = availableSpace - 1;
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


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Play");
    }

    async getHtml() {

      /*
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
      */

      setMyKeyDownListener();

      setTimeout(startFunc, 1000)

      document.querySelector('#hodle-footer').style.opacity = "0%";
      document.querySelector('#hodle-footer').style.height = "0px";

      return `
      <link rel="stylesheet" href="/static/css/game.css">
      <div id="container">
        <div id="game">
          <div id="board-container">
            <div id="board">
              <div class="square" id="1"></div>
              <div class="square" id="2"></div>
              <div class="square" id="3"></div>
              <div class="square" id="4"></div>
              <div class="square" id="5"></div>
              <div class="square" id="6"></div>
              <div class="square" id="7"></div>
              <div class="square" id="8"></div>
              <div class="square" id="9"></div>
              <div class="square" id="10"></div>
              <div class="square" id="11"></div>
              <div class="square" id="12"></div>
              <div class="square" id="13"></div>
              <div class="square" id="14"></div>
              <div class="square" id="15"></div>
              <div class="square" id="16"></div>
              <div class="square" id="17"></div>
              <div class="square" id="18"></div>
              <div class="square" id="19"></div>
              <div class="square" id="20"></div>
              <div class="square" id="21"></div>
              <div class="square" id="22"></div>
              <div class="square" id="23"></div>
              <div class="square" id="24"></div>
              <div class="square" id="25"></div>
            </div>
          </div>

          <div id="keyboard-container">
            <div class="keyboard-row">
              <button id="q" data-key="q">q</button>
              <button id="w" data-key="w">w</button>
              <button id="e" data-key="e">e</button>
              <button id="r" data-key="r">r</button>
              <button id="t" data-key="t">t</button>
              <button id="y" data-key="y">y</button>
              <button id="u" data-key="u">u</button>
              <button id="i" data-key="i">i</button>
              <button id="o" data-key="o">o</button>
              <button id="p" data-key="p">p</button>
            </div>
            <div class="keyboard-row">
              <div class="spacer-half"></div>
              <button id="a" data-key="a">a</button>
              <button id="s" data-key="s">s</button>
              <button id="d" data-key="d">d</button>
              <button id="f" data-key="f">f</button>
              <button id="g" data-key="g">g</button>
              <button id="h" data-key="h">h</button>
              <button id="j" data-key="j">j</button>
              <button id="k" data-key="k">k</button>
              <button id="l" data-key="l">l</button>
              <div class="spacer-half"></div>
            </div>
            <div class="keyboard-row">
              <button data-key="enter" class="wide-button">Enter</button>
              <button id="z" data-key="z">z</button>
              <button id="x" data-key="x">x</button>
              <button id="c" data-key="c">c</button>
              <button id="v" data-key="v">v</button>
              <button id="b" data-key="b">b</button>
              <button id="n" data-key="n">n</button>
              <button id="m" data-key="m">m</button>
              <button data-key="del" class="wide-button">Del</button>
            </div>
          </div>
        </div>
      </div>
      `;

        return `
            <div class="mint-img-div">
              <img class="play-img"></img>
            </div>
            <div class="mint-text">
              <h1 class="top-title">Oops! You need to own a <b>HODLE Board</b> to play <b>HODLE</b>.</h1>
              <h2 class="title-subheader">Join our <a href="https://discord.gg" target="_blank"><span style="text-decoration: underline; cursor: pointer;">Discord</span></a> to find out when the <b>HODLE Board</b> mint opens.</h2>
            </div>
        `;
    }
}
