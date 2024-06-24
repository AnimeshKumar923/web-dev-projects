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

// let num1, num2, operation;

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


function operate(operator){
  switch (operator) {
    case '+':
      numberSection.textContent = add(data.num1, data.num2);
      break;
    case '-':
      numberSection.textContent = subtract(data.num1, data.num2);
      break;
    case '*':
      numberSection.textContent = multiply(data.num1, data.num2);
      break;
    case '/':
      numberSection.textContent = divide(data.num1, data.num2);
      break;
    default:
      alert('not a valid operation')
      break;
  }
}



// ------ CALCULATION LOGIC ---------

let data = {
  num1: [],
  num2: [],
  operation: `op`
}

function clearData(){
data.num1 = data.num2 = [];
data.operation = `op`;
numberSection.textContent = `start`;
countClicks = 0;
baseTen = 0;

console.clear();

}

// -------- DISPLAY LOGIC -----------

const numberSection = document.querySelector('.numbers')

let displayVal = 0;
numberSection.textContent = `start`;




// -----OPERATORS EVENTLISTENERS------

const operatorDisplay = document.querySelector('.operator');

opsDiv1.addEventListener('click', function(){
  operation = `+`;
  operatorDisplay.textContent = `${operation}`;
  data.operation = operation;
})

opsDiv2.addEventListener('click', function(){
  operation = `-`;
  operatorDisplay.textContent = `${operation}`;
  data.operation = operation;
})

opsDiv3.addEventListener('click', function(){
  operation = `*`;
  operatorDisplay.textContent = `${operation}`;
  data.operation = operation;
})

opsDiv4.addEventListener('click', function(){
  operation = `/`;
  operatorDisplay.textContent = `${operation}`;
  data.operation = operation;
})

equal.addEventListener('click', function(){
  operate(data.operation);
  
})

clearBtn.addEventListener('click', function(){
  clearData();
})

// ---- NUMBERS EVENTLISTENERS -----



const n0 = document.querySelector('.num-0');
n0.addEventListener('click', function(){
  displayVal = 0;
  numberSection.textContent = `${displayVal}`;
  // console.log('zero clicked')
  if(data.num2 === undefined){
    data.num1 = displayVal;
  }
  data.num2 = displayVal;
});




let countClicks = 0;
let baseTen = 0

const n1 = document.querySelector('.num-1');
n1.addEventListener('click', function(){
  // displayVal = 1;
  // if(data.num2 === undefined){
  // }
  // data.num2 = baseTen;
  baseTen += 10**countClicks;
  data.num1.push(baseTen);
  countClicks++;
  console.log(`baseTen = ${baseTen}`);
  console.log(`countClicks = ${countClicks}`);
  numberSection.textContent = `${baseTen}`;
  console.log(data.num1, data.num2, data.operation);  
  // numberSection.textContent = `${displayVal*baseTen}`;
  

});

const n2 = document.querySelector('.num-2');
n2.addEventListener('click', function(){
  displayVal = 2;
  numberSection.textContent = `${displayVal}`;
  
  data.num1.push(displayVal);
  // data.num2.push(displayVal);
  console.log(data.num1, data.num2, data.operation);
});

const n3 = document.querySelector('.num-3');
n3.addEventListener('click', function(){
  displayVal = 3;
  numberSection.textContent = `${displayVal}`;

  data.num1.push(displayVal);
  // data.num2.push(displayVal);
  console.log(data.num1, data.num2, data.operation);
});

const n4 = document.querySelector('.num-4');
n4.addEventListener('click', function(){
  displayVal = 4;
  numberSection.textContent = `${displayVal}`;

  data.num1.push(displayVal);
  // data.num2.push(displayVal);
  console.log(data.num1, data.num2, data.operation);
});

const n5 = document.querySelector('.num-5');
n5.addEventListener('click', function(){
  displayVal = 5;
  numberSection.textContent = `${displayVal}`;

  data.num1.push(displayVal);
  // data.num2.push(displayVal);
  console.log(data.num1, data.num2, data.operation);
});

const n6 = document.querySelector('.num-6');
n6.addEventListener('click', function(){
  displayVal = 6;
  
  data.num1.push(displayVal);
  // data.num2.push(displayVal);
  console.log(data.num1, data.num2, data.operation);
});

const n7 = document.querySelector('.num-7');
n7.addEventListener('click', function(){
  displayVal = 7;
  numberSection.textContent = `${displayVal}`;
  
  data.num1.push(displayVal);
  // data.num2.push(displayVal);
  console.log(data.num1, data.num2, data.operation);
});

const n8 = document.querySelector('.num-8');
n8.addEventListener('click', function(){
  displayVal = 8;
  numberSection.textContent = `${displayVal}`;

  data.num1.push(displayVal);
  // data.num2.push(displayVal);
  console.log(data.num1, data.num2, data.operation);
});

const n9 = document.querySelector('.num-9');
n9.addEventListener('click', function(){
  displayVal = 9;
  numberSection.textContent = `${displayVal}`;

  
  if(data.operation !== 'op'){
    data.num2.push(displayVal);
  } else{
    data.num1.push(displayVal);
  }
  console.log(data.num1, data.num2, data.operation);
});