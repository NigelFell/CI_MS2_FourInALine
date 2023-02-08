// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// Then build the game table, reset the game board and update who's next
document.addEventListener("DOMContentLoaded", function() {
  let newGameButton = document.getElementById("new-game");

  newGameButton.addEventListener("click", function() {
    let whosNextElement = document.getElementById('whos-next');
    if (whosNextElement.style.backgroundColor !== "green") {
      if (!confirm("Please confirm you want to reset this unfinished game?")) {
        return;
      }
    }
    resetGameBoard();
    updateWhosTurnNext();
  });

  let gameTable = document.getElementById("game-board");
  gameTable.addEventListener("click", gameBoardClick);
  gameTable.addEventListener("mouseover", gameBoardMouseover);
  gameTable.addEventListener("mouseout", gameBoardMouseout);

  buildGameTable();
  resetGameBoard();
  updateWhosTurnNext();
});

/**
 * gameBoardClick(event) funtion
 * Handle game table header mouse click -
 * "drop" a counter, update the game board and check for a winner...
*/
function gameBoardClick(e) {
  let boardElement = e.target;
  let currentTarget = e.currentTarget;

  // If the target was a counter get it's parent
  if (boardElement.tagName !== "TH" && currentTarget.tagName === "TABLE") {
    boardElement = boardElement.parentNode;
  }

  let whosNextElement = document.getElementById('whos-next');

  if (boardElement.tagName === "TH") {
    if (whosNextElement.style.backgroundColor === "green") {
      alert(whosNextElement.textContent.split(" ")[0] + " has won, please start a New Game!");
    }
    else {
      if (updateGameBoard(boardElement.cellIndex)) {
        if (whosNextElement.style.backgroundColor === "red") {
          whosNextElement.innerHTML = "Red Wins!";
        }
        else {
          whosNextElement.innerHTML = "Blue Wins!";
        }
        whosNextElement.style.backgroundColor = "green";
      }
      else {
        gameBoardMouseover(e);
      }
    }
  }
}

// Used to detect if the mouse moving over the counter in the same cell
// in gameBoardMouseout
let currentElement = null;

/**
 * gameBoardMouseover(event) funtion
 * Show a counter in the correct game table header column
*/
function gameBoardMouseover(e) {
  let boardElement = e.target;
  let currentTarget = e.currentTarget;

  // If the target was a counter get it's parent
  if (boardElement.tagName !== "TH" && currentTarget.tagName === "TABLE") {
    boardElement = boardElement.parentNode;
  }

  if (boardElement.tagName === "TH") {
    let gameTable = document.getElementById("game-board");
    let whosNextElement = document.getElementById('whos-next');
    let counters = gameTable.getElementsByClassName("counter");
  
    if (whosNextElement.style.backgroundColor === "red") {
      counters[boardElement.cellIndex].style.backgroundColor = "red";
    }
    else {
      counters[boardElement.cellIndex].style.backgroundColor = "blue";
    }

    // Make sure all the other headings are cleared
    for (let col = 0; col < 7; col++) {
      if (col !== boardElement.cellIndex) {
        counters[col].style.backgroundColor = "white";
      }
    }

    currentElement = boardElement;
  }
}

/**
 * gameBoardMouseout(event) funtion
 * Hide a counter in the correct game table header column
*/
function gameBoardMouseout(e) {
  let boardElement = e.target;

  // Is the mouse moving over the counter in the same cell?
  let relatedTarget = e.relatedTarget;
  if (relatedTarget.parentNode == currentElement) return;

  if (boardElement.tagName === "TH") {
    let gameTable = document.getElementById("game-board");
    let counters = gameTable.getElementsByClassName("counter");

    counters[boardElement.cellIndex].style.backgroundColor = "white";
  }
}

/**
 * buildGameTable() funtion
 * Build the HTML to create the game table
*/
function buildGameTable() {
  let gameTable = document.getElementById("game-board");

  let tableHtml = `
    <thead>
    </thead>
    <tbody>
    </tbody>
  `;
  gameTable.innerHTML= tableHtml;
  
  let theadHtml = `
    <tr>  
  `;
  for (let col = 0; col < 7; col++) {
    theadHtml += `
        <th><span class="counter"></span></th>
    `;
  }
  theadHtml += `
    </tr>  
  `;
  let thead = gameTable.getElementsByTagName('thead')[0];
  thead.innerHTML = theadHtml;

  let tbodyHtml = '';
  for (let row = 0; row < 6; row++) {
    tbodyHtml += `
      <tr>  
    `;
    for (let col = 0; col < 7; col++) {
      tbodyHtml += `
          <td><span class="counter"></span></td>
      `;
    }
    tbodyHtml += `
      </tr>  
    `;
  }
  let tbody = gameTable.getElementsByTagName('tbody')[0];
  tbody.innerHTML = tbodyHtml;
}

/**
 * resetGameBoard() funtion
 * Initialise the game board object and clear the game board table
*/
function resetGameBoard() {
  gameBoard.initialise();

  let gameTable = document.getElementById("game-board");
  let counters = gameTable.getElementsByClassName("counter");

  for (let counter of counters) {
    counter.style.backgroundColor = "white";
  }
}

/**
 * updateGameBoard(column number) funtion
 * Drops a counter in the passed game table column,
 * if the column is full alerts the user otherwise
 * shows the counter in the game table and checks for a winner
 * Returns true if there is a winner and updates the scores
 * otherwise false and updates who's turn next
*/
function updateGameBoard(columnNum) {
  let gameTable = document.getElementById("game-board");
  let rowNum = gameBoard.dropCounter(columnNum);

  if (rowNum < 0) {
    alert("Sorry this column is full!");
  }
  else {
    let whosNextElement = document.getElementById('whos-next');
    let counters = gameTable.getElementsByClassName("counter");
    
    if (whosNextElement.style.backgroundColor === "red") {
      counters[((rowNum + 1) * 7) + columnNum].style.backgroundColor = "red";
    }
    else {
      counters[((rowNum + 1) * 7) + columnNum].style.backgroundColor = "blue";
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

/**
 * updateWhosTurnNext() funtion
 * Updates the who's next text element
*/
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

/**
 * updateScores(update type) funtion
 * Updates the score red or blue text elements,
 * depending on the update type "red" or "blue"
 * If the update type is "reset" set both to 0
*/
function updateScores(update) {
  let redScore = document.getElementById('score-red');
  let blueScore = document.getElementById('score-blue');

  if (update === "reset") {
    redScore.textContent = "Red 0";
    blueScore.textContent = "Blue 0";
  }
  else if (update === "red") {
    let score = Number(redScore.textContent.split(" ")[1]);
    redScore.textContent = "Red " + (++score);
  }
  else if (update === "blue") {
    let score = Number(blueScore.textContent.split(" ")[1]);
    blueScore.textContent = "Blue " + (++score);
  }
}

/**
 * gameBoard object
 * Contains the data structure for the game board storage,
 * functions to manipulate that storage and algorithm to check for a winner
*/
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

    this.board[columnNum][rowNum] = this.nextGo;
    this.nextGo = this.nextGo === "red" ? "blue" : "red";
    return rowNum;
  },

  /**
   * checkWinner(column number, row number) funtion
   * Called after each players turn,
   * returns true if the last counter dropped is the winner 
   * otherwise false
  */
  checkWinner: function(columnNum, rowNum) {
	  let column = this.board[columnNum];
	  let counterColour = column[rowNum];
	
    // Check for win in column
    if (rowNum <= 2) {
      for (let rowCount = 1; rowCount < 4; rowCount++) {
        if (column[rowNum + rowCount] !== counterColour) {
          break;
        }
        if (rowCount === 3) {
          console.log("Win in column!");
          return true;
        }
      }
    }

    // Check for win in row
    let winCount = 0;
    for (let columnCount = 0; columnCount < 6; columnCount++) {
      if (this.board[columnCount][rowNum] === counterColour &&
          this.board[columnCount + 1][rowNum] === counterColour) {
        winCount++;
        if (winCount === 3) {
          console.log("Win in row!");
          return true;
        }
      }
      else {
        winCount = 0;
      }
    }

	  // Check for win diagonal going right
    let startRow = columnNum + rowNum > 5 ? 5 : columnNum + rowNum;
    let startCol = columnNum + rowNum < 5 ? 0 : columnNum + rowNum - 5;
    // console.log("Check diagonal going right " + startCol + " / " + startRow);
    winCount = 0;

    for (let nextCount = 0; nextCount < 6; nextCount++) {
      let nextCol = startCol + nextCount + 1;
      let nextRow = (startRow - nextCount) - 1;
      
      if (nextCol > 6 || nextRow < 0) {
        break;
      }
      
      if (this.board[startCol + nextCount][startRow - nextCount] === counterColour &&
          this.board[nextCol][nextRow] === counterColour) {
        winCount++;
        if (winCount === 3) {
          console.log("Win in diagonal going right!");
          return true;
        }
      }
      else {
        winCount = 0;
      }
    }

	  // Check for win diagonal going left
    startRow = (6 - columnNum) + rowNum > 5 ? 5 : (6 - columnNum) + rowNum;
    startCol = columnNum + (5 - rowNum) > 6 ? 6 : columnNum + (5 - rowNum);
    // console.log("Check diagonal going left " + startCol + " / " + startRow);
    winCount = 0;

    for (let nextCount = 0; nextCount < 6; nextCount++) {
      let nextCol = (startCol - nextCount) - 1;
      let nextRow = (startRow - nextCount) - 1;
      
      if (nextCol < 0 || nextRow < 0) {
        break;
      }
      
      if (this.board[startCol - nextCount][startRow - nextCount] === counterColour &&
          this.board[nextCol][nextRow] === counterColour) {
        winCount++;
        if (winCount === 3) {
          console.log("Win in diagonal going left!");
          return true;
        }
      }
      else {
        winCount = 0;
      }
    }

    return false;
  }
};
