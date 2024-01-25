// assigning rock = 1, paper = 2, scissors = 3

let computerSelection = getComputerChoice();
let playerSelection = prompt("Your turn");

let lowercasePlayer = playerSelection.toLowerCase();
let playerChoiceNum;
if(lowercasePlayer == "rock"){
    playerChoiceNum = 1;
} else if(lowercasePlayer == "paper"){
    playerChoiceNum = 2;
} else if(lowercasePlayer == "scissors"){
    playerChoiceNum = 3;
} else{
    console.log(`Please enter correct choice!`);
}

gameRound(playerChoiceNum, computerChoiceNum);

var computerChoiceNum;
// console.log(computerChoiceNum);

function getComputerChoice(){
    let number = getRandom(1,3);
    switch(number){
        case 1:
            // obj = "Rock";
            computerChoiceNum = 1;
            return;
        case 2:
            // obj = "Paper";
            computerChoiceNum = 2;
            return;
        case 3:
            // obj = "Scissors";
            computerChoiceNum = 3;
            return;
    }
}
            
            
var isTie;
// assigning rock = 1, paper = 2, scissors = 3
function gameRound(playerChoiceNum, computerChoiceNum){
    if((playerChoiceNum === 1 && computerChoiceNum === 1) || (playerChoiceNum === 2 && computerChoiceNum === 2) || (playerChoiceNum === 3 && computerChoiceNum === 3)){
        console.log(`It's a tie!`);
        isTie = true;
    } else if((playerChoiceNum === 1 && computerChoiceNum === 2)){
        console.log(`Computer wins!`);
    } else if((playerChoiceNum === 1 && computerChoiceNum === 3)){
        console.log(`Player wins!`);
    } else if((playerChoiceNum === 2 && computerChoiceNum === 1)){
        console.log(`Player wins!`);
    } else if((playerChoiceNum === 2 && computerChoiceNum === 3)){
        console.log(`Computer wins!`);
    } else if((playerChoiceNum === 3 && computerChoiceNum === 1)){
        console.log(`Computer wins!`);
    } else if((playerChoiceNum === 3 && computerChoiceNum === 2)){
        console.log(`Player wins!`);
    }
}

// if(isTie){
//     gameRound(playerChoiceNum, computerChoiceNum);
// }

function getRandom(min, max) {
    const floatRandom = Math.random();
  
    const difference = max - min;
  
    // random between 0 and the difference
    const random = Math.round(difference * floatRandom);
  
    const randomWithinRange = random + min;
  
    return randomWithinRange;
}