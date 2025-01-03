//----------- GAME LOGIC ------------

const gameBoard = (function(){
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push({move: '', isOccupied: false});
  }
  return {
    updateGrid: function(index, grid, move){
      if(!grid[index].isOccupied){
        grid[index].move = move;
        grid[index].isOccupied = true;
      }
    },
    getGrid: function(){
      return grid;
    }
  }
})();

// 'one more round' function; 
// ask each time if user wants to start the new round or continue existing round; make logic accordingly

function playerTurn(playerOne, playerTwo, currentPlayer){
  if(!currentPlayer){
    currentPlayer = playerOne;
  }
  let gridPosition = Number(prompt(`take your move from 1-9 (${currentPlayer.username})`)) - 1;
  while(gameBoard.getGrid()[gridPosition].isOccupied === true){
    alert('enter different position' );
    gridPosition = Number(prompt(`take your move from 1-9 (${currentPlayer.username})`));
  }

  gameBoard.updateGrid(gridPosition, gameBoard.getGrid(), currentPlayer.userRole);
  let checkWin = winConditionCheck(gameBoard.getGrid());
  if(checkWin.didWin){
    return checkWin.winUser;
  }
  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  if(gridsFilled(gameBoard.getGrid()) === false){  // check if grid filled;
    return playerTurn(playerOne, playerTwo, currentPlayer);
  }
}

function gridsFilled(grid){
  for (let i = 0; i < grid.length; i++) {
    if(grid[i].isOccupied === false){
      return false;
    }
  }
}

function createPlayer(name, role){
  const username = name;
  const userRole = role
  return {username, userRole};
}

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
      return { didWin: true, winUser: xVar };
    }
  
    if (
      grid[item[0]].move === oVar &&
      grid[item[1]].move === oVar &&
      grid[item[2]].move === oVar
    ) {
      return { didWin: true, winUser: oVar };
    }
  }

  if (grid.every(cell => cell.isOccupied)) {
    return { didWin: true, winUser: 'draw' };
  }
    
  return false;
}
// winConditionCheck();
// const playerOne = new Player('ONE', 'x');
// const playerTwo = new Player('TWO', 'o');

function startGame(role){
  let name = prompt('enter name p1');
  const playerOne = createPlayer(name, role);

  let name2 = prompt('enter name p2');
  if(role === 'x'){
    role2 = 'o';
  }else{
    role2 = 'x';
  }
  const playerTwo = createPlayer(name2, role2);
  const winner = playerTurn(playerOne, playerTwo);
  alert(`${winner.toUpperCase()} WINS!`);
}

// startGame();
// console.log(gameBoard.getGrid());
// gameBoard.getGrid()[2].isOccupied = true;
// console.log(gameBoard.getGrid()[2].isOccupied);



//----------- DOM LOGIC ------------

const intializeDisplay = (function(){
  const gameBoardDiv = document.querySelector('.gameBoard');
  for(let i = 0; i < 9; i++){
    const cell = document.createElement('div');
    // cell.innerHTML = `${i + 1}`;
    cell.className = `cell`;
    cell.setAttribute('cell', `${i}`);
    cell.style.border = `1px solid rgb(176, 202, 30)`;
    gameBoardDiv.appendChild(cell);
  }

  

  const xMark = document.createElement('i');
  xMark.classList.add('fa-solid', 'fa-x', 'fa-2xl');

  const cellDivs = document.querySelectorAll('.cell');

  cellDivs.forEach((item) => {
    item.addEventListener('click', () => {
      console.log(item.getAttribute('cell'));
    })
  })

  const xBtn = document.querySelector('.xBtn');

  xBtn.addEventListener('click', () => {
    alert(`you've selected X, computer will play O`);
    startGame('x');
  })

  const oBtn = document.querySelector('.oBtn');

  oBtn.addEventListener('click', () => {
    alert(`you've selected O, computer will play X`);
    startGame('o');
  })
})();

// console.log()
// cellDivs.appendChild(xMark);
// gameBoardDiv.appendChild(btnDiv);