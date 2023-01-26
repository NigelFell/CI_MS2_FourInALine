// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
  let newGameButton = document.getElementById("new-game");

  newGameButton.addEventListener("click", function() {
      alert("You clicked New Game!");
      resetGameBoard();
      updateWhosTurnNext();
  });

  let gameTable = document.getElementById("game-board");
  gameTable.addEventListener("click", gameBoardClick);
  gameTable.addEventListener("mouseover", gameBoardMouseover);
  gameTable.addEventListener("mouseout", gameBoardMouseout);

  resetGameBoard();
  updateWhosTurnNext();
});

function gameBoardClick(e) {
  let boardElement = e.target;
  let whosNextElement = document.getElementById('whos-next');

  if (boardElement.tagName === "TH" && whosNextElement.style.backgroundColor !== "green") {
    if (updateGameBoard(boardElement.cellIndex)) {
      if (whosNextElement.style.backgroundColor === "red") {
        whosNextElement.innerHTML = "Red Wins!";
      }
      else {
        whosNextElement.innerHTML = "Blue Wins!";
      }
      whosNextElement.style.backgroundColor = "green";
    }
  }
}

function gameBoardMouseover(e) {
  let boardElement = e.target;

  if (boardElement.tagName === "TH") {
    let gameTable = document.getElementById("game-board");
    let whosNextElement = document.getElementById('whos-next');
  
    if (whosNextElement.style.backgroundColor === "red") {
      gameTable.rows[0].cells[boardElement.cellIndex].innerHTML = "r";
    }
    else {
      gameTable.rows[0].cells[boardElement.cellIndex].innerHTML = "b";
    }
  }
}

function gameBoardMouseout(e) {
  let boardElement = e.target;

  if (boardElement.tagName === "TH") {
    let gameTable = document.getElementById("game-board");
    gameTable.rows[0].cells[boardElement.cellIndex].innerHTML = " ";
  }
}

function resetGameBoard() {
  gameBoard.initialise();

  let gameTable = document.getElementById("game-board");
  let tableRows = gameTable.rows;
  let headerRow = tableRows[0].cells;
  let cols = headerRow.length;

  for (let headerCell = 0; headerCell < cols; headerCell++) {
    headerRow[headerCell].innerHTML = " ";
  }

  for (let tableRow = 1; tableRow < tableRows.length; tableRow++) {
    for (let tableCell = 0; tableCell < cols; tableCell++) {
      tableRows[tableRow].cells[tableCell].innerHTML = "w";
    }
  }

}

function updateGameBoard(columnNum) {
  let gameTable = document.getElementById("game-board");
  let rowNum = gameBoard.dropCounter(columnNum);

  if (rowNum < 0) {
    alert("You clicked a column that was full!");
  }
  else {
    let whosNextElement = document.getElementById('whos-next');
  
    if (whosNextElement.style.backgroundColor === "red") {
      gameTable.rows[rowNum + 1].cells[columnNum].innerHTML = "r";
    }
    else {
      gameTable.rows[rowNum + 1].cells[columnNum].innerHTML = "b";
    }
    
    if (gameBoard.checkWinner(columnNum, rowNum)) {
      if (whosNextElement.style.backgroundColor === "red") {
        updateScores("red");
      }
      else {
        updateScores("blue");
      }
      return true;
    }
    else {
      updateWhosTurnNext();
    }
  }
  return false;
}

function updateWhosTurnNext() {
  let whosNextElement = document.getElementById('whos-next');
  
  if (whosNextElement.style.backgroundColor !== "red") {
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

        //let counter = { dropped: false, colour: "white" };
        column.push("white");
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

    if (column[0] !== "white") {
      return -1;
    }

    let rowNum = 5;
    while (column[rowNum] !== "white") {
      rowNum--;
    }

    //this.board[columnNum][rowNum].dropped = true;
    this.board[columnNum][rowNum] = this.nextGo;
    this.nextGo = this.nextGo === "red" ? "blue" : "red";
    return rowNum;
  },

  /**
   * checkWinner(column number, row number) funtion
   * Called after each players turn, returns true if the last counter dropped is the winner 
   * otherwise false
  */
  checkWinner: function(columnNum, rowNum) {
	  let column = this.board[columnNum];
	  let counterColour = column[rowNum];
	
    // Check for win in column
    if (rowNum <= 2) {
      for (let rowCount = 1; rowCount < 3; rowCount++) {
        if (column[rowNum + rowCount] !== counterColour) {
          break;
        }
        return true;
      }
    }

    // Check for win in row
    let rowWinCount = 0;
    for (let columnCount = 0; columnCount < 6; columnCount++) {
      if (this.board[columnCount][rowNum] === counterColour &&
          this.board[columnCount + 1][rowNum] === counterColour) {
        rowWinCount++;
        if (rowWinCount === 3) {
          return true;
        }
      }
      else {
        rowWinCount = 0;
      }
    }

	  // Check for win diagonal going right

//	startColumn = 	

	// if (columnNum === 0) {
	//     if (rowNum >= 3) {
	// 	for (let columnCount = columnNum + 1; columnCount < columnNum + 3; columnCount++) {
	// 	    	if (column[rowNum].colour !== this.board[columnNum][rowNum].colour) {
	// 		    break;
	// 		}
	// 	    }
	// 	}
	//     return true;
	//     }
	//     let columnCount = 1;
	//     for (let rowCount = 1
	// }

    return false;
  }
}