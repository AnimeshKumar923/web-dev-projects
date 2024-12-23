const gameBoard = (function(){
  // let grid = [null, null, null, null, null, null, null, null, null];
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push({move: '', isOccupied: false});
  }
  // playerMove()
  return grid;
})();

function playerTurn(playerOne, playerTwo){
  gameBoard.grid.forEach(item => {
    console.log(item);
  })
  let gridPosition = Number(prompt('take your move from 1-9'));
  while(playerOne.isOccupied === true || playerTwo.isOccupied === true){
    prompt('enter different position');
  }
  if(playerOne.role === 'x' && playerOne.isOccupied === false){
    grid[gridPosition].move = 'x';
    grid[gridPosition].isOccupied = true;
  } else {
    if(playerTwo.isOccupied === false){
      grid[gridPosition].move = 'o';
      grid[gridPosition].isOccupied = true;
    } 
  }
}

function createPlayer(name, role){
  const username = name;
  // this.playerId = playerId; // define it later on in future
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
      return xVar;
    }

    else if(
      grid[item[0]].move === oVar &&
      grid[item[1]].move === oVar &&
      grid[item[2]].move === oVar
    ){
      return oVar;
    }

    else {
      return 'draw';
    }
  });
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
}

startGame();