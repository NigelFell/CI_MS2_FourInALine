// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
  let newGameButton = document.getElementById("new-game");

  newGameButton.addEventListener("click", function() {
      alert("You clicked New Game!");
  });

  let gameBoard = document.getElementById("game-board");
  gameBoard.addEventListener("click", gameBoardClick);
  gameBoard.addEventListener("mouseover", gameBoardMouseover);
  gameBoard.addEventListener("mouseout", gameBoardMouseout);

  updateWhosTurnNext("red");
});

function gameBoardClick(e) {
  let boardElement = e.target;

  if (boardElement.tagName === "TH") {
    console.log("Column " + boardElement.cellIndex + " clicked!");
  }
}

function gameBoardMouseover(e) {
  let boardElement = e.target;

  if (boardElement.tagName === "TH") {
    console.log("Mouse over column " + boardElement.cellIndex);
  }
}

function gameBoardMouseout(e) {
  let boardElement = e.target;

  if (boardElement.tagName === "TH") {
    console.log("Mouse out column " + boardElement.cellIndex);
  }
}

function resetGameBoard() {

}

function dropCounter() {
    
}

function updateWhosTurnNext(whosNext) {
  let whosNextElement = document.getElementById('whos-next');
  
  if (whosNext === "red") {
    whosNextElement.textContent = "Red's Turn Next";
    whosNextElement.style.backgroundColor = "red";
  }
  else {
    whosNextElement.textContent = "Blue's Turn Next";
    whosNextElement.style.backgroundColor = "blue";
  }
}

function updateScores() {

}
