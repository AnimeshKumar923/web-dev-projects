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
  let gridPosition = cell.getAttribute('cell')
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

  if(gameBoard.getGrid()[gridPosition].isOccupied === true){
    alert('position already occupied');
    return;
  }
  console.log(gameBoard.getGrid());

  gameBoard.updateGrid(gridPosition, gameBoard.getGrid(), currentPlayer);
  cell.textContent = 'X';  
  let checkWin = winConditionCheck(gameBoard.getGrid());
  if(checkWin.didWin){
    alert(`${checkWin.user} WON!`) ;
  }

  computerMove();
  
  
  // currentPlayer = currentPlayer === startGame.playerOne ? startGame.playerTwo : startGame.playerOne;
  // if(gridsFilled(gameBoard.getGrid()) === false){  // check if grid filled;
  //   return playRound(playerOne, playerTwo, currentPlayer);
  // }
}

const computerMove = () => {
  let randomNum = getRandomNumber();
  if(gameBoard.getGrid()[randomNum].isOccupied === true){
    getRandomNumber()
  }
  gameBoard.updateGrid(randomNum, gameBoard.getGrid(), 'o');

}

const getRandomNumber = () => Math.floor(Math.random() * 9);
// function gridsFilled(grid){
//   for (let i = 0; i < grid.length; i++) {
//     if(grid[i].isOccupied === false){
//       return false;
//     }
//   }
// }

// function createPlayer(name, role){
//   const username = name;
//   const userRole = role
//   return {username, userRole};
// }

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
    alert('ROUND DRAW!')
  }
    
  return false;
}
// winConditionCheck();
// const playerOne = new Player('ONE', 'x');
// const playerTwo = new Player('TWO', 'o');

const addEventListenersToGame = () => {
  // add form to get user input for better UX later on

  document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', (e) => {
      playRound(startGame.player1, e.target);
    })
  })
}


// make it iife before final execution of the program
const startGame = (() => {
  let rounds = 0;
  let player1 = 'x';
  let player2 = 'o';
  let gameOver = false;
  addEventListenersToGame();

  const updateRounds = () => { rounds++; };
  
  const setGameOver = (state) => { gameOver = state; };
  
  return {updateRounds, setGameOver, player1, player2, gameOver, rounds};
})();

// const initializeDisplay = (function(){
//   addEventListenersToGame();
// })();


// 
// function to display result using DOM manipulation; make the whole element using DOM only

// startGame();
// console.log(createPlayer('a','xoxo'));
