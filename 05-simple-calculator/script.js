const rowOne = document.querySelector('.row-1');
const rowTwo = document.querySelector('.row-2');
const rowThree = document.querySelector('.row-3');
const rowFour = document.querySelector('.row-4');
const rowFive = document.querySelector('.row-5');


// ----  ROW 1 contents -------------
for (let i = 7; i <= 9; i++) {
  const digit = document.createElement('button');
  digit.classList.add(`digit`);
  digit.textContent = `${i}`;
  rowOne.appendChild(digit);
}

const division = document.createElement('button');
division.classList.add(`operand`);
division.textContent = `/`;
rowOne.appendChild(division);

// ---------------------------


// ----  ROW 2 contents -------------
for (let i = 4; i <= 6; i++) {
  const digit = document.createElement('button');
  digit.classList.add(`digit`);
  digit.textContent = `${i}`;
  rowTwo.appendChild(digit);
}

const multiplication = document.createElement('button');
multiplication.classList.add(`operand`);
multiplication.textContent = `*`;
rowTwo.appendChild(multiplication);

// -------------------------



// ----  ROW 3 contents -------------
for (let i = 1; i <= 3; i++) {
  const digit = document.createElement('button');
  digit.classList.add(`digit`);
  digit.textContent = `${i}`;
  rowThree.appendChild(digit);
}

const subtraction = document.createElement('button');
subtraction.classList.add(`operand`);
subtraction.textContent = `-`;
rowThree.appendChild(subtraction);

// ---------------------------


// ----  ROW 4 contents -------------

const decimal = document.createElement('button');
decimal.classList.add(`decimal`);
decimal.textContent = `.`;
rowFour.appendChild(decimal);

const zero = document.createElement('button');
zero.classList.add(`digit`);
zero.textContent = `0`;
rowFour.appendChild(zero);

const addition = document.createElement('button');
addition.classList.add(`operand`);
addition.textContent = `+`;
rowFour.appendChild(addition);

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
  // num1 = Number(num1);
  // num2 = Number(num2);
  // strToNumber(num1, num2);
  return strToNumber(num1) + strToNumber(num2);
}

function subtract(num1, num2){
  return strToNumber(num1) - strToNumber(num2);
}

function multiply(num1, num2){
  return strToNumber(num1) * strToNumber(num2);
}

function divide(num1, num2){
  if(num2 == 0){
    alert('ARE YOU TRYING TO CREATE A BLACK HOLE!')

  }
  return strToNumber(num1) / strToNumber(num2);
}

// console.log(add(5, 10), subtract(5, 10), multiply(5, 10), divide(5, 10));

let result;

// convert string to number
function strToNumber(n1){
  return Number(n1);
}

function operate(operator){
  if(data.num2 === ''){
    alert('enter 2nd operand');
  }
  switch (operator) {
    case '+':
      result = add(data.num1, data.num2);
      numberSection.textContent = result;
      break;
    case '-':
      result = subtract(data.num1, data.num2);
      numberSection.textContent = result;
      break;
    case '*':
      result = Math.round(multiply(data.num1, data.num2)* 100) / 100;      
      numberSection.textContent = result;
      break;
    case '/':
      result = Math.round(divide(data.num1, data.num2) * 100) / 100;
      if(result === Infinity){
        numberSection.textContent = `PLS DON'T CREATE ONE...`;
      }else{
        numberSection.textContent = result;
      }
      break;
    default:
      alert('not a valid operation')
      break;
  }
}



// ------ CALCULATION LOGIC ---------

// object to store the data
let data = {
  num1: '',
  num2: '',
  operand: ''
}

function clearData(){
data.num1 = data.num2 = '';
data.operand = '';
numberSection.textContent = 'start';
operatorDisplay.textContent = '';

console.clear();

}

// -------- DISPLAY LOGIC -----------

const numberSection = document.querySelector('.numbers')

let displayVal = 0;
numberSection.textContent = `start`;




// -----OPERATORS EVENTLISTENERS------

const operatorDisplay = document.querySelector('.operator');

addition.addEventListener('click', function(){
  operation = `+`;
  operatorDisplay.textContent = `${operation}`;
  data.operand = operation;
})

subtraction.addEventListener('click', function(){
  operation = `-`;
  operatorDisplay.textContent = `${operation}`;
  data.operand = operation;
})

multiplication.addEventListener('click', function(){
  operation = `*`;
  operatorDisplay.textContent = `${operation}`;
  data.operand = operation;
})

division.addEventListener('click', function(){
  operation = `/`;
  operatorDisplay.textContent = `${operation}`;
  data.operand = operation;
})

equal.addEventListener('click', function(){
  operate(data.operand);
  
})

clearBtn.addEventListener('click', function(){
  clearData();
})

// ---- NUMBERS EVENTLISTENERS -----


const digit = document.querySelectorAll('.digit');

for (let i = 0; i < digit.length; i++) {
  digit[i].addEventListener('click', function(){
    displayVal = `${digit[i].textContent}`;
    
    if(data.operand === ''){
      data.num1 += displayVal;
      numberSection.textContent = `${data.num1}`;
    } else{
      data.num2 += displayVal;
      numberSection.textContent = `${data.num2}`;
    }
    console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
    
  })
  
}












// for (let i = 0; i < 10; i++) {
// digit.addEventListener('click', function(){
//   displayVal = `${i}`;
//   numberSection.textContent = `${displayVal}`;
  
//   if(data.operation === 'op'){
//     data.num1.push(displayVal);
//   } else{
//     data.num2.push(displayVal);
//   }
//   console.log(data.num1, data.num2, data.operation);
// });
// }





// let countClicks = 0;
// let baseTen = 0

// const n1 = document.querySelector('.num-1');
// n1.addEventListener('click', function(){
//   displayVal = 1;
//   // if(data.num2 === undefined){
//   // }
//   // data.num2 = baseTen;
//   // baseTen += 10**countClicks;
//   // data.num1.push(baseTen);
//   // countClicks++;
//   // console.log(`baseTen = ${baseTen}`);
//   // console.log(`countClicks = ${countClicks}`);
//   // numberSection.textContent = `${baseTen}`;
//   // console.log(data.num1, data.num2, data.operation);  
//   // // numberSection.textContent = `${displayVal*baseTen}`;
  
//   if(data.operation !== ''){
//     data.num2 = displayVal;
//     // data.num2.push(displayVal);
//   } else{
//     // data.num1.push(displayVal);
//     data.num1 = displayVal;
//   }
//   console.log(`num1 = ${data.num1}\n num2 = ${data.num2}\n operation = ${data.operation}`);

// });



// const n3 = document.querySelector('.num-3');
// n3.addEventListener('click', function(){
//   displayVal = 3;
//   numberSection.textContent = `${displayVal}`;

//   if(data.operation === 'op'){
//     data.num1.push(displayVal);
//   } else{
//     data.num2.push(displayVal);
//   }
//   console.log(data.num1, data.num2, data.operation);
// });

// const n4 = document.querySelector('.num-4');
// n4.addEventListener('click', function(){
//   displayVal = 4;
//   numberSection.textContent = `${displayVal}`;

//   if(data.operation === 'op'){
//     data.num1.push(displayVal);
//   } else{
//     data.num2.push(displayVal);
//   }
//   console.log(data.num1, data.num2, data.operation);
// });

// const n5 = document.querySelector('.num-5');
// n5.addEventListener('click', function(){
//   displayVal = 5;
//   numberSection.textContent = `${displayVal}`;

//   if(data.operation === 'op'){
//     data.num1.push(displayVal);
//   } else{
//     data.num2.push(displayVal);
//   }
//   console.log(data.num1, data.num2, data.operation);
// });

// const n6 = document.querySelector('.num-6');
// n6.addEventListener('click', function(){
//   displayVal = 6;
  
//   if(data.operation === 'op'){
//     data.num1.push(displayVal);
//   } else{
//     data.num2.push(displayVal);
//   }
//   console.log(data.num1, data.num2, data.operation);
// });

// const n7 = document.querySelector('.num-7');
// n7.addEventListener('click', function(){
//   displayVal = 7;
//   numberSection.textContent = `${displayVal}`;
  
//   if(data.operation === 'op'){
//     data.num1.push(displayVal);
//   } else{
//     data.num2.push(displayVal);
//   }
//   console.log(data.num1, data.num2, data.operation);
// });

// const n8 = document.querySelector('.num-8');
// n8.addEventListener('click', function(){
//   displayVal = 8;
//   numberSection.textContent = `${displayVal}`;

//   if(data.operation === 'op'){
//     data.num1.push(displayVal);
//   } else{
//     data.num2.push(displayVal);
//   }
//   console.log(data.num1, data.num2, data.operation);
// });

// const n9 = document.querySelector('.num-9');
// n9.addEventListener('click', function(){
//   displayVal = 9;
//   numberSection.textContent = `${displayVal}`;

  
//   if(data.operation === 'op'){
//     data.num1.push(displayVal);
//   } else{
//     data.num2.push(displayVal);
//   }
//   console.log(data.num1, data.num2, data.operation);
// });