const gameBoard = (function(){
  // let grid = [null, null, null, null, null, null, null, null, null];
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push({move: '', isOccupied: false});
  }
  // playerMove()
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
  // gameBoard.getGrid().forEach(item => {
  //   console.log(item);
  // })
  let gridPosition = Number(prompt(`take your move from 1-9 ${currentPlayer.username}`)) - 1;
  while(gameBoard.getGrid()[gridPosition].isOccupied === true){
    prompt('enter different position');
    gridPosition = Number(prompt(`take your move from 1-9 ${currentPlayer.username}`));
  }

  
  gameBoard.updateGrid(gridPosition, gameBoard.getGrid(), currentPlayer.userRole);
  let checkWin = winConditionCheck(gameBoard.getGrid());
  if(checkWin){
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
    // return grid[i].isOccupied;  // try returning the above expression directly if this current one works
  }
}

function createPlayer(name, role){
  const username = name;
  const userRole = role // choose role X or O
  return {username, userRole};
}

function winConditionCheck(grid){
  let xVar = 'x';
  let oVar = 'o';
  const cases = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

  cases.forEach(item => {
    if(
      grid[item[0]].move === xVar &&
      grid[item[1]].move === xVar &&
      grid[item[2]].move === xVar
    ){
      return {didWin: true, winUser: xVar};
    }

    else if(
      grid[item[0]].move === oVar &&
      grid[item[1]].move === oVar &&
      grid[item[2]].move === oVar
    ){
      return {didWin: true, winUser: oVar};
    }

    else {
      return {didWin: true, winUser: 'draw'};
    }
  });

  return false;
}
// winConditionCheck();
// const playerOne = new Player('ONE', 'x');
// const playerTwo = new Player('TWO', 'o');

function startGame(){
  let name = prompt('enter name');
  let role = prompt('choose role (x/o)');
  const playerOne = createPlayer(name, role);

  let name2 = prompt('enter name');
  if(role === 'x'){
    role2 = 'o';
  }else{
    role2 = 'x';
  }
  const playerTwo = createPlayer(name2, role2);
  playerTurn(playerOne, playerTwo);
  // console.log(playerOne);
}

startGame();
console.log(gameBoard.getGrid());
// gameBoard.getGrid()[2].isOccupied = true;
// console.log(gameBoard.getGrid()[2].isOccupied);