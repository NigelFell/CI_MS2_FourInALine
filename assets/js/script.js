// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
  let newGameButton = document.getElementById("new-game");

  newGameButton.addEventListener("click", function() {
      alert("You clicked New Game!");
  });

  let gameTable = document.getElementById("game-board");
  gameTable.addEventListener("click", gameBoardClick);
  gameTable.addEventListener("mouseover", gameBoardMouseover);
  gameTable.addEventListener("mouseout", gameBoardMouseout);

  resetGameBoard();
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
  gameBoard.initialise();

}

function updateGameBoard() {
    
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

function updateScores(update) {
  let redScore = document.getElementById('score-red');
  let blueScore = document.getElementById('score-blue');

  if (update === "reset") {
    redScore.textContent = "Red 0";
    blueScore.textContent = "Blue 0";
  }
  else if (update === "red") {
    let score = Number(redScore.textContent.split(" ")[1]);
    redScore.textContent = "Red " + ++score;
  }
  else if (update === "blue") {
    let score = Number(blueScore.textContent.split(" ")[1]);
    blueScore.textContent = "Blue " + ++score;
  }
}

let gameBoard = {
  nextGo: "red",
  board: [],

  /**
   * initialise funtion
   * Clears the game board ready for a new game
   * Creates 7 columns, each with 6 counters, adding each column to the board
  */
  initialise: function() {
    this.board = [];

    for (let rowNum = 0; rowNum < 7; rowNum++) {
      let column = [];

      for (let columnNum = 0; columnNum < 6; columnNum++) {

        let counter = { dropped: false, colour: "white" };
        column.push(counter);
      }

      this.board.push(column);
      }
  },

  /**
   * dropCounter(column number) funtion
   * Called on each players turn,
   * returns the row number 0 to 5 if the counter could be dropped, 
   * i.e. the column wasn't already full, otherwise -1
  */
  dropCounter: function(columnNum) {
    let column = this.board[columnNum];

    if (column[0].dropped) {
      return -1;
    }

    let rowNum = 5;
    while (column[rowNum].dropped) {
      rowNum--;
    }

    this.board[columnNum][rowNum].dropped = true;
    this.board[columnNum][rowNum].colour = this.nextGo;
    this.nextGo = this.nextGo === "red" ? "blue" : "red";
    return rowNum;
  },

  /**
   * checkWinner(column number, row number) funtion
   * Called after each players turn, returns true if the last counter dropped is the winner 
   * otherwise false
  */
  checkWinner: function(columnNum, rowNum) {

  }
}