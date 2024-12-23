const gameBoard = (function(){
  // let grid = [null, null, null, null, null, null, null, null, null];
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push({move: '', isOccupied: false});
  }
  // playerMove()
  return {
    updateGrid: function(index, grid){
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

function playerTurn(playerOne, playerTwo){
  gameBoard.getGrid().forEach(item => {
    console.log(item);
  })
  let gridPosition = Number(prompt('take your move from 1-9'));
  while(gameBoard.getGrid()[gridPosition].isOccupied === true){
    prompt('enter different position');
  }
  if(playerOne.role === 'x') // && gameBoard.getGrid()[gridPosition].isOccupied === false; removed due to assumptions that we checked for existing values by help of while loop; re-introduce if error occurs
  {
    getGrid()[gridPosition].move = 'x';
    getGrid()[gridPosition].isOccupied = true;
  }
}

// else {
//   if(playerTwo.isOccupied === false){
//     getGrid()[gridPosition].move = 'o';
//     getGrid()[gridPosition].isOccupied = true;
//   } 
// }

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
  // console.log(playerOne);
}

// startGame();
console.log(gameBoard.getGrid());
// gameBoard.getGrid()[2].isOccupied = true;
// console.log(gameBoard.getGrid()[2].isOccupied);