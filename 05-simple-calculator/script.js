const rowOne = document.querySelector('.row-1');
const rowTwo = document.querySelector('.row-2');
const rowThree = document.querySelector('.row-3');
const rowFour = document.querySelector('.row-4');


// ----  ROW 1 contents -------------
for (let i = 7; i <= 9; i++) {
  const numbers = document.createElement('div');
  numbers.classList.add(`num-${i}`);
  numbers.textContent = `${i}`;
  numbers.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px; width: 50px; display: flex; justify-content: center;`
  rowOne.appendChild(numbers);
}

const opsDiv4 = document.createElement('div');
opsDiv4.classList.add(`division`);
opsDiv4.textContent = `/`;
opsDiv4.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px; width: 50px; display: flex; justify-content: center;`
rowOne.appendChild(opsDiv4);

// ---------------------------


// ----  ROW 2 contents -------------
for (let i = 4; i <= 6; i++) {
  const numbers = document.createElement('div');
  numbers.classList.add(`num-${i}`);
  numbers.textContent = `${i}`;
  numbers.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px; width: 50px; display: flex; justify-content: center;`
  rowTwo.appendChild(numbers);
}

const opsDiv3 = document.createElement('div');
opsDiv3.classList.add(`mulltiplication`);
opsDiv3.textContent = `*`;
opsDiv3.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px; width: 50px; display: flex; justify-content: center;`
rowTwo.appendChild(opsDiv3);

// -------------------------



// ----  ROW 3 contents -------------
for (let i = 1; i <= 3; i++) {
  const numbers = document.createElement('div');
  numbers.classList.add(`num-${i}`);
  numbers.textContent = `${i}`;
  numbers.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px; width: 50px; display: flex; justify-content: center;`
  rowThree.appendChild(numbers);
}

const opsDiv2 = document.createElement('div');
opsDiv2.classList.add(`subtraction`);
opsDiv2.textContent = `-`;
opsDiv2.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px; width: 50px; display: flex; justify-content: center;`
rowThree.appendChild(opsDiv2);

// ---------------------------


// ----  ROW 4 contents -------------

const decimal = document.createElement('div');
decimal.classList.add(`decimal`);
decimal.textContent = `.`;
decimal.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px; width: 50px; display: flex; justify-content: center;`
rowFour.appendChild(decimal);

const zero = document.createElement('div');
zero.classList.add(`zero`);
zero.textContent = `0`;
zero.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px; width: 50px; display: flex; justify-content: center;`
rowFour.appendChild(zero);

const opsDiv1 = document.createElement('div');
opsDiv1.classList.add(`addition`);
opsDiv1.textContent = `+`;
opsDiv1.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px; width: 50px; display: flex; justify-content: center;`
rowFour.appendChild(opsDiv1);

const equal = document.createElement('div');
equal.classList.add(`equal`);
equal.textContent = `=`;
equal.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px; width: 50px; display: flex; justify-content: center;`
rowFour.appendChild(equal);


// -------------------------------







// NUMBERS   ***************************
// for(let i=0; i<=9; i++){
//   const numbers = document.createElement('div');
//   numbers.classList.add(`num-${i}`);
//   numbers.textContent = `${i}`;
//   numbers.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px; width: 50px; display: flex; justify-content: center;`
//   operationsBox.appendChild(numbers);
// }
