const gameBoard = (function(){
  // let grid = [null, null, null, null, null, null, null, null, null];
  let grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push({move: '', isOccupied: false});
  }
  let gridPosition = Number(prompt('take your move from 1-9'));
  // playerMove();
  
  function playerTurn(){
    if(playerOne.isOccupied === true){
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
})();

const Player = function(name, role){
  this.name = name;
  // this.playerId = playerId; // define it later on in future
  this.role = role // choose role X or O
}

function winConditionCheck(grid){
  let xVar = 'x';
  let oVar = 'o';
  const cases = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  
  cases.forEach(item => {
    item.forEach(element => {
      grid[element].move
    })
  });
  
  
}
const playerOne = new Player('ONE', 'x');
const playerTwo = new Player('TWO', 'o');