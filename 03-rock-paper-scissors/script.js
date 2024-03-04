// assigning rock = 1, paper = 2, scissor = 3

function getComputerChoice(){
    let number = getRandom(1,3);
    switch(number){
        case 1:
            // obj = 'Rock';
            return 1;
        case 2:
            // obj = 'Paper';
            return 2;
        case 3:
            // obj = 'scissor';
            return 3;
    }
}
            
let playerChoiceNum;
let computerChoiceNum;

// function playerChoice(){
//     let playerSelection; //= prompt('Your turn');

//     let lowercasePlayer = playerSelection ;//= playerSelection.toLowerCase();
//     if(lowercasePlayer === 'rock'){
//         return playerChoiceNum = 1;
//     } else if(lowercasePlayer === 'paper'){
//         return playerChoiceNum = 2;
//     } else if(lowercasePlayer === 'scissor'){
//         return playerChoiceNum = 3;
//     } else{
//         console.log(`Please enter correct choice!`);
//     }
// }

// assigning rock = 1, paper = 2, scissor = 3
var isTie;
var computerWinCount = 0;
var playerWinCount = 0;
let result;
let roundInfo;

function playRound(playerChoiceNum, computerChoiceNum){
    if((playerChoiceNum === computerChoiceNum)){
        isTie = true;
        playerWinCount++;
        computerWinCount++;
        return (`It's a tie!`);
    } else if((playerChoiceNum === 1 && computerChoiceNum === 2)){
        isTie = false;
        computerWinCount++;
        return (`Computer wins!`);
    } else if((playerChoiceNum === 1 && computerChoiceNum === 3)){
        isTie = false;
        playerWinCount++;
        return (`You win!`);
    } else if((playerChoiceNum === 2 && computerChoiceNum === 1)){
        isTie = false;
        playerWinCount++;
        return (`You win!`);
    } else if((playerChoiceNum === 2 && computerChoiceNum === 3)){
        isTie = false;
        computerWinCount++;
        return (`Computer wins!`);
    } else if((playerChoiceNum === 3 && computerChoiceNum === 1)){
        isTie = false;
        computerWinCount++;
        return (`Computer wins!`);
    } else if((playerChoiceNum === 3 && computerChoiceNum === 2)){
        isTie = false;
        playerWinCount++;
        return (`You win!`);
    }
}


while(isTie){
    alert(`It's a tie! Try Again`);
    playerChoiceNum = playerChoice();
    computerChoiceNum = getComputerChoice();
    result = playRound(playerChoiceNum, computerChoiceNum);
}

function getRandom(min, max) {
    const floatRandom = Math.random();
  
    const difference = max - min;
  
    // random between 0 and the difference
    const random = Math.round(difference * floatRandom);
  
    const randomWithinRange = random + min;
  
    return randomWithinRange;
}

function game(){

    // for(i=0; i<5; i++){
    //     playerChoiceNum = playerChoice();
    //     computerChoiceNum = getComputerChoice();
    //     result = playRound(playerChoiceNum, computerChoiceNum);
        // console.log(result);
    // }

    // if(playerWinCount>computerWinCount){
    //     console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
    //     console.log(`You won the round!`);
    // } else if(playerWinCount<computerWinCount){
    //     console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
    //     console.log(`Computer won the round!`);
    // }
}

// game(computerWinCount, playerWinCount);


// DOM Section
const body = document.querySelector('body');
const btnDiv = document.createElement('div');
btnDiv.classList.add('buttons');
body.appendChild(btnDiv);

// the three buttons
const buttonsClass = document.querySelector('.buttons');
buttonsClass.style.display = 'flex';
buttonsClass.style.gap = '50px';
buttonsClass.style.paddingTop = '50px';
buttonsClass.style.paddingLeft = '50px';

const rockBtn = document.createElement('button');
rockBtn.classList.add('rock');
rockBtn.textContent = 'Rock'

const paperBtn = document.createElement('button');
paperBtn.classList.add('paper');
paperBtn.textContent = 'Paper'

const scissorBtn = document.createElement('button');
scissorBtn.classList.add('scissor');
scissorBtn.textContent = 'Rock'

buttonsClass.appendChild(rockBtn);
buttonsClass.appendChild(paperBtn);
buttonsClass.appendChild(scissorBtn);



//----------------- buttons eventListener START ---------------//

const rockBtnEvnt = document.querySelector('.rock');
const paperBtnEvnt = document.querySelector('.paper');
const scissorBtnEvnt = document.querySelector('.scissor');

rockBtnEvnt.addEventListener('click', function(){
    // playerSelection = 'rock';
    playerChoiceNum = 1;
    computerChoiceNum = getComputerChoice();
    let roundResult = playRound(playerChoiceNum, computerChoiceNum);
    resultDiv.textContent = roundResult;
});

paperBtnEvnt.addEventListener('click', function(){
    // playerSelection = 'paper';
    playerChoiceNum = 2;
    computerChoiceNum = getComputerChoice();
    let roundResult = playRound(playerChoiceNum, computerChoiceNum);
    resultDiv.textContent = roundResult;
});

scissorBtnEvnt.addEventListener('click', function(){
    // playerSelection = 'paper';
    playerChoiceNum = 3;
    computerChoiceNum = getComputerChoice();
    let roundResult = playRound(playerChoiceNum, computerChoiceNum);
    resultDiv.textContent = roundResult;
});

//----------------- buttons eventListener END ---------------//


const resultDiv = document.createElement('div');
resultDiv.classList.add('result');
body.appendChild(resultDiv);

resultDiv.style.display = 'flex';
resultDiv.style.height = '100px';
resultDiv.style.width = '100px';
resultDiv.style.paddingTop = '50px';
resultDiv.style.paddingLeft = '50px';


/////////////////////////////////////////////////////
// const btn = document.querySelector('button');
// btn.addEventListener('click', function (){
//     // switch (btn.className) {
//     //     case 'rock':
//     //         playerSelection = 'rock';
//     //         break;
            
//     //     case 'paper':
//     //         playerSelection = 'paper';
//     //         break;
            
//     //     case 'scissor':
//     //         playerSelection = 'scissor';
//     //         break;
//         // default:
//         //     break;
//         if(btn.className === 'rock'){
//             playerSelection = 'rock';
//             playRound(playerChoiceNum, computerChoiceNum)
//         } else if(btn.className === 'paper'){
//             playRound(playerChoiceNum, computerChoiceNum)
//             playerSelection = 'paper';
//         } else if(btn.className === 'scissor'){
//             playerSelection = 'scissor'
//             playRound(playerChoiceNum, computerChoiceNum)
//         }
//     }
// );


function determineWinner(){
    if(playerWinCount>computerWinCount){
        // console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
        roundInfo = `Player: ${playerWinCount} Computer: ${computerWinCount}\nYou won the round!`
        // console.log(`You won the round!`);
    } else if(playerWinCount<computerWinCount){
        // console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
        roundInfo = `Player: ${playerWinCount} Computer: ${computerWinCount}\nComputer won the round!`;
        // console.log(`Computer won the round!`);
    }
}

determineWinner();
resultDiv.textContent = roundInfo;