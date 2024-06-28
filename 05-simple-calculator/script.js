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
clearBtn.textContent = `AC`;  
rowFive.appendChild(clearBtn);

const backspaceBtn = document.createElement('button');
backspaceBtn.classList.add('backspace-btn');
backspaceBtn.textContent = `CE`;
rowFive.appendChild(backspaceBtn);


// -------- OPERATIONS LOGIC --------

function add(num1, num2){
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

let result;

// convert string to number
function strToNumber(n1){
  return Number(n1);
}

function operate(operator){
  if(data.num2 === ''){
    alert('enter both operands');
  }
  switch (operator) {
    case '+':
      result = add(data.num1, data.num2);
      numberSection.textContent = result;
      data.num1 = result;
      break;
    case '-':
      result = subtract(data.num1, data.num2);
      numberSection.textContent = result;
      data.num1 = result;
      break;
    case '*':
      result = Math.round(multiply(data.num1, data.num2)* 100000) / 100000;      
      numberSection.textContent = result;
      data.num1 = result;
      break;
    case '/':
      result = Math.round(divide(data.num1, data.num2) * 100000) / 100000;
      if(result === Infinity){
        numberSection.textContent = `PLS DON'T CREATE ONE...`;
      }else{
        numberSection.textContent = result;
        data.num1 = result;
      }
      break;
    // default:
    //   alert('enter values first')
    //   break;
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
// console.clear();

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
  console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
})

subtraction.addEventListener('click', function(){
  operation = `-`;
  operatorDisplay.textContent = `${operation}`;
  data.operand = operation;
  console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
})

multiplication.addEventListener('click', function(){
  operation = `*`;
  operatorDisplay.textContent = `${operation}`;
  data.operand = operation;
  console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
})

division.addEventListener('click', function(){
  operation = `/`;
  operatorDisplay.textContent = `${operation}`;
  data.operand = operation;
  console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
})

// operate function

equal.addEventListener('click', function(){
  if(data.num2 === '' || data.operand === ''){
  }
  operate(data.operand);
  data.operand = '';
  data.num2 = ''
  console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
  operatorDisplay.textContent = '';
})

clearBtn.addEventListener('click', function(){
  clearData();
})

// ---- NUMBERS EVENTLISTENERS -----


const digit = document.querySelectorAll('.digit');

Array.from(digit).forEach(item => {
  item.addEventListener('click', function(){    
    displayVal = `${item.textContent}`;
    if(data.operand === ''){
      // let decimalCount = 0;
      decimal.addEventListener('click', function(){
        if(data.num1 === '' && data.num2 === ''){
         alert('enter a number first');
        } else{
          if(checkDecimal(data.num1) === false){
            data.num1 += decimal.textContent;
            numberSection.textContent = `${data.num1}`;
          }
          console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
        }
      })
      data.num1 += displayVal;
      numberSection.textContent = `${data.num1}`;
    } else{
      decimal.addEventListener('click', function(){
        if(data.num1 === '' && data.num2 === ''){
         alert('enter a number first');
        } else{
          if(checkDecimal(data.num2) === false && data.num2 !== ''){
            data.num2 += decimal.textContent;
            numberSection.textContent = `${data.num2}`;
          }
          console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
        }
      })
      data.num2 += displayVal;
      numberSection.textContent = `${data.num2}`;
    }
    console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
  })
})


/**
 * Return true/false depending upon the input provided
 * @param n - takes input and checks for decimal present in the number or string
 * @returns boolean value
 */

// decimal case
function checkDecimal(n){
  // console.log(n);
  console.log(`type of n = ${typeof n}`);
  if(typeof n == 'number') return true;
  return n.includes('.');
}

// Backspace logic


backspaceBtn.addEventListener('click', function(){
  if(data.num1 === '' && data.num2 === ''){
    alert('no more digits to remove');
  } else{
    if(data.num2 === ''){
      data.num1 = removeLastElement(data.num1);
      numberSection.textContent = `${data.num1}`;
      console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
    } else{
      data.num2 = removeLastElement(data.num2);
      numberSection.textContent = `${data.num2}`;
      console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
    }
  }
})

/**
 * Returns a copy of string with last element removed.
 * @param data Accepts the incoming value in the string format 
 * @returns string with last element removed
 */ 

function removeLastElement(data){
  return data.slice(0, -1);
}

// KEYBOARD SUPPORT

// for (let i = 0; i < digit.length; i++) {
//   // console.log(digit);
//   digit[i].addEventListener('keydown', function(event){
//     displayVal = `${digit[i].textContent}`;
//     console.log(`key = ${event.key}`);  
//   })
// }

Array.from(digit).forEach(item => {
  item.addEventListener('keydown', function(event){
    let keyName = event.key;
    console.log(`text content = ${item.textContent}`);
    console.log(`keyname = ${keyName}`);
    if(keyName === item.textContent){
        displayVal = item.textContent;
    }
  })
});


// ['click','ontouchstart'].forEach( evt => 
//   digit.addEventListener(evt, display(), false)
// );



/** 
for (let i = 0; i < digit.length; i++) {
  digit[i].addEventListener('keydown', function(event){    
    displayVal = `${digit[i].textContent}`;
    
    if(data.operand === ''){
      // let decimalCount = 0;
      decimal.addEventListener('click', function(){
        if(data.num1 === '' && data.num2 === ''){
         alert('enter a number first');
        } else{
          if(checkDecimal(data.num1) === false){
            data.num1 += decimal.textContent;
            numberSection.textContent = `${data.num1}`;
          }

          // console.log(`deciaml count = ${decimalCount}`);
          console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
        }
      })
      data.num1 += displayVal;
      numberSection.textContent = `${data.num1}`;
    } else{
      decimal.addEventListener('click', function(){
        if(data.num1 === '' && data.num2 === ''){
         alert('enter a number first');
        } else{
          if(checkDecimal(data.num2) === false && data.num2 !== ''){
            data.num2 += decimal.textContent;
            numberSection.textContent = `${data.num2}`;
          }

          // console.log(`deciaml count = ${decimalCount}`);
          console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
        }
      })
      data.num2 += displayVal;
      numberSection.textContent = `${data.num2}`;
    }
    console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operand = ${data.operand}`);
    
  })
  
}
*/

// include special prompt for 80085