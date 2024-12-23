const gameBoard = (function(){
  let grid = [null, null, null, null, null, null, null, null, null];
})();

const playerMove = function(){
  let movePosition = Number(prompt('take your move from 1-9'));
  console.log(movePosition);
  // console.log(typeof movePosition);

}

const Player = function(name){
  this.name = name;
  this.playerId = playerId;
}

// playerMove();