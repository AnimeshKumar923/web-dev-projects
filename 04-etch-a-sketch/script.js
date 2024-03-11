// --------- whiteboard size ---------------
let panelSize = prompt('Enter size', '16');

// -----------------------------------------

const body = document.querySelector('body');

const parentContainer = document.createElement('div');
parentContainer.classList.add('container')
body.appendChild(parentContainer);

const rowDivCSSflexbox = `display: flex; flex: 1 1 0; flex-wrap: wrap;`;

const rowDivCSStext = `border: 0px solid black; height: 150px; width: 135px; gap: 2px; ${rowDivCSSflexbox}`;

boxSetter();

const hover = document.querySelectorAll(`.col-div`);
hover.forEach(element => {
    element.addEventListener('mouseover', function(){
        this.style.backgroundColor = `green`;
    });
});


// clear whiteboard button
const clrBtn = document.createElement('button');
clrBtn.classList.add('clear-btn');
clrBtn.style.height = '50px'
clrBtn.style.width = '50px'
clrBtn.style.marginLeft = '50px'
clrBtn.style.marginTop = '50px'
clrBtn.textContent = 'Clear'
body.appendChild(clrBtn)

clrBtn.addEventListener('click', function(){
    hover.forEach(element => {
        element.style.backgroundColor = `white`;
    }); 
});


// while(panelSize<=100){
// }

function boxSetter(){
    for(let i=1; i<=panelSize; i++){
        const rowDiv = document.createElement('row-div');
        rowDiv.classList.add(`row-div`)
        rowDiv.style.cssText = rowDivCSStext;
        parentContainer.appendChild(rowDiv);
        for(let j=1; j<=panelSize; j++){
            const columnDiv = document.createElement('col-div');
            columnDiv.classList.add(`col-div`)
            columnDiv.style.cssText = 'border: 1px solid black; height: 30px; width: 30px';
            rowDiv.appendChild(columnDiv);    
        }
    }
}



// for(let i=1; i<=16; i++){
//     const rowDiv = document.createElement('row-div');
//     rowDiv.classList.add(`row-div`)
//     rowDiv.style.cssText = rowDivCSStext;
//     parentContainer.appendChild(rowDiv);
//     for(let j=1; j<=16; j++){
//         const columnDiv = document.createElement('col-div');
//         columnDiv.classList.add(`col-div`)
//         columnDiv.style.cssText = 'border: 1px solid black; height: 30px; width: 30px';
//         rowDiv.appendChild(columnDiv);    
//     }
// }











































// const panelBt = document.createElement('button');
// panelBt.classList.add('clear-btn');
// panelBt.style.height = '50px'
// panelBt.style.width = '50px'
// panelBt.style.marginLeft = '50px'
// panelBt.style.marginTop = '50px'
// panelBt.textContent = panelSize;
// body.appendChild(panelBt)
