import AbstractView from "./AbstractView.js";

let guessedWords = [[]];
let availableSpace = 1;

let word = "wagmi";
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
    setTimeout(() => {
      console.log("GETTING COLOR");
      const letterId = firstLetterId + index;
      const letterEl = document.getElementById(letterId);

      letterEl.classList.add("flipin");
      const tileColor = getTileColor(letter, index);

      setTimeout(function() { letterEl.style = `background-color:${tileColor};border-color:${tileColor}` }, 250);
    }, interval * index);
  });

  guessedWordCount += 1;

  if (currentWord === word) {
    setTimeout(function() { window.alert("Congratulations!") }, 2000);
  }

  if (guessedWords.length === 6) {
    window.alert(`Sorry, you have no more guesses! The word is ${word}.`);
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

      return `
      <link rel="stylesheet" href="/static/css/game.css">
      <div id="container">
        <div id="game">
          <div id="board-container">
            <div id="board">
              <div class="square" id="1"></div>
              <div class="square" id="2"></div>
              <div class="square " id="3"></div>
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
              <button data-key="q">q</button>
              <button data-key="w">w</button>
              <button data-key="e">e</button>
              <button data-key="r">r</button>
              <button data-key="t">t</button>
              <button data-key="y">y</button>
              <button data-key="u">u</button>
              <button data-key="i">i</button>
              <button data-key="o">o</button>
              <button data-key="p">p</button>
            </div>
            <div class="keyboard-row">
              <div class="spacer-half"></div>
              <button data-key="a">a</button>
              <button data-key="s">s</button>
              <button data-key="d">d</button>
              <button data-key="f">f</button>
              <button data-key="g">g</button>
              <button data-key="h">h</button>
              <button data-key="j">j</button>
              <button data-key="k">k</button>
              <button data-key="l">l</button>
              <div class="spacer-half"></div>
            </div>
            <div class="keyboard-row">
              <button data-key="enter" class="wide-button">Enter</button>
              <button data-key="z">z</button>
              <button data-key="x">x</button>
              <button data-key="c">c</button>
              <button data-key="v">v</button>
              <button data-key="b">b</button>
              <button data-key="n">n</button>
              <button data-key="m">m</button>
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
