//----------- GAME LOGIC ------------

const gameBoard = (function(){
  // let gridPosition = null;

  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push({move: '', isOccupied: false});
  }

  const updateGrid = (index, move) => {
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

  gameBoard.updateGrid(gridPosition, currentPlayer);
  cell.textContent = 'X';
  let checkWin = winConditionCheck(gameBoard.getGrid());
  if(checkWin.didWin){
    alert(`${startGame.player1Name} WON the round!`) ;
    startGame.roundComplete = true;
    startGame.updateRounds();
    startGame.xWinCount++;
    updateScoreDOM();

    if(startGame.xWinCount > 1){
      alert(`${startGame.player1Name} WON THE GAME!`);
      startGame.gameOver = true;
      updateScoreDOM();
      return;
    }
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
  
  gameBoard.updateGrid(randomNum, 'o');

  const cells = document.querySelectorAll('.cell');
  cells[randomNum].textContent = 'O';
  
  let checkWin = winConditionCheck(gameBoard.getGrid());
  if(checkWin.didWin){
    alert(`${checkWin.user} WON!`) ;
    startGame.roundComplete = true;
    startGame.updateRounds();
    startGame.oWinCount++;
    updateScoreDOM();

    if(startGame.oWinCount > 1){
      alert('COMPUTER won the game!');
      startGame.gameOver = true;
      updateScoreDOM();
      return;
    }

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
    resetBoard();
    return { didWin: false, user: null };
  }
    
  return { didWin: false, user: null };;
}

// add form to get user input for better UX later on
const addEventListenersToCell = () => {
  document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', (e) => {
      playRound(startGame.player1, e.target);
    })
  })
}

const getPlayer1Name = () => {
  document.querySelector('#playerForm').addEventListener('submit', () => {
    document.querySelector('#player1').value;
  })
}

const getUserName = () => {
  document.querySelector('#playerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    startGame.player1Name = document.querySelector('#player1').value;

    if (startGame.player1Name.trim()) {
      alert(`${startGame.player1Name} will play X`);
      document.querySelector('#player1').value = '';
      updateScoreDOM();
      addEventListenersToCell(); // Call the function after capturing the name
    } else {
      alert('Please enter a valid name!');
      document.querySelector('#player1').value = '';
    }
  });
}

// make it iife before final execution of the program;
// UPDATE: made iife
const startGame = (() => {
  // let rounds = 0;
  let player1 = 'x';
  let player2 = 'o';
  let gameOver = false;
  let roundComplete = false;
  let xWinCount = 0;
  let oWinCount = 0;
  const player1Name = getUserName();

  document.querySelector('.restart').addEventListener('click', (e) => {
    location.reload();
  })

  const updateRounds = () => { roundComplete = false};
  return {updateRounds, player1, player2, gameOver, roundComplete, xWinCount, oWinCount, player1Name};
})();


const updateScoreDOM = () => {
  const playerScore = document.querySelector('.playerScore');
  const computerScore = document.querySelector('.computerScore');
  playerScore.textContent = `${startGame.player1Name}: ${startGame.xWinCount}`;
  computerScore.textContent = `Computer: ${startGame.oWinCount}`;
};