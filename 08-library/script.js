const display = document.querySelector('.display');
const card = document.createElement('div');
card.classList.add('card');
card.textContent = 'first card';
// card.style.cssText = 'border: 5px solid rgb(32, 155, 226); display: grid; grid-template-columns: repeat(2, 1fr)';
display.appendChild(card);
// display.appendChild('.card');