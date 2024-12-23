const gameBoard = (function(){
  // let grid = [null, null, null, null, null, null, null, null, null];
  let grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push({move: null, isOccupied: false});
  }
  let gridPosition = Number(prompt('take your move from 1-9'));
  // playerMove();
  const playerOne = new Player('ONE', 'x');
  const playerTwo = new Player('TWO', 'o');
  
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

  const Player = function(name, role){
    this.name = name;
    this.playerId = playerId;
    this.role = role // choose role X or O
  }
})();