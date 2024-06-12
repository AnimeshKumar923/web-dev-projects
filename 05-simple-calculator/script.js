const rowOne = document.querySelector('.row-1');
const rowTwo = document.querySelector('.row-2');
const rowThree = document.querySelector('.row-3');
const rowFour = document.querySelector('.row-4');
const rowFive = document.querySelector('.row-5');


// ----  ROW 1 contents -------------
for (let i = 7; i <= 9; i++) {
  const numbers = document.createElement('button');
  numbers.classList.add(`num-${i}`);
  numbers.textContent = `${i}`;
  rowOne.appendChild(numbers);
}

const opsDiv4 = document.createElement('button');
opsDiv4.classList.add(`division`);
opsDiv4.textContent = `/`;
rowOne.appendChild(opsDiv4);

// ---------------------------


// ----  ROW 2 contents -------------
for (let i = 4; i <= 6; i++) {
  const numbers = document.createElement('button');
  numbers.classList.add(`num-${i}`);
  numbers.textContent = `${i}`;
  rowTwo.appendChild(numbers);
}

const opsDiv3 = document.createElement('button');
opsDiv3.classList.add(`multiplication`);
opsDiv3.textContent = `*`;
rowTwo.appendChild(opsDiv3);

// -------------------------



// ----  ROW 3 contents -------------
for (let i = 1; i <= 3; i++) {
  const numbers = document.createElement('button');
  numbers.classList.add(`num-${i}`);
  numbers.textContent = `${i}`;
  rowThree.appendChild(numbers);
}

const opsDiv2 = document.createElement('button');
opsDiv2.classList.add(`subtraction`);
opsDiv2.textContent = `-`;
rowThree.appendChild(opsDiv2);

// ---------------------------


// ----  ROW 4 contents -------------

const decimal = document.createElement('button');
decimal.classList.add(`decimal`);
decimal.textContent = `.`;
rowFour.appendChild(decimal);

const zero = document.createElement('button');
zero.classList.add(`num-0`);
zero.textContent = `0`;
rowFour.appendChild(zero);

const opsDiv1 = document.createElement('button');
opsDiv1.classList.add(`addition`);
opsDiv1.textContent = `+`;
rowFour.appendChild(opsDiv1);

const equal = document.createElement('button');
equal.classList.add(`equal`);
equal.textContent = `=`;
rowFour.appendChild(equal);


// -------------------------------


// ----  ROW 5 contents -------------

const clearBtn = document.createElement('button');
clearBtn.classList.add(`clear-btn`);
clearBtn.textContent = `clear`;  
rowFive.appendChild(clearBtn);


// -------- OPERATIONS LOGIC --------

let num1, num2, operation;

function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

// console.log(add(5, 10), subtract(5, 10), multiply(5, 10), divide(5, 10));


function operate(operator, num1, num2){
  switch (operator) {
    case '+':
      add(num1, num2);
      break;
    case '-':
      subtract(num1, num2);
      break;
    case '*':
      multiply(num1, num2);
      break;
    case '/':
      divide(num1, num2);
      break;
    default:
      alert('not a valid operation')
      break;
  }
}


// -------- DISPLAY LOGIC -----------

const displaySection = document.querySelector('.display')

let displayVal = `0`;
displaySection.textContent = `${displayVal}`;


// ---- NUMBERS EVENTLISTENERS -----
const n0 = document.querySelector('.num-0');
n0.addEventListener('click', function(){
  displayVal = 0;
  displaySection.textContent = `${displayVal}`;
  // console.log('zero clicked')
});

const n1 = document.querySelector('.num-1');
n1.addEventListener('click', function(){
  displayVal = 1;
  displaySection.textContent = `${displayVal}`;
  // console.log('zero clicked')
});

const n2 = document.querySelector('.num-2');
n2.addEventListener('click', function(){
  displayVal = 2;
  displaySection.textContent = `${displayVal}`;
  // console.log('zero clicked')
});

const n3 = document.querySelector('.num-3');
n3.addEventListener('click', function(){
  displayVal = 3;
  displaySection.textContent = `${displayVal}`;
  // console.log('zero clicked')
});

const n4 = document.querySelector('.num-4');
n4.addEventListener('click', function(){
  displayVal = 4;
  displaySection.textContent = `${displayVal}`;
  // console.log('zero clicked')
});

const n5 = document.querySelector('.num-5');
n5.addEventListener('click', function(){
  displayVal = 5;
  displaySection.textContent = `${displayVal}`;
  // console.log('zero clicked')
});

const n6 = document.querySelector('.num-6');
n6.addEventListener('click', function(){
  displayVal = 6;
  displaySection.textContent = `${displayVal}`;
  // console.log('zero clicked')
});

const n7 = document.querySelector('.num-7');
n7.addEventListener('click', function(){
  displayVal = 7;
  displaySection.textContent = `${displayVal}`;
  // console.log('zero clicked')
});

const n8 = document.querySelector('.num-8');
n8.addEventListener('click', function(){
  displayVal = 8;
  displaySection.textContent = `${displayVal}`;
  // console.log('zero clicked')
});

const n9 = document.querySelector('.num-9');
n9.addEventListener('click', function(){
  displayVal = 9;
  displaySection.textContent = `${displayVal}`;
  // console.log('zero clicked')
});