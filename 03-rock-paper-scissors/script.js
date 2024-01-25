// console.log("Hello");

let computerSelection = getComputerChoice();
// let playerSelection = prompt("Your turn");

// assigning rock = 1, paper = 2, scissors = 3
var choiceNumber;
console.log(choiceNumber);
console.log(computerSelection);

function getComputerChoice(){
    let number = getRandom(1,3);
    let obj = NaN;
    switch(number){
        case 1:
            obj = "Rock";
            choiceNumber = 1;
            return obj;
        case 2:
            obj = "Paper";
            choiceNumber = 2;
            return obj;
        case 3:
            obj = "Scissors";
            choiceNumber = 3;
            return obj;
    }
}


function gameRound(playerSelection, computerSelection){
    if(playerSelection){

    }
}


function getRandom(min, max) {
    const floatRandom = Math.random();
  
    const difference = max - min;
  
    // random between 0 and the difference
    const random = Math.round(difference * floatRandom);
  
    const randomWithinRange = random + min;
  
    return randomWithinRange;
}