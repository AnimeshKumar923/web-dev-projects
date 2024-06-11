const operationsBox = document.querySelector('.operations-box');
const opsDiv1 = document.createElement('div');
opsDiv1.classList.add(`addition`);
opsDiv1.textContent = `+`;
opsDiv1.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px;`
operationsBox.appendChild(opsDiv1);

const opsDiv2 = document.createElement('div');
opsDiv2.classList.add(`subtraction`);
opsDiv2.textContent = `-`;
opsDiv2.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px;`
operationsBox.appendChild(opsDiv2);

const opsDiv3 = document.createElement('div');
opsDiv3.classList.add(`mulltiplication`);
opsDiv3.textContent = `x`;
opsDiv3.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px;`
operationsBox.appendChild(opsDiv3);

const opsDiv4 = document.createElement('div');
opsDiv4.classList.add(`division`);
opsDiv4.textContent = `/`;
opsDiv4.style.cssText = `font-size: 50px; border: solid black 2px; padding: 5px;`
operationsBox.appendChild(opsDiv4);




// ***************************
