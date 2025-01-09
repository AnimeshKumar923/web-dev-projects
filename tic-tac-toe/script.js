//----------- GAME LOGIC ------------

const gameBoard = (function(){
  // let gridPosition = null;

  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push({move: '', isOccupied: false});
  }

  const updateGrid = (index, grid, move) => {
    if(!grid[index].isOccupied){
      grid[index].move = move;
      grid[index].isOccupied = true;
    }
  }
  
  const getGrid = () => grid;

  return {updateGrid, getGrid};
})();

// console.log(typeof gameBoard)
console.log(gameBoard)
// 'one more round' function; 
// ask each time if user wants to start the new round or continue existing round; make logic accordingly

function playRound(currentPlayer, cell){
  // console.log(`grid position = ${gridPosition}`);
  let gridPosition = cell.getAttribute('cell');

  console.log(cell.getAttribute('cell'));
  console.log(gameBoard.getGrid());
  console.log(startGame.player1);
  console.log(typeof startGame.player1);
  console.log(startGame.player2);
  console.log(typeof startGame.player2);
  console.log(currentPlayer);
  
  if(startGame.gameOver){
    return;
  }

  if(gameBoard.getGrid()[gridPosition].isOccupied){
    alert('position already occupied');
    return;
  }
  console.log(gameBoard.getGrid());

  gameBoard.updateGrid(gridPosition, gameBoard.getGrid(), currentPlayer);
  cell.textContent = 'X';
  let checkWin = winConditionCheck(gameBoard.getGrid());
  if(checkWin.didWin){
    alert(`${checkWin.user} WON!`) ;
    startGame.roundComplete = true;
    startGame.updateRounds();

    if(startGame.xWinCount > 1){
      alert('YOU won the game!');
      startGame.gameOver = true;
      return;
    }
    startGame.xWinCount++;
    resetBoard();
    return;
    // check for BEST OF 3 ROUNDS; set gameOver = true;
    // if won by any one, start new round
    // after each round check for overall win from out of 3 rounds; 
  }

  if(!startGame.roundComplete){
    computerMove();
  }

}

const resetBoard = () => {
  startGame.roundComplete = false;

  document.querySelectorAll('.cell').forEach(cell => {
    cell.textContent = '';
  })

  gameBoard.getGrid().forEach(item => {
    item.move = '';
    item.isOccupied = false;
  });
}

const computerMove = () => {
  let randomNum = getRandomNumber();
  while(gameBoard.getGrid()[randomNum].isOccupied){
    randomNum = getRandomNumber();
  }
  
  if(startGame.gameOver){
    return;
  }
  
  if(gameBoard.getGrid()[randomNum].isOccupied){
    alert('position already occupied');
    return;
  }
  console.log(gameBoard.getGrid());
  
  gameBoard.updateGrid(randomNum, gameBoard.getGrid(), 'o');

  const cells = document.querySelectorAll('.cell');
  cells[randomNum].textContent = 'O';
  
  let checkWin = winConditionCheck(gameBoard.getGrid());
  if(checkWin.didWin){
    alert(`${checkWin.user} WON!`) ;
    startGame.roundComplete = true;
    startGame.updateRounds();
    startGame.oWinCount++;

    if(startGame.oWinCount > 1){
      alert('COMPUTER won the game!');
      startGame.gameOver = true;
      return;
    }

    startGame.oWinCount++;
    resetBoard();
    return;
  }
}

const getRandomNumber = () => Math.floor(Math.random() * 9);


function winConditionCheck(grid){
  let xVar = 'x';
  let oVar = 'o';
  const cases = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

  for (let item of cases) {
    if (
      grid[item[0]].move === xVar &&
      grid[item[1]].move === xVar &&
      grid[item[2]].move === xVar
    ) {
      return { didWin: true, user: 'YOU' };
    }
  
    if (
      grid[item[0]].move === oVar &&
      grid[item[1]].move === oVar &&
      grid[item[2]].move === oVar
    ) {
      return { didWin: true, user: 'COMPUTER' };
    }
  }

  if (grid.every(cell => cell.isOccupied)) {
    alert('ROUND DRAW!');
    return;
  }
    
  return false;
}

const addEventListenersToGame = () => {
  // add form to get user input for better UX later on

  document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', (e) => {
      playRound(startGame.player1, e.target);
    })
  })
}


// make it iife before final execution of the program;
// UPDATE: made iife
const startGame = (() => {
  let rounds = 0;
  let player1 = 'x';
  let player2 = 'o';
  let gameOver = false;
  let roundComplete = false;
  let xWinCount = 0;
  let oWinCount = 0;
  addEventListenersToGame();

  const updateRounds = () => { rounds++; roundComplete = false};
  
  return {updateRounds, player1, player2, gameOver, rounds, roundComplete, xWinCount, oWinCount};
})();




